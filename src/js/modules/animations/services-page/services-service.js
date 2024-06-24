export function servicesServiceAnimations() {
    ScrollReveal().reveal('.service__title', {
        delay: 200,
        origin: 'left',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('.service__subtitle', {
        delay: 300,
        origin: 'right',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('.service__heading', {
        delay: 100,
        origin: 'top',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('.service__items-heading', {
        delay: 200,
        origin: 'bottom',
        distance: '30px',
        easing: 'ease-in-out',
        duration: 800
    });

    ScrollReveal().reveal('.service__item', {
        delay: 300,
        origin: 'bottom',
        distance: '30px',
        easing: 'ease-in-out',
        duration: 800,
        interval: 100
    });
}

document.addEventListener("DOMContentLoaded", function() {
    servicesServiceAnimations();
});