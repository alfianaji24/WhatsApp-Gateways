<!DOCTYPE html>
<html class="semi-dark " lang="{{ str_replace('_', '-', app()->getLocale()) }}">
{{-- 
    
Copyright By Ilman Sunanuddin, M pedia
Email : Ilmansunannudin2@gmail.com 
website : https://m-pedia.co.id
Whatsap : 6282298859671
------------------------------------------------------------------
You are not allowed to share or sell this source code without permission.
--}}



<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{ asset('favicon/favicon.ico') }}" type="image/x-icon" />
    <!--plugins-->
    <link href="{{ asset('assets/plugins/vectormap/jquery-jvectormap-2.0.2.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/plugins/simplebar/css/simplebar.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/plugins/metismenu/css/metisMenu.min.css') }}" rel="stylesheet" />
    <!-- Bootstrap CSS -->
    <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/bootstrap-extended.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/icons.css') }}" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
    <script src="{{ asset('assets/js/jquery.min.js') }}"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#053b22',
                    },
                    fontFamily: {
                        sans: ['Inter', 'Roboto', 'sans-serif'],
                    },
                },
            },
        };
    </script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" />

    <!-- loader-->
    <link href="{{ asset('assets/css/pace.min.css') }}" rel="stylesheet" />

    <!--Theme Styles-->
    <link href="{{ asset('assets/css/dark-theme.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/light-theme.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/semi-dark.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/header-colors.css') }}" rel="stylesheet" />
    {{-- csrf --}}
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>{{ $title }} | MPWA Multi device version</title>
</head>

<body class="bg-gray-50 font-sans antialiased">

    <div class="min-h-screen flex">
        <x-aside></x-aside>
        <div class="flex-1 flex flex-col">
            <x-header></x-header>

            <!--start content-->
            <main class="flex-1 bg-gray-50 px-4 lg:px-6 py-6">
                <div class="space-y-6">
                    {{ $slot }}
                </div>
            </main>
            <!--end page main-->
        </div>
    </div>


    <!-- Javascripts -->



    <!-- Bootstrap bundle JS -->
    <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
    <!--plugins-->

    <script src="{{ asset('assets/plugins/simplebar/js/simplebar.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/metismenu/js/metisMenu.min.js') }}"></script>
    {{-- <script src="{{asset('assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js')}}"></script> --}}
    <script src="{{ asset('assets/js/pace.min.js') }}"></script>
    <script src="{{ asset('assets/js/app.js') }}"></script>
    <script src="{{ asset('assets/js/index.js') }}"></script>
    <script src="{{ asset('assets/plugins/smart-wizard/js/jquery.smartWizard.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <link href="{{ asset('assets/plugins/smart-wizard/css/smart_wizard_all.min.css') }}" rel="stylesheet" type="text/css" />
    {{-- <script>
    new PerfectScrollbar(".review-list")
    new PerfectScrollbar(".chat-talk")
 </script> --}}

    <script>
        toastr.options = {
            closeButton: false,
            debug: false,
            newestOnTop: false,
            progressBar: false,
            positionClass: "toast-top-right",
            preventDuplicates: false,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
        };
    </script>
</body>

</html>
{{-- <script src="{{asset('plugins/bootstrap/js/popper.min.js')}}"></script>
<script src="{{asset('plugins/bootstrap/js/bootstrap.min.js')}}"></script>
<script src="{{asset('plugins/perfectscroll/perfect-scrollbar.min.js')}}"></script>
<script src="{{asset('plugins/pace/pace.min.js')}}"></script>
<script src="{{asset('plugins/highlight/highlight.pack.js')}}"></script>
<script src="{{asset('plugins/blockUI/jquery.blockUI.min.js')}}"></script>
<script src="{{asset('js/main.min.js')}}"></script>
<script src="{{asset('js/custom.js')}}"></script>
<script src="{{asset('js/pages/blockui.js')}}"></script>
</body>

</html> --}}
