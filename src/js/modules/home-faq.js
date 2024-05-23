function homeFaq() {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const itemTop = item.querySelector('.faq__item-top');
        const bottomSection = item.querySelector('.faq__item-bottom');

        itemTop.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('open');
                const bottom = faq.querySelector('.faq__item-bottom');
                bottom.style.maxHeight = null;
                bottom.style.opacity = null;
                bottom.style.padding = "0 20px";
            });

            // Open the clicked item
            if (!isOpen) {
                item.classList.add('open');
                setTimeout(() => {
                    bottomSection.style.opacity = 1;
                    bottomSection.style.padding = "20px";
                }, 10); 
            }
        });
    });
}

export default homeFaq;
