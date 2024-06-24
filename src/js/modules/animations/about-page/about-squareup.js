export function aboutSquareupAnimations() {
    ScrollReveal().reveal('.about-squareup__title', {
        delay: 200,
        origin: 'left',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.about-squareup__subtitle', {
        delay: 300,
        origin: 'right',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.about-squareup__img', {
        delay: 400,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });
}

document.addEventListener("DOMContentLoaded", function() {
    aboutSquareupAnimations();
});