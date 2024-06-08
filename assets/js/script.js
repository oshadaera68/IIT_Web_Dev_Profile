// Loading the id for the loader
var preloader = document.getElementById("preloader");

// Loading functionality and fade effect
function myFunction() {
    setTimeout(() => {
        preloader.style.opacity = "0"; // Start fading out
        setTimeout(() => {
            preloader.style.display = "none"; // Hide after fade-out completes
        }, 1000); // This should match the transition duration in CSS
    }, 2000); // Initial delay before starting fade out
}
