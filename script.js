// Formulaire de contact
document.getElementById("contactForm").addEventListener("submit", function (e) {
    // Affiche un message avant l'envoi
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    // Le formulaire continue vers contact.php (pas de preventDefault)
});

// Menu hamburger
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
