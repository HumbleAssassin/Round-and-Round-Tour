var header = document.querySelector('.navbar-container');
var navbarBrand = document.querySelector(".navbar-brand");
var loader = document.querySelector(".loader");

window.onscroll = function() {
    var top = window.scrollY;

    if (top > 10) {
        header.classList.add("header");
        navbarBrand.classList.add("d-none");
    } else {
        header.classList.remove("header");
        navbarBrand.classList.remove("d-none");
    }
}

function hideLoader() {
    loader.style.display = "none";
}

