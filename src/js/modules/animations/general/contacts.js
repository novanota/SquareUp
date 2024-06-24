export function generalContacts() {
    ScrollReveal().reveal('.contacts__item', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100,
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.interest__form-title, .interest__input', {
        delay: 400,
        origin: 'bottom',
        distance: '20px',
        interval: 100,
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.interest__message-title', {
        delay: 400,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.interest__form-btn', {
        delay: 600,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out',
    });
}

document.addEventListener("DOMContentLoaded", function() {
    generalContacts();
});