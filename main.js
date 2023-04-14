let nav = document.querySelector("nav");
let button = document.querySelector("#menu");
let contatiner = document.querySelector(".videos-container");

button.addEventListener("click", function() {
    nav.classList.toggle("active");
    button.classList.toggle("active");
    contatiner.classList.toggle("active");
});
