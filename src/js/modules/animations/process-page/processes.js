export function processProcessesAnimations() {
    ScrollReveal().reveal('.processes__title', {
        delay: 200,
        origin: 'left',
        distance: '50px',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('.processes__subtitle', {
        delay: 300,
        origin: 'right',
        distance: '50px',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('.processes__label', {
        delay: 400,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('.processes__item', {
        delay: 500,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-out',
        interval: 150
    });

    ScrollReveal().reveal('.processes__item-number', {
        delay: 600,
        origin: 'left',
        distance: '50px',
        easing: 'ease-out',
        interval: 100
    });

    ScrollReveal().reveal('.processes__item-title', {
        delay: 600,
        origin: 'right',
        distance: '50px',
        easing: 'ease-out',
        interval: 100
    });

    ScrollReveal().reveal('.processes__item-subtitle', {
        delay: 700,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-out',
        interval: 100
    });
}

document.addEventListener("DOMContentLoaded", function() {
    processProcessesAnimations();
});