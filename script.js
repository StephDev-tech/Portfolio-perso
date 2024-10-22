// Sélectionner tous les liens de la navigation
const lienNavigation = document.querySelectorAll('.element-navigation');

// Ajouter un écouteur d'événement à chaque lien
lienNavigation.forEach(lien => {
  lien.addEventListener('click', function() {
    // Supprimer la classe 'active' de tous les liens
    lienNavigation.forEach(nav => nav.classList.remove('active'));

    // Ajouter la classe 'active' au lien cliqué
    this.classList.add('active');
  });
});

// Sélectionner le bouton
const boutonPremierePage = document.getElementById('premierePage');

// Afficher le bouton après avoir défilé 100px vers le bas
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        boutonPremierePage.style.display = 'block';
    } else {
        boutonPremierePage.style.display = 'none';
    }
});

// Scroll vers le haut avec un effet fluide
boutonPremierePage.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


