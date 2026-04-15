<x-layout-dashboard title="Home">
    @if (session()->has('alert'))
        <x-alert>
            @slot('type', session('alert')['type'])
            @slot('msg', session('alert')['msg'])
        </x-alert>
    @endif
    @if ($errors->any())
        <div class="mb-4 rounded-lg border border-red-200 bg-red-50 p-4">
            <ul class="list-disc list-inside text-sm text-red-600">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <!-- Statistics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <!-- Total Devices Card -->
        <div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-600 mb-1">{{ __('Total Devices') }}</p>
                    <p class="text-2xl font-bold text-gray-900">{{ $numbers->total() }}</p>
                </div>
                <div class="bg-blue-100 rounded-full p-3">
                    <i class="ti ti-device-mobile text-blue-600 text-xl"></i>
                </div>
            </div>
        </div>

        <!-- Connected Devices Card -->
        <div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-600 mb-1">{{ __('Connected') }}</p>
                    <p class="text-2xl font-bold text-green-600">{{ $numbers->where('status', 'Connected')->count() }}</p>
                </div>
                <div class="bg-green-100 rounded-full p-3">
                    <i class="ti ti-wifi text-green-600 text-xl"></i>
                </div>
            </div>
        </div>

        <!-- Total Messages Card -->
        <div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-600 mb-1">{{ __('Total Messages') }}</p>
                    <p class="text-2xl font-bold text-gray-900">{{ $numbers->sum('message_sent') }}</p>
                </div>
                <div class="bg-purple-100 rounded-full p-3">
                    <i class="ti ti-message text-purple-600 text-xl"></i>
                </div>
            </div>
        </div>

        <!-- Auto Replies Card -->
        <div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-600 mb-1">{{ __('Auto Replies') }}</p>
                    <p class="text-2xl font-bold text-gray-900">{{ $autoreplies ?? 0 }}</p>
                </div>
                <div class="bg-orange-100 rounded-full p-3">
                    <i class="ti ti-bot text-orange-600 text-xl"></i>
                </div>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <!-- Device Management -->
        <div class="lg:col-span-2">
            <div class="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div class="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                    <div class="flex items-center gap-3">
                        <div class="bg-primary/10 rounded-full p-2">
                            <i class="ti ti-device-mobile text-primary text-lg"></i>
                        </div>
                        <div>
                            <h5 class="text-lg font-semibold text-gray-900">{{ __('Whatsapp Account') }}</h5>
                            <p class="text-sm text-gray-500">{{ __('Manage your WhatsApp devices') }}</p>
                        </div>
                    </div>
                    <button type="button"
                        class="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
                        data-bs-toggle="modal" data-bs-target="#addDevice">
                        <i class="ti ti-plus text-base"></i>
                        {{ __('Add Device') }}
                    </button>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">{{ __('Device') }}</th>
                                <th class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">{{ __('Messages Sent') }}</th>
                                <th class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">{{ __('Webhook URL') }}</th>
                                <th class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">{{ __('Status') }}</th>
                                <th class="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-600">{{ __('Actions') }}</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100 bg-white">
                            @if ($numbers->total() == 0)
                                <tr>
                                    <td colspan="5" class="px-6 py-12 text-center">
                                        <div class="mx-auto flex flex-col items-center justify-center">
                                            <i class="ti ti-device-mobile-off mb-3 text-4xl text-gray-300"></i>
                                            <p class="text-sm text-gray-500 mb-4">{{ __('No Device added yet') }}</p>
                                            <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90" data-bs-toggle="modal" data-bs-target="#addDevice">
                                                <i class="ti ti-plus text-base"></i>
                                                {{ __('Add Your First Device') }}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            @endif
                            @foreach ($numbers as $number)
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="{{ $number['status'] == 'Connected' ? 'bg-green-100' : 'bg-red-100' }} rounded-full p-2">
                                                <i class="ti ti-device-mobile {{ $number['status'] == 'Connected' ? 'text-green-600' : 'text-red-600' }} text-sm"></i>
                                            </div>
                                            <div>
                                                <p class="text-sm font-medium text-gray-900">{{ $number['body'] }}</p>
                                                <p class="text-xs text-gray-500">ID: {{ $number['id'] }}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <div class="flex items-center gap-2">
                                            <div class="bg-blue-100 rounded-full px-2 py-1">
                                                <span class="text-xs font-semibold text-blue-700">{{ $number['message_sent'] }}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        @if($number['webhook'])
                                            <div class="flex items-center gap-2 max-w-xs">
                                                <i class="ti ti-link text-gray-400 text-sm"></i>
                                                <span class="text-xs text-gray-600 truncate" title="{{ $number['webhook'] }}">{{ $number['webhook'] }}</span>
                                            </div>
                                        @else
                                            <span class="text-xs text-gray-400">{{ __('Not set') }}</span>
                                        @endif
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <span
                                            class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium {{ $number['status'] == 'Connected' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700' }}">
                                            <span
                                                class="h-2 w-2 rounded-full {{ $number['status'] == 'Connected' ? 'bg-green-500' : 'bg-red-500' }}"></span>
                                            {{ $number['status'] }}
                                        </span>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <a href="{{ route('connect-via-code', $number->body) }}"
                                                class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2 text-gray-600 transition hover:bg-gray-50 hover:text-primary"
                                                data-bs-toggle="tooltip" data-bs-placement="bottom" title="{{ __('Connect Via Code') }}">
                                                <i class="ti ti-phone text-base"></i>
                                            </a>
                                            <a href="{{ route('scan', $number->body) }}"
                                                class="inline-flex items-center justify-center rounded-lg bg-primary p-2 text-white transition hover:bg-primary/90"
                                                data-bs-toggle="tooltip" data-bs-placement="bottom" title="{{ __('Connect Via QR') }}">
                                                <i class="ti ti-qrcode text-base"></i>
                                            </a>
                                            <form action="{{ route('deleteDevice') }}" method="POST" class="inline">
                                                @method('delete')
                                                @csrf
                                                <input name="deviceId" type="hidden" value="{{ $number['id'] }}">
                                                <button type="submit" name="delete"
                                                    class="inline-flex items-center justify-center rounded-lg border border-red-200 bg-white p-2 text-red-600 transition hover:bg-red-50"
                                                    onclick="return confirm('{{ __('Are you sure you want to delete this device?') }}')">
                                                    <i class="ti ti-trash text-base"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>

                @if ($numbers->hasPages())
                    <div class="border-t border-gray-100 px-6 py-4">
                        <nav class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                @if ($numbers->currentPage() > 1)
                                    <a href="{{ $numbers->previousPageUrl() }}"
                                        class="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                                        <i class="ti ti-chevron-left text-base"></i>
                                        {{ __('Previous') }}
                                    </a>
                                @else
                                    <span
                                        class="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-400 cursor-not-allowed">
                                        <i class="ti ti-chevron-left text-base"></i>
                                        {{ __('Previous') }}
                                    </span>
                                @endif
                            </div>

                            <div class="flex items-center gap-1">
                                @for ($i = 1; $i <= $numbers->lastPage(); $i++)
                                    <a href="{{ $numbers->url($i) }}"
                                        class="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition {{ $numbers->currentPage() == $i ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50' }}">
                                        {{ $i }}
                                    </a>
                                @endfor
                            </div>

                            <div class="flex items-center gap-2">
                                @if ($numbers->currentPage() < $numbers->lastPage())
                                    <a href="{{ $numbers->nextPageUrl() }}"
                                        class="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                                        {{ __('Next') }}
                                        <i class="ti ti-chevron-right text-base"></i>
                                    </a>
                                @else
                                    <span
                                        class="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-400 cursor-not-allowed">
                                        {{ __('Next') }}
                                        <i class="ti ti-chevron-right text-base"></i>
                                    </span>
                                @endif
                            </div>
                        </nav>
                    </div>
                @endif
            </div>
        </div>

        <!-- Quick Actions Panel -->
        <div class="space-y-4">
            <!-- Quick Stats -->
            <div class="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 text-white">
                <h6 class="text-sm font-medium opacity-90 mb-2">{{ __('Quick Overview') }}</h6>
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-sm opacity-80">{{ __('Active Devices') }}</span>
                        <span class="font-bold">{{ $numbers->where('status', 'Connected')->count() }}/{{ $numbers->total() }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-sm opacity-80">{{ __('Total Messages') }}</span>
                        <span class="font-bold">{{ $numbers->sum('message_sent') }}</span>
                    </div>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="bg-white rounded-xl border border-gray-200 p-6">
                <h6 class="text-sm font-semibold text-gray-900 mb-4">{{ __('Quick Actions') }}</h6>
                <div class="space-y-2">
                    @if (Session::has('selectedDevice'))
                        <a href="{{ route('autoreply') }}" class="flex items-center gap-3 rounded-lg p-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                            <div class="bg-blue-100 rounded-full p-2">
                                <i class="ti ti-message-circle text-blue-600 text-sm"></i>
                            </div>
                            <span>{{ __('Auto Reply') }}</span>
                        </a>
                        <a href="{{ route('campaign.create') }}" class="flex items-center gap-3 rounded-lg p-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                            <div class="bg-green-100 rounded-full p-2">
                                <i class="ti ti-megaphone text-green-600 text-sm"></i>
                            </div>
                            <span>{{ __('Create Campaign') }}</span>
                        </a>
                        <a href="{{ route('messagetest') }}" class="flex items-center gap-3 rounded-lg p-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                            <div class="bg-purple-100 rounded-full p-2">
                                <i class="ti ti-send text-purple-600 text-sm"></i>
                            </div>
                            <span>{{ __('Test Message') }}</span>
                        </a>
                    @else
                        <div class="text-center py-4">
                            <i class="ti ti-device-mobile-off text-3xl text-gray-300 mb-2"></i>
                            <p class="text-sm text-gray-500">{{ __('Select a device to access features') }}</p>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>





    <div class="modal fade" id="addDevice" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Device</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="{{ route('addDevice') }}" method="POST">
                        @csrf
                        <label for="sender" class="form-label">Number</label>
                        <input type="number" name="sender" class="form-control" id="nomor" required>
                        <p class="text-small text-danger">*Use Country Code ( without + )</p>
                        <label for="urlwebhook" class="form-label">Link webhook</label>
                        <input type="text" name="urlwebhook" class="form-control" id="urlwebhook">
                        <p class="text-small text-danger">*Optional</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" name="submit" class="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</x-layout-dashboard>
