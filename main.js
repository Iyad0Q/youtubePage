let nav = document.querySelector("nav");
let button = document.querySelector("#menu");
let vCon = document.querySelector(".videos-container")

button.addEventListener("click", function() {
    nav.classList.toggle("active");
    vCon.style.backgroundcolor = "silver";
});