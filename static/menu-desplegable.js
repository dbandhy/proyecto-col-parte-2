(function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
  
    if (menuToggle && menuOverlay && closeMenu) {
      menuToggle.addEventListener('click', function () {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
  
      closeMenu.addEventListener('click', function () {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    } else {
      console.warn("No se encontraron los elementos del menú desplegable");
    }
  })();  