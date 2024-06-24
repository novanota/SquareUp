export function generalAboutIdeas() {
    ScrollReveal().reveal('.about-ideas__logo', {
        delay: 200,
        distance: '20px',
        origin: 'left',
        easing: 'ease-in-out',
        duration: 800,
        opacity: 0,
    });

    ScrollReveal().reveal('.about-ideas__content', {
        delay: 400,
        distance: '20px',
        origin: 'right',
        easing: 'ease-in-out',
        duration: 800,
        opacity: 0,
    });

    ScrollReveal().reveal('.about-ideas-welcome__content', {
        delay: 600,
        distance: '20px',
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 800,
        opacity: 0,
    });
}

document.addEventListener("DOMContentLoaded", function() {
    generalAboutIdeas();
});