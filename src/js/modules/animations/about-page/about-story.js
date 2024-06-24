export function aboutStoryAnimations() {
    ScrollReveal().reveal('.story__title', {
        delay: 200,
        origin: 'left',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.story__item', {
        delay: 300,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.story__item-number', {
        delay: 400,
        origin: 'right',
        distance: '30px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.story__item-title', {
        delay: 500,
        origin: 'top',
        distance: '30px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.story__item-subtitle', {
        delay: 600,
        origin: 'left',
        distance: '20px',
        easing: 'ease-in-out',
    });
}

document.addEventListener("DOMContentLoaded", function() {
    aboutStoryAnimations();
});