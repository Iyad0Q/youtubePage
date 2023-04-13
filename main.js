let nav = document.querySelector("nav");
let button = document.querySelector("#menu");
let body = document.querySelector("body");
let dark = document.querySelector("#Dark");

button.addEventListener("click", function() {
    nav.classList.toggle("active");
    button.classList.toggle("active");
});

dark.addEventListener("click", function () {
    body.classList.toggle("dark");
});