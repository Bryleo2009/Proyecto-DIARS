const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")
const logo = document.querySelector(".logo")

navToggle.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu_visible")
})
