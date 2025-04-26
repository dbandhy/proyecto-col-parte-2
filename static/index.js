// Carrusel de Información de Colombia
$(document).ready(function() {
    // Botones de navegación del carrusel
    $('.btn-carousel.right').click(function() {
        const container = $('.info-colombia-cards');
        const scrollAmount = 280; // Ancho aproximado de una tarjeta + margen
        container.animate({
            scrollLeft: container.scrollLeft() + scrollAmount
        }, 300);
    });
    
    $('.btn-carousel.left').click(function() {
        const container = $('.info-colombia-cards');
        const scrollAmount = 280; // Ancho aproximado de una tarjeta + margen
        container.animate({
            scrollLeft: container.scrollLeft() - scrollAmount
        }, 300);
    });
    
    // Animación para el punto "en vivo"
    setInterval(function() {
        $('.live-dot').fadeOut(500).fadeIn(500);
    }, 1000);
});