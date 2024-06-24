export function homePagePromotionAnimations() {
    ScrollReveal().reveal('.promotion__title', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.promotion__subtitle', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 300,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.promotion__item', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.promotion__item-heading', {
        origin: 'left',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.promotion__item-icon', {
        origin: 'right',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.promotion__item-title', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.promotion__item-subtitle', {
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
    homePagePromotionAnimations();
});