export function homePageHomeAnimations() {
    ScrollReveal().reveal('.home__title', {
        origin: 'top',
        distance: '20px',
        duration: 1000,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.home__label', {
        origin: 'left',
        distance: '20px',
        duration: 800,
        delay: 300,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 100
    });

    ScrollReveal().reveal('.home__btn', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.home__content', {
        origin: 'left',
        distance: '30px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.home__wrapper', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.home__label--accent', {
        origin: 'right',
        distance: '20px',
        duration: 800,
        delay: 300,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 100
    });
}

document.addEventListener("DOMContentLoaded", function() {
    homePageHomeAnimations();
});