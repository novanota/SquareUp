export function generalIdeas() {
    ScrollReveal().reveal('.ideas__logo', {
        delay: 200,
        origin: 'left',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.ideas__title', {
        delay: 300,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.ideas__subtitle', {
        delay: 400,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.ideas__btn', {
        delay: 500,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });
}

document.addEventListener("DOMContentLoaded", function() {
    generalIdeas();
});