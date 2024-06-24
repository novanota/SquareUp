export function homePageCompaniesAnimations() {
    ScrollReveal().reveal('.companies__trusted', {
        origin: 'left',
        distance: '20px',
        duration: 800,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.companies__logo', {
        origin: 'bottom',
        distance: '30px',
        duration: 600,
        delay: 200,
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });
}

document.addEventListener("DOMContentLoaded", function() {
    homePageCompaniesAnimations();
});