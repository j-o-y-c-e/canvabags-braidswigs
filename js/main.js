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

const translations = {
  fr: {
    hero_title: "Sacs élégants, perruques de qualité & coiffures",
    buy_bags: "Acheter les sacs",
    buy_wigs: "Acheter les perruques",
    book_hair: "Réserver une coiffure",
    why_title: "Pourquoi nous choisir ?",
    why_text: "Élégance • Qualité • Professionnalisme",
  },

  en: {
    hero_title: "Elegant bags, quality wigs & professional hairstyles",
    buy_bags: "Shop bags",
    buy_wigs: "Shop wigs",
    book_hair: "Book a hairstyle",
    why_title: "Why choose us?",
    why_text: "Elegance • Quality • Professionalism",
  }
};

function setLanguage(lang) {
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

/* langue par défaut */
const savedLang = localStorage.getItem("language") || "fr";
setLanguage(savedLang);

/* clic boutons */
document.querySelectorAll(".language-switcher button").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});


