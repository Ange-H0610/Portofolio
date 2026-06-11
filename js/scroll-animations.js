window.addEventListener('scroll', () => {
    document.querySelectorAll('.card').forEach(card => {
        if(card.getBoundingClientRect().top < window.innerHeight - 100) {
            card.style.opacity = 1;
        }
    });
});