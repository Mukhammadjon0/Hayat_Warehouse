const officeInput = document.getElementById('office-input')
const officeValue = document.getElementById('office-value')

officeValue.onclick = () => {
    officeInput.value = officeValue.textContent;
    officeInput.defaultValue = officeValue.textContent;
}