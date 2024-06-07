// loading the id for the loader
var preloader = document.getElementById("preloader");

// loading functionality and fade effect
function myFunction() {
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 2000);
    }, 2000);
}
