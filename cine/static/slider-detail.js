document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slider-arrow').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Funcionalidad de slider no implementada');
        });
    });

    const readmore = document.querySelector('.slider-detail-readmore');
    if (readmore) {
        readmore.addEventListener('click', () => {
            alert('Mostrar sinopsis completa');
        });
    }
});