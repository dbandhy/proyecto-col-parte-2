
let slideIndex = 1;

document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (slides.length === 0) return;

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}


window.mostrarCiudades = function() {
    document.getElementById('ciudades-listado').style.display = 'block';
};

document.addEventListener('click', function(e) {
    const modal = document.getElementById('ciudades-listado');
    const btnCiudad = document.getElementById('btnCiudad');
    if (
        modal.style.display === 'block' &&
        !modal.contains(e.target) &&
        e.target !== btnCiudad &&
        !btnCiudad.contains(e.target)
    ) {
        modal.style.display = 'none';
    }
});

document.querySelectorAll('.ciudades-grid span').forEach(span => {
    span.addEventListener('click', function() {
        document.getElementById('btnCiudadText').textContent = this.innerText;
        document.getElementById('ciudades-listado').style.display = 'none';
    });
});

window.mostrarSalas = function() {
    document.getElementById('salas-listado').style.display = 'block';
};

window.cerrarSalas = function() {
    document.getElementById('salas-listado').style.display = 'none';
};

document.addEventListener('click', function(e) {
    const modal = document.getElementById('salas-listado');
    const btnSala = document.getElementById('btnSala');
    if (
        modal.style.display === 'block' &&
        !modal.contains(e.target) &&
        e.target !== btnSala &&
        !btnSala.contains(e.target)
    ) {
        modal.style.display = 'none';
    }
});


document.querySelectorAll('.sala-grid span').forEach(span => {
    span.addEventListener('click', function() {
        document.getElementById('btnSalaText').textContent = this.innerText;
        document.getElementById('salas-listado').style.display = 'none';
        document.querySelectorAll('.sala-grid span').forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
    });
});
