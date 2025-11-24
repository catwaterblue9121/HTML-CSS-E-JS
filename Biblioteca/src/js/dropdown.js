document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".dropbtn");
    const menu = document.querySelector(".dropdown-menu");

    btn.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("show");
    });

    document.addEventListener("click", function() {
        menu.classList.remove("show");
    });
});
