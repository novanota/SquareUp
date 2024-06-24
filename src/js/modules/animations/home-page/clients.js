export function homePageClientsAnimations() {
    ScrollReveal().reveal('.clients__title, .clients__subtitle', {
        origin: 'top',
        distance: '20px',
        duration: 800,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.clients__item', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.clients__item-title, .clients__item-subtitle, .clients__item-profile, .clients__item-website', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 100
    });
}

document.addEventListener("DOMContentLoaded", function() {
    homePageClientsAnimations();
});