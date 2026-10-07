const menu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
    navbar.classList.toggle("active");
});


const link = document.querySelectorAll(".nav-menu a");

link.forEach(function(item) {
    item.addEventListener("click", function() {
        navbar.classList.remove("active");
    });
});


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("pesan berhasil dikirim!");

    form.reset();
});