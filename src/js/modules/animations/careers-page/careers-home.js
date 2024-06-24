export function careersHomeAnimations() {
    ScrollReveal().reveal('.careers__title', {
        delay: 200,
        origin: 'left',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.careers__subtitle', {
        delay: 300,
        origin: 'right',
        distance: '20px',
        easing: 'ease-in-out',
    });
}

document.addEventListener("DOMContentLoaded", function() {
    careersHomeAnimations();
});