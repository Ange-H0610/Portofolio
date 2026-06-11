const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.contains('active');
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', String(!isActive));
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !e.target.closest('header')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        const subject = encodeURIComponent(`Nouveau message de ${name}`);
        const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.open(`https://mail.google.com/mail/u/0/?view=cm&to=hei.iraka.4@gmail.com&subject=${subject}&body=${body}`, '_blank');

        contactForm.reset();
    });
}