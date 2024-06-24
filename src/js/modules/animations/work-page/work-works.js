export function workWorksAnimations() {
    ScrollReveal().reveal('.works__squareup-title', {
        delay: 200,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 800,
    });

    ScrollReveal().reveal('.works__squareup-subtitle', {
        delay: 300,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 800,
    });

    ScrollReveal().reveal('.works__squareup-label', {
        delay: 400,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 800,
    });

    ScrollReveal().reveal('.works__squareup-item', {
        delay: 500,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 800,
        interval: 200,
    });
}

document.addEventListener("DOMContentLoaded", function() {
    workWorksAnimations();
});