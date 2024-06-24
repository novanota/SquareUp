export function footerAnimations() {
    ScrollReveal().reveal('.footer__logo', {
        delay: 200,
        origin: 'top',
        distance: '20px',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('.footer__nav', {
        delay: 300,
        origin: 'top',
        distance: '20px',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('.footer__connected', {
        delay: 400,
        origin: 'top',
        distance: '20px',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('.footer__contacts', {
        delay: 200,
        origin: 'top',
        distance: '20px',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('.footer__copyright', {
        delay: 600,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-out'
    });
}

document.addEventListener("DOMContentLoaded", function() {
    footerAnimations();
});