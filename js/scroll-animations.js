document.addEventListener('DOMContentLoaded', () => {

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .section-label, .section-subtitle').forEach((el) => {
        el.classList.add('animation-fadeInUp');
        el.style.opacity = '0';
        observer.observe(el);
    });

    document.querySelectorAll('.about-text p').forEach((el, index) => {
        el.classList.add('animation-slideInLeft');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.about-card, .highlight-item').forEach((el, index) => {
        el.classList.add('animation-slideInRight');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.15}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.skill-category').forEach((el, index) => {
        el.classList.add('animation-scaleIn');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.15}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.classList.add('animation-slideInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.contact-card').forEach((el, index) => {
        el.classList.add('animation-fadeInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.15}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.form-group').forEach((el, index) => {
        el.classList.add('animation-fadeInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.tech-tag').forEach((el, index) => {
        el.classList.add('animation-scaleIn');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.08}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.timeline-content').forEach((el, index) => {
        el.classList.add('animation-slideInRight');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

