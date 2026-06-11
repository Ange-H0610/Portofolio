const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});


const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs');
            return;
        }
        
       
        const subject = encodeURIComponent(`Nouveau message de ${name}`);
        const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.open(`https://mail.google.com/mail/u/0/?view=cm&to=hei.iraka.4@gmail.com&subject=${subject}&body=${body}`, '_blank');
        
       
        alert('Redirection vers votre client email. Complétez et envoyez le message!');
        
      
        contactForm.reset();
    });
}