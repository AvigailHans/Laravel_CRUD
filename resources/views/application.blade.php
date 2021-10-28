<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    class="light-style layout-fixed layout-navbar-fixed layout-footer-fixed">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ env('APP_NAME') }}</title>

    <!-- Main font -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet">


    <!-- Icons. Uncomment required icon fonts -->
    {{-- <link rel="stylesheet" href="{{ mix('/vendor/fonts/fontawesome.css') }}"> --}}
    <link rel="stylesheet" href="{{ mix('/vendor/fonts/ionicons.css') }}">
    {{-- <link rel="stylesheet" href="{{ mix('/vendor/fonts/linearicons.css') }}"> --}}
    {{-- <link rel="stylesheet" href="{{ mix('/vendor/fonts/open-iconic.css') }}"> --}}
    {{-- <link rel="stylesheet" href="{{ mix('/vendor/fonts/pe-icon-7-stroke.css') }}"> --}}
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- Layout helpers -->
    <script src="{{ mix('/vendor/js/layout-helpers.js') }}"></script>

    <!-- IE10 polyfills (remove if you don't plan to support IE10) -->
    <script>
        if (navigator.userAgent.match('MSIE 10.0;')) {
            document.write(
                '<script src="https:\/\/cdn.polyfill.io\/v2\/polyfill.min.js?features=Intl.~locale.en"><\/script>');
        }
        window._APP_NAME_ = '{{ env('APP_NAME') }}';

        window._DATA_ = {!!json_encode($data) !!};
        window._USER_ = {!!json_encode($user) !!};

    </script>
</head>

<body>

    <!-- Splash screen -->
    <div class="app-splash-screen"
        style="background: #fff; position: fixed; z-index: 99999999; top: 0; right: 0; bottom: 0; left: 0; opacity: 1; -webkit-transition: opacity .3s; transition: opacity .3s;">
        <div class="app-splash-screen-content"
            style="position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);">
            <span class="text-large font-weight-bolder">{{ env('APP_NAME') }}</span>
        </div>
    </div>
    <!-- / Splash screen -->

    <div id="app"></div>

    <script src="{{ mix('/entry-point.js') }}"></script>

</body>

</html>
