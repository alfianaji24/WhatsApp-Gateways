<!--start sidebar -->
<aside class="hidden md:flex w-72 bg-white border-r border-gray-100 min-h-screen flex-col">
    <div class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">

        <div>
            <p class="text-sm font-semibold text-gray-900">{{ __('Gateway WhatsApp') }}</p>

        </div>
    </div>

    <nav class="flex-1 overflow-y-auto py-6">
        <ul class="space-y-1 px-4">
            {{-- dashboard --}}
            <li>
                <a href="{{ route('home') }}"
                    class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                    {{ request()->is('home') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                    <i class="ti ti-layout-dashboard text-lg"></i>
                    <span>{{ __('Dashboard') }}</span>
                </a>
            </li>

            <x-select-device></x-select-device>

            {{-- messaging --}}
            <li class="pt-4">
                <div class="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{{ __('Messaging') }}</div>
            </li>
            <li>
                <a href="{{ route('messagetest') }}"
                    class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                    {{ request()->is('message/test') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                    <i class="ti ti-send text-lg"></i>
                    <span>{{ __('Test Message') }}</span>
                </a>
            </li>
            <li>
                <a href="{{ route('messages.history') }}"
                    class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                    {{ request()->is('messages-history') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                    <i class="ti ti-message text-lg"></i>
                    <span>{{ __('Message History') }}</span>
                </a>
            </li>
            <li>
                <a href="{{ route('autoreply') }}"
                    class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                    {{ request()->is('autoreply') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                    <i class="ti ti-message-circle text-lg"></i>
                    <span>{{ __('Auto Reply') }}</span>
                </a>
            </li>

            {{-- contact management --}}
            <li class="pt-4">
                <div class="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{{ __('Contacts') }}</div>
            </li>
            <li>
                <a href="{{ route('phonebook') }}"
                    class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                    {{ request()->is('phonebook') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                    <i class="ti ti-address-book text-lg"></i>
                    <span>{{ __('Phonebook') }}</span>
                </a>
            </li>

            {{-- campaign --}}
            <li class="pt-4">
                <div class="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{{ __('Campaign') }}</div>
            </li>
            <li>
                <a href="{{ route('campaigns') }}"
                    class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                    {{ request()->is('campaigns') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                    <i class="ti ti-megaphone text-lg"></i>
                    <span>{{ __('Campaigns') }}</span>
                </a>
            </li>

            {{-- tools --}}
            <li class="pt-4">
                <div class="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{{ __('Tools') }}</div>
            </li>
            <li>
                <a href="{{ route('file-manager') }}"
                    class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                    {{ request()->is('file-manager') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                    <i class="ti ti-folder text-lg"></i>
                    <span>{{ __('File Manager') }}</span>
                </a>
            </li>
            <li>
                <a href="{{ route('plugins') }}"
                    class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                    {{ request()->is('plugins') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                    <i class="ti ti-puzzle text-lg"></i>
                    <span>{{ __('Plugins') }}</span>
                </a>
            </li>
            <li>
                <a href="{{ route('rest-api') }}"
                    class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                    {{ request()->is('api-docs') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                    <i class="ti ti-api text-lg"></i>
                    <span>{{ __('API Docs') }}</span>
                </a>
            </li>

            {{-- settings --}}
            <li class="pt-4">
                <div class="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{{ __('Settings') }}</div>
            </li>
            <li>
                <a href="{{ route('user.settings') }}"
                    class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                    {{ request()->is('user/settings') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                    <i class="ti ti-user text-lg"></i>
                    <span>{{ __('User Settings') }}</span>
                </a>
            </li>

            {{-- menus for admin --}}
            @if (Auth::user()->level == 'admin')
                <li class="pt-4">
                    <div class="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{{ __('Admin') }}</div>
                </li>
                <li>
                    <a href="{{ route('admin.settings') }}"
                        class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                        {{ request()->is('admin.settings') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                        <i class="ti ti-server-cog text-lg"></i>
                        <span>{{ __('Server Settings') }}</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.manage-users') }}"
                        class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                        {{ request()->is('admin/manage-users') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                        <i class="ti ti-users text-lg"></i>
                        <span>{{ __('Manage Users') }}</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('update') }}"
                        class="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition
                        {{ request()->is('admin/update') ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50' }}">
                        <i class="ti ti-refresh text-lg"></i>
                        <span>{{ __('System Update') }}</span>
                    </a>
                </li>
            @endif
        </ul>
    </nav>
</aside>
<!--end sidebar -->
