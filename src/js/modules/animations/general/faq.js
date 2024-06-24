export function generalFaq() {
    ScrollReveal().reveal('.faq__title, .faq__subtitle', {
        delay: 200,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        interval: 100
    });

    ScrollReveal().reveal('.faq__item-top', {
        delay: 300,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        interval: 100
    });

    ScrollReveal().reveal('.faq__item-subtitle', {
        delay: 400,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        interval: 100
    });

    ScrollReveal().reveal('.faq__item-open, .faq__item-close', {
        delay: 500,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        interval: 100
    });
}

document.addEventListener("DOMContentLoaded", function() {
    generalFaq();
});