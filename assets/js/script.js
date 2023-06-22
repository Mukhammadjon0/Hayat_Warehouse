'use strict'
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('floatingPassword');
const loginButton = document.getElementById('loginButton');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});


// loginButton.addEventListener('click', function () {
//     window.location.href = '/Main/index.html';
// });
