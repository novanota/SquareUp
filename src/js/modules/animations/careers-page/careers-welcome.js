export function careersWelcomeAnimations() {
    ScrollReveal().reveal('.careers-welcome__title', {
        delay: 200,
        origin: 'left',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.careers-welcome__subtitle', {
        delay: 300,
        origin: 'right',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.careers-welcome__label', {
        delay: 400,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.careers-welcome__item', {
        delay: 500,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        interval: 200, 
    });
}

document.addEventListener("DOMContentLoaded", function() {
    careersWelcomeAnimations();
});