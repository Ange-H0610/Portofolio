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

    document.querySelectorAll('.section-title, .section-header, .tag').forEach((el) => {
        el.classList.add('animation-fadeInUp');
        el.style.opacity = '0';
        observer.observe(el);
    });

    document.querySelectorAll('.hero-grid > *').forEach((el, index) => {
        el.classList.add('animation-fadeInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.12}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.hero-meta-item').forEach((el, index) => {
        el.classList.add('animation-fadeInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.12 + 0.3}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.about-text-content p, .about-text-content h3, .about-text-content .greet').forEach((el, index) => {
        el.classList.add('animation-slideInLeft');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.15}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.about-mini-card').forEach((el, index) => {
        el.classList.add('animation-slideInRight');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.skill-card').forEach((el, index) => {
        el.classList.add('animation-slideInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.15}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.skill-tag').forEach((el, index) => {
        el.classList.add('animation-scaleIn');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.05}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.timeline-card').forEach((el, index) => {
        el.classList.add('animation-slideInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.12}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.classList.add('animation-slideInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.contact-item').forEach((el, index) => {
        el.classList.add('animation-slideInLeft');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.12}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.form-row').forEach((el, index) => {
        el.classList.add('animation-fadeInUp');
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});
