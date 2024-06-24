export function generalConnected() {
    ScrollReveal().reveal('.connected__title, .connected__label', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100
    });
}

document.addEventListener("DOMContentLoaded", function() {
    generalConnected();
});