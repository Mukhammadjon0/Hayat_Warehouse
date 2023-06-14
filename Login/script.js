const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('floatingPassword');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});