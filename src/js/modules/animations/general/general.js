export function generalInterest() {
    ScrollReveal().reveal('.interest__logo', {
        delay: 200,
        origin: 'left',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.interest__title', {
        delay: 300,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.interest__subtitle', {
        delay: 400,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.interest__form', {
        delay: 500,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.interest__btn', {
        delay: 600,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });
}

document.addEventListener("DOMContentLoaded", function() {
    generalInterest();
});