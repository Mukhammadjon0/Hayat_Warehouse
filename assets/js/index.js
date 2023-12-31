const officeInput = document.getElementById('office-input')
const officeValue = document.getElementById('office-value')
if (officeValue) {
  officeValue.onclick = () => {
    officeInput.value = officeValue.textContent;
    officeInput.defaultValue = officeValue.textContent;
  };
}

// document.onclick = hideMenu;
// document.oncontextmenu = rightClick;

// function hideMenu() {
//   document.getElementById("contextMenu").style.display = "none";
// }

// function rightClick(e) {
//   e.preventDefault();

//   if (document.getElementById("contextMenu").style.display == "block")
//     hideMenu();
//   else {
//     var menu = document.getElementById("contextMenu");

//     menu.style.display = "block";
//     menu.style.left = e.pageX + "px";
//     menu.style.top = e.pageY + "px";
//   }
// }

const tableRows = document.querySelectorAll('#income-prod');

// Add event listeners to table row
tableRows.forEach(function(row) {
  window.onclick = hideMenu; // Click event
  row.oncontextmenu = rightClick; // Right-click event
});
function hideMenu() {
  document.getElementById("contextMenu").style.display = "none";
}

function rightClick(e) {
  e.preventDefault();

  if (document.getElementById("contextMenu").style.display == "block") {
    hideMenu();
  } else {
    var menu = document.getElementById("contextMenu");

    menu.style.display = "block";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
}