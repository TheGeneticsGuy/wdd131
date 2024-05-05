// footer
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

const hamburgerButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});