document.addEventListener('DOMContentLoaded', function() {
    // Obtener la URL actual y el título de la página
    const currentUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    
    // Configurar los enlaces de compartir
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            let shareUrl = '';
            
            if (icon.classList.contains('facebook')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
            } else if (icon.classList.contains('whatsapp')) {
                shareUrl = `https://wa.me/?text=${pageTitle}%20${currentUrl}`;
            } else if (icon.classList.contains('twitter')) {
                shareUrl = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${currentUrl}`;
            } else if (icon.classList.contains('email')) {
                shareUrl = `mailto:?subject=${pageTitle}&body=${currentUrl}`;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank');
            }
        });
    });
});