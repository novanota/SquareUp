export function homePageServicesAnimations() {
    ScrollReveal().reveal('.services__title', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.services__subtitle', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 300,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.services__item', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.services__item-heading', {
        origin: 'left',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.services__item-icon', {
        origin: 'right',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.services__item-title', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.services__item-subtitle', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.services__item-btn', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });
}

document.addEventListener("DOMContentLoaded", function() {
    homePageServicesAnimations();
});