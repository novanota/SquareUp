export function processHomeAnimations() {
    ScrollReveal().reveal('.process__title', {
        delay: 200,
        origin: 'left',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('.process__subtitle', {
        delay: 300,
        origin: 'right',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('.process__heading', {
        delay: 100,
        origin: 'top',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 1000
    });

    ScrollReveal().reveal('.process__inner', {
        delay: 400,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 1000
    });
}