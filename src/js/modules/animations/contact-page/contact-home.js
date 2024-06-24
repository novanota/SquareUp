export function contactHomeAnimations() {
    ScrollReveal().reveal('.contact-home__title', {
        delay: 200,
        origin: 'top',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.contact-home__subtitle', {
        delay: 300,
        origin: 'top',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.contact-home__heading', {
        delay: 100,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.contacts', {
        delay: 400,
        origin: 'top',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.connected', {
        delay: 500,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });
}

document.addEventListener("DOMContentLoaded", function() {
    contactHomeAnimations();
});