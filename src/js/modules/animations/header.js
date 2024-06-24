export function headerAnimations() {
    ScrollReveal().reveal('.header', {
        delay: 200,
        origin: 'top',
        distance: '20px',
        easing: 'ease-out',
    });
}

document.addEventListener("DOMContentLoaded", function() {
    headerAnimations();
});