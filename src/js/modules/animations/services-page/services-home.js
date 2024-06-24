export function servicesHomeAnimations() {
    ScrollReveal().reveal('.services__title', {
        delay: 200,
        origin: 'left',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('.services__subtitle', {
        delay: 300,
        origin: 'right',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 1000
    });
}

document.addEventListener("DOMContentLoaded", function() {
    servicesHomeAnimations();
});