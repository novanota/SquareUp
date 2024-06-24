export function workHomeAnimations() {
    ScrollReveal().reveal('.work__title', {
        delay: 200,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 800,
    });

    ScrollReveal().reveal('.work__subtitle', {
        delay: 300,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 800,
    });

    ScrollReveal().reveal('.work__item', {
        delay: 400,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 800,
        interval: 200,
    });
}

document.addEventListener("DOMContentLoaded", function() {
    workHomeAnimations();
});