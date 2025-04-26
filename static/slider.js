// JavaScript para el slider de Mitos Colombianos
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('mitosSlider');
  const slides = document.querySelectorAll('.mito-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let currentSlide = 0;
  
  // Función para mostrar un slide específico
  function showSlide(index) {
    // Ocultar todos los slides
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Desactivar todos los dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Mostrar el slide actual
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
  }
  
  // Event listeners para los botones de navegación
  prevBtn.addEventListener('click', function() {
    let newIndex = currentSlide - 1;
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    }
    showSlide(newIndex);
  });
  
  nextBtn.addEventListener('click', function() {
    let newIndex = currentSlide + 1;
    if (newIndex >= slides.length) {
      newIndex = 0;
    }
    showSlide(newIndex);
  });
  
  // Event listeners para los dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      showSlide(index);
    });
  });
  
  // Soporte para deslizar con el dedo en dispositivos táctiles
  let touchStartX = 0;
  let touchEndX = 0;
  
  slider.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  slider.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    if (touchEndX < touchStartX) {
      // Deslizar a la izquierda (siguiente)
      nextBtn.click();
    } else if (touchEndX > touchStartX) {
      // Deslizar a la derecha (anterior)
      prevBtn.click();
    }
  }
  
  // Iniciar el slider
  showSlide(0);
});