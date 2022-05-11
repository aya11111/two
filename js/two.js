let navIcon = document.querySelector("header nav .mob-icon");
let navigMenu = document.querySelector("nav ul")

navIcon.onclick = function() {
    navigMenu.classList.toggle("open")
}
