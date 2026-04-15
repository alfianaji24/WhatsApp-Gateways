<x-layout-auth>
    @slot('title', 'Login')

    <main class="authentication-content py-5" style="background-color: #053b22; min-height: 100vh;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-5">
                    <div class="card border-0 shadow-lg rounded-4 overflow-hidden bg-white">
                        <div class="card-body p-4 p-lg-5">
                            @if (session()->has('alert'))
                                <x-alert>
                                    @slot('type', session('alert')['type'])
                                    @slot('msg', session('alert')['msg'])
                                </x-alert>
                            @endif

                            <div class="text-center mb-4">
                                <div class="mx-auto mb-3 rounded-circle d-inline-flex align-items-center justify-content-center bg-light"
                                    style="width: 64px; height: 64px;">
                                    <i class="bi bi-shield-lock" style="color: #053b22; font-size: 1.8rem;"></i>
                                </div>
                                <h4 class="fw-semibold mb-1 text-dark">Masuk ke Akun Anda</h4>
                                <p class="text-muted mb-0">Kelola akses dengan tampilan yang bersih dan modern.</p>
                            </div>

                            <form class="form-body" action="{{ route('login') }}" method="POST">
                                @csrf
                                <div class="row g-4">
                                    <div class="col-12">
                                        <label for="username" class="form-label text-uppercase small fw-semibold text-secondary">Username</label>
                                        <div class="ms-auto position-relative">
                                            <div class="position-absolute top-50 translate-middle-y px-3 text-secondary">
                                                <i class="bi bi-person fs-5"></i>
                                            </div>
                                            <input type="text"
                                                class="form-control form-control-lg ps-5 rounded-3 bg-light border-0 text-dark {{ $errors->has('username') ? 'is-invalid' : '' }}"
                                                id="username" name="username" placeholder="nama pengguna" required autofocus>
                                        </div>
                                        <p class="text-danger small mb-0">
                                            @error('username')
                                                {{ $message }}
                                            @enderror
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <label for="password" class="form-label text-uppercase small fw-semibold text-secondary">Kata Sandi</label>
                                        <div class="ms-auto position-relative">
                                            <div class="position-absolute top-50 translate-middle-y px-3 text-secondary">
                                                <i class="bi bi-lock fs-5"></i>
                                            </div>
                                            <input type="password" name="password"
                                                class="form-control form-control-lg ps-5 rounded-3 bg-light border-0 text-dark" id="password"
                                                placeholder="kata sandi" required>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check d-flex align-items-center">
                                            <input class="form-check-input" type="checkbox" value="" id="remember">
                                            <label class="form-check-label text-muted ms-2" for="remember">
                                                Ingat saya
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid">
                                            <button type="submit" class="btn"
                                                style="background-color: #053b22; color: #fff; padding: 0.85rem; border-radius: 1rem;">Masuk
                                                Sekarang</button>
                                        </div>
                                    </div>
                                    <div class="col-12 text-center">
                                        <p class="text-muted mb-0">Belum punya akses? <a href="{{ route('register') }}" class="text-decoration-none"
                                                style="color: #053b22;">Daftar</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</x-layout-auth>
