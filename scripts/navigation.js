document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is loaded!");
    let menuControl = document.getElementById("menu-toggle");
    console.log(menuControl);

    menuControl.addEventListener("click", function () {
        let nav = document.querySelector("nav");
        nav.classList.toggle("collapsed");
    });
});
