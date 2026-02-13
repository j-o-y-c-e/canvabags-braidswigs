// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== EMAILJS FORM =====
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Email pour TOI
  emailjs.sendForm(
    "SERVICE_ID_A_REMPLACER",
    "TEMPLATE_ADMIN_A_REMPLACER",
    this
  );

  // Email pour la CLIENTE
  emailjs.sendForm(
    "SERVICE_ID_A_REMPLACER",
    "TEMPLATE_CLIENT_A_REMPLACER",
    this
  );

  status.innerText = "✅ Demande envoyée ! Un email de confirmation vous a été envoyé.";
  form.reset();
});
/* =========================
   MULTI-LANGUAGE SYSTEM
========================= */

