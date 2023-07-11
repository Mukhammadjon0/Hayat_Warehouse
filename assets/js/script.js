'use strict'
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('floatingPassword');
const loginButton = document.getElementById('loginButton');

if (togglePassword) {
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });
}


// loginButton.addEventListener('click', function () {
//     window.location.href = '/Main/index.html';
// });

function handleChange(selected) {
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");

    if (selected === 1) {
        label1.classList.add("green__btn");
        label2.classList.remove("green__btn");
        label1.classList.remove("check__btn");
        label2.classList.add("check__btn");
    } else {
        label1.classList.remove("green__btn");
        label2.classList.add("green__btn");
        label1.classList.add("check__btn");
        label2.classList.remove("check__btn");
    }
}



// =================================

const dropdown = document.querySelector('.dropdown');
    const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const selectedOptions = Array.from(checkboxes)
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.nextElementSibling.textContent);
        
        updateSelectedOptions(selectedOptions);
      });
    });
    
    function updateSelectedOptions(options) {
      const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
      dropdownToggle.textContent = options.length > 0 ? options.join(', ') : 'Select Options';
    }