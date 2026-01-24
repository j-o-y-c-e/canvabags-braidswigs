// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== OPTIONNEL : FERMER LE MENU QUAND ON CLIQUE SUR UN LIEN =====
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    if(navLinks.classList.contains('active')){
      navLinks.classList.remove('active');
    }
  });
});

// ===== FUTURE INTERACTIONS =====
// Tu peux ajouter ici d'autres scripts, comme des animations, 
// des effets sur le hero, ou le suivi du formulaire Formspree

