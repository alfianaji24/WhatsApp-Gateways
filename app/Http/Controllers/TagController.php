<?php

namespace App\Http\Controllers;


use App\Models\Device;
use App\Models\Tag;
use App\Services\WhatsappService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class TagController extends Controller
{

    protected $wa;
    public function __construct(WhatsappService $whatsappService)
    {

        $this->wa = $whatsappService;
    }

    public function index()
    {
        return view('pages.phonebook.index');
    }

    public function getPhonebook(Request $request)
    {
        if ($request->ajax()) {
            $phonebooks = $request->user()->phonebooks()->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', '%' . $request->search . '%');
            })->latest()->paginate(15);

            $html = view('pages.phonebook.dataphonebook', compact('phonebooks'))->render();
            $last_page = $phonebooks->lastPage();
            $current_page = $phonebooks->currentPage();

            return response()->json(['html' => $html, 'last_page' => $last_page, 'current_page' => $current_page]);
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'min:3', 'unique:tags']
        ]);

        Tag::create([
            'user_id' => Auth::user()->id,
            'name' => $request->name
        ]);

        return back()->with('alert', [
            'type' => 'success',
            'msg' => 'Success add tag!'
        ]);
    }


    public function destroy(Request $request)
    {
        try {
            //code...
            $t = Tag::with('contacts')->find($request->id);
            $t->delete();
            return back()->with('alert', [
                'type' => 'success',
                'msg' => 'Success delete tag!'
            ]);
        } catch (\Throwable $th) {
            return back()->with('alert', ['type' => 'danger', 'msg' => 'Something went wrong! (dt)']);
        }
    }

    public function fetchGroups(Request $request)
    {
        try {
            if (!$request->device) {
                return back()->with('alert', ['type' => 'danger', 'msg' => 'Please select device first from the dropdown above!']);
            }
            
            $device = Device::find($request->device);
            if (!$device) {
                return back()->with('alert', ['type' => 'danger', 'msg' => 'Device not found!']);
            }
            
            if ($device->status != 'Connected') {
                return back()->with('alert', ['type' => 'danger', 'msg' => 'Device ' . $device->body . ' is not connected! Please connect the device first.']);
            }
            
            // Clear cache first to get fresh data
            Cache::forget('groups' . $device->body);
            
            // Test WhatsApp server connection first
            $waServerUrl = env('WA_URL_SERVER');
            if (!$waServerUrl) {
                return back()->with('alert', ['type' => 'danger', 'msg' => 'WhatsApp server URL not configured!']);
            }
            
            // For production HTTPS, ensure proper SSL handling
            if (strpos($waServerUrl, 'https://') === 0) {
                // Log production server access
                if (config('app.debug')) {
                    Log::info("Connecting to production WhatsApp server: " . $waServerUrl);
                }
            }
            
            // Fetch groups from WhatsApp service
            $respon = $this->wa->fetchGroups($device);

            if ($respon->status === false) {
                $errorMsg = $respon->message ?? 'Failed to fetch groups from WhatsApp server';
                
                // Provide specific troubleshooting based on error message
                if (strpos(strtolower($errorMsg), 'connection') !== false) {
                    $troubleshooting = 'WhatsApp connection issue detected! Server is accessible but WhatsApp is not connected.<br>
                    <strong>Solutions:</strong><br>
                    1. Check if WhatsApp device is properly connected to WhatsApp<br>
                    2. Scan QR code again if device disconnected<br>
                    3. Verify device status shows "Connected" in dashboard<br>
                    4. Try sending a test message first<br>
                    5. Contact administrator if problem persists';
                    
                    return back()->with('alert', ['type' => 'danger', 'msg' => $troubleshooting]);
                }
                
                return back()->with('alert', ['type' => 'danger', 'msg' => 'Failed to fetch groups: ' . $errorMsg]);
            }

            if (!isset($respon->data) || count($respon->data) < 1) {
                return back()->with('alert', [
                    'type' => 'warning', 
                    'msg' => 'No groups found! Solutions:<br>
                    1. Make sure the device has joined at least one WhatsApp group<br>
                    2. Wait a few minutes for groups to sync<br>
                    3. Try sending a test message first'
                ]);
            }

            $groupsCount = count($respon->data);
            $contactsAdded = 0;

            foreach ($respon->data as $group) {
                // insert to tags
                $namePhoneBook = $group->subject . '( ID : ' . $group->id . ' )';
                $validNamePhoneBook = preg_replace('/[^a-zA-Z0-9():\s@.-]+/', '', $namePhoneBook);
                $tag = $request->user()->phonebooks()->firstOrCreate(['name' => $validNamePhoneBook]);

                foreach ($group->participants as $member) {
                    $memberId = $member->phoneNumber ?? $member->id;
                    $number = str_replace('@s.whatsapp.net', '', $memberId);
                    $cek = $request->user()->contacts()->where('tag_id', $tag->id)->where('number', $number)->count();
                    if ($cek < 1) {
                        $tag->contacts()->create(['user_id' => $request->user()->id, 'name' => $number, 'number' => $number]);
                        $contactsAdded++;
                    }
                }
            }
            
            return back()->with('alert', [
                'type' => 'success',
                'msg' => "Successfully fetched {$groupsCount} groups and added {$contactsAdded} new contacts!"
            ]);
            
        } catch (\Throwable $th) {
            // Only log if debug is enabled
            if (config('app.debug')) {
                Log::error("Exception in fetchGroups: " . $th->getMessage());
            }
            
            return back()->with('alert', [
                'type' => 'danger', 
                'msg' => 'Technical error occurred! Please try these steps:<br>
                1. Refresh the page and try again<br>
                2. Check if device status is "Connected"<br>
                3. Try sending a test message first<br>
                4. If problem persists, contact administrator'
            ]);
        }
    }

    public function clearPhonebook(Request $request)
    {
        try {
            $request->user()->phonebooks()->delete();
            return response()->json(['error' => false, 'msg' => 'Success clear phonebook!']);
        } catch (\Throwable $th) {
            return response()->json(['error' => true, 'msg' => 'Something went wrong! (cp)']);
        }
    }
}
