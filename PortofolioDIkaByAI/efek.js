// MENU TOGGLE MOBILE
const navbar = document.getElementById("navbar");
const toggle = document.getElementById("menu-toggle");

toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
