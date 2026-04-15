<header class="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
    <div class="flex items-center justify-between px-4 py-2.5 sm:px-6">
        <div class="flex items-center gap-2">
            <button type="button" class="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 p-1.5 text-gray-500">
                <i class="ti ti-menu-2 text-base"></i>
            </button>
            <div>
                <p class="text-[10px] uppercase tracking-wide text-gray-400 leading-tight">{{ __('Dasbor') }}</p>
                <p class="text-sm font-semibold text-gray-900 leading-tight">{{ config('app.name', 'MPWA') }}</p>
            </div>
        </div>

        <div class="flex items-center gap-2">
            <div class="dropdown dropdown-user-setting">
                <button class="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2 py-1.5 hover:bg-gray-50 transition-colors"
                    data-bs-toggle="dropdown">
                    <img src="{{ asset('assets/images/avatars/avatar-1.png') }}" class="h-8 w-8 rounded-full object-cover" alt="avatar">
                    <div class="hidden text-xs font-medium text-gray-700 sm:block">
                        <span class="leading-tight">{{ Auth::user()->username }}</span>
                    </div>
                    <i class="ti ti-chevron-down text-sm text-gray-400"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end border-0 shadow-xl rounded-xl p-2 text-xs min-w-[160px]">
                    <li class="px-2 py-1.5 text-gray-500 border-b border-gray-100">
                        <span class="font-medium text-gray-900">{{ Auth::user()->username }}</span>
                        <span class="block text-xs text-gray-400 uppercase mt-0.5">{{ __(Auth::user()->level) }}</span>
                    </li>
                    <li>
                        <a class="dropdown-item flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-50 text-gray-700"
                            href="{{ route('user.settings') }}">
                            <i class="ti ti-settings text-base text-gray-500"></i>
                            <span>{{ __('Setting') }}</span>
                        </a>
                    </li>
                    <li>
                        <form action="{{ route('logout') }}" method="post">
                            @csrf
                            <button class="dropdown-item flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-red-500 hover:bg-red-50"
                                type="submit">
                                <i class="ti ti-logout text-base"></i>
                                <span>{{ __('Logout') }}</span>
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>
