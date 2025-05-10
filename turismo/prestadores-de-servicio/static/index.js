const ciudades = [
    { nombre: "Aguachica", departamento: "Cesar" },
    { nombre: "Apartadó", departamento: "Antioquía" },
    { nombre: "Armenia", departamento: "Quindío" },
    { nombre: "Barrancabermeja", departamento: "Santander" },
    { nombre: "Barranquilla", departamento: "Atlántico" },
    { nombre: "Bello", departamento: "Antioquía" },
    { nombre: "Bogotá", departamento: "D.C" },
    { nombre: "Bucaramanga", departamento: "Santander" },
    { nombre: "Buenaventura", departamento: "Valle" },
    { nombre: "Buga", departamento: "Valle" },
    { nombre: "Cali", departamento: "Valle" },
    { nombre: "Cartagenea", departamento: "Valle" },
    { nombre: "Cartago", departamento: "Valle" },
    { nombre: "Caucasia", departamento: "Antioquía" },
    { nombre: "Chía", departamento: "Cundinamarca" },
    { nombre: "Ciudad Bolívar", departamento: "Cundinamarca" },
    { nombre: "Cúcuta", departamento: "Norte De Santander" },
    { nombre: "Dosquebradas", departamento: "Risaralda" },
    { nombre: "Duitama", departamento: "Boyacá" },
    { nombre: "Envigado", departamento: "Antioquía" },
    { nombre: "Facatativá", departamento: "Cundinamarca" },
    { nombre: "Florencia", departamento: "Caquetá" },
    { nombre: "Fusagasugá", departamento: "Cundinamarca" },
    { nombre: "Giradot", departamento: "Cundinamarca" },
    { nombre: "Ibagué", departamento: "Tolima" },
    { nombre: "Ipiales", departamento: "Nariño" },
    { nombre: "Itagüí", departamento: "Antioquía" },
    { nombre: "La Ceja", departamento: "Antioquía" },
    { nombre: "Llano Grande", departamento: "Antioquía" },
    { nombre: "Madrid", departamento: "Cundinamarca" },
    { nombre: "Manizales", departamento: "Caldas" },
    { nombre: "Medellín", departamento: "Antioquía" },
    { nombre: "Mocoa", departamento: "Putumayo" },
    { nombre: "Montería", departamento: "Córdoba" },
    { nombre: "Mosquera", departamento: "Cundinamarca" },
    { nombre: "Neiva", departamento: "Huila" },
    { nombre: "Palmira", departamento: "Valle" },
    { nombre: "Pamplona", departamento: "Norte De Santander" },
    { nombre: "Pasto", departamento: "Nariño" },
    { nombre: "Pereira", departamento: "Risaralda" },
    { nombre: "Piedecuesta", departamento: "Santander" },
    { nombre: "Pitalito", departamento: "Huila" },
    { nombre: "Popayán", departamento: "Cauca" },
    { nombre: "Puerto Boyacá", departamento: "Boyacá" },
    { nombre: "Quibdó", departamento: "Choco" },
    { nombre: "Restrepo", departamento: "Meta" },
    { nombre: "Riohacha", departamento: "La Guajira" },
    { nombre: "Rionegro", departamento: "Antioquía" },
    { nombre: "Sabaneta", departamento: "Antioquía" },
    { nombre: "Santa Gil", departamento: "Santander" },
    { nombre: "San José Del Guaviare", departamento: "Guaviare" },
    { nombre: "Santa Marta", departamento: "Magdalena" },
    { nombre: "Santo Tomás", departamento: "Atlántico" },
    { nombre: "Sincelejo", departamento: "Sucre" },
    { nombre: "Soacha", departamento: "Cundinamarca" },
    { nombre: "Sogamoso", departamento: "Boyacá" },
    { nombre: "Soledad", departamento: "Atlántico" },
    { nombre: "Tutúá", departamento: "Valle" },
    { nombre: "Tunja", departamento: "Boyacá" },
    { nombre: "Tubarco", departamento: "Bolíbar" },
    { nombre: "Urubá", departamento: "Antioquía" },
    { nombre: "Valledupar", departamento: "Cesar" },
    { nombre: "Villavicencio", departamento: "Meta" },
    { nombre: "Yopal", departamento: "Casanare" },
    { nombre: "Yumbo", departamento: "Valle" },
    { nombre: "Zipaquirá", departamento: "Cundinamarca" }
];

function renderCiudades() {
    const grid = document.querySelector('.ciudades-grid');
    if (!grid) return;
    grid.innerHTML = ciudades.map(c =>
        `<span><b>${c.nombre}</b> <span class="text-muted">(${c.departamento})</span></span>`
    ).join('');
}
document.addEventListener('DOMContentLoaded', renderCiudades);

const salas = [
    "Royal Films",
    "Cine Colombia",
    "Cinépolis",
    "Cinemark",
    "Eurocine",
    "Procinal",
    "Teatro Cecilia"
];

function renderSalas() {
    const salaGrid = document.querySelector("#salas-listado .sala-grid");
    if (!salaGrid) return;
    salaGrid.innerHTML = salas
        .map(sala => `<span><b>${sala}</b></span>`)
        .join("");
}
document.addEventListener("DOMContentLoaded", renderSalas);


const peliculas = [
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },
    {
        titulo: "Mufasa: El Rey León",
        genero: "Drama",
        anio: 2025,
        duracion: "130 Min.",
        director: "Dougal Wilson",
        actores: "Antonio Banderas, Olivia Colman, Rachel Zegler.",
        imagen: "/assets/img/movie-3.png",
        estreno: true,
        trailer: "#"
    },

];

function renderPeliculas() {
    const cartelera = document.querySelector(".section-cartelera-derecha");
    if (!cartelera) return;
    cartelera.innerHTML = peliculas.map((pelicula, index) => `
      <div class="container-max-width movie-detail-container">
          <div class="movie-poster-container">
              ${pelicula.estreno ? '<div class="estreno-badge">Estreno</div>' : ''}
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}" class="movie-poster">
          </div>
          <div class="movie-detail-content">
            <h1 class="movie-title">${pelicula.titulo}</h1>
            <div class="d-flex flex-wrap gap-2">
              <div class="movie-info-badge"><i class="bi bi-camera-video"></i> ${pelicula.genero}</div>
              <div class="movie-info-badge"><i class="bi bi-calendar"></i> ${pelicula.anio}</div>
              <div class="movie-info-badge"><i class="bi bi-clock"></i> ${pelicula.duracion}</div>
            </div>
            <div class="mb-2">
              <h2 class="detail-label">Director:</h2>
              <p class="detail-value">${pelicula.director}</p>
            </div>
            <div class="mb-2">
              <h2 class="detail-label">Actores:</h2>
              <p class="detail-value">${pelicula.actores}</p>
            </div>
            <a href="${pelicula.trailer}" class="trailer-btn">
              <i class="fas fa-play-circle"></i> Ver Trailer
            </a>
          </div>
      </div>
        ${index === 2 || index === 5 ?
            '<div class="justify-content-center align-items-center hide-800 w-100 position-relative image-anuncio">' +
            '<img src="/assets/img/banner-copa-america.png" alt="img" />' +
            '</div>' : ''}
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderSalas();
    renderPeliculas();
});



function llenarSelectoresModal() {
    const selectCiudad = document.getElementById('selectCiudad');
    if (selectCiudad) {
        selectCiudad.innerHTML = '<option value="">Ciudad</option>' +
            ciudades.map(c => `<option value="${c.nombre}">${c.nombre} (${c.departamento})</option>`).join('');
    }

    const selectSala = document.getElementById('selectSala');
    if (selectSala) {
        selectSala.innerHTML = '<option value="">Salas</option>' +
            salas.map(s => `<option value="${s}">${s}</option>`).join('');
    }
}

function modalFiltrosListeners() {
    const btnAbrir = document.getElementById('btnAbrirFiltros');
    const modal = document.getElementById('filtrosModal');
    if (btnAbrir && modal) {
        btnAbrir.onclick = () => { modal.style.display = 'flex'; };
        modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
    }
}

document.addEventListener('DOMContentLoaded', function () {
    llenarSelectoresModal();
    modalFiltrosListeners();
});


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('elenco-slider');
    const prevBtn = document.getElementById('elenco-prev');
    const nextBtn = document.getElementById('elenco-next');
    const cards = slider.children;
    const visible = 5; 
    let current = 0;

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth -30; 
        slider.style.transform = `translateX(-${current * cardWidth}px)`;
    }

    prevBtn.addEventListener('click', function () {
        if (current > 0) {
            current--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', function () {
        if (current < cards.length - visible) {
            current++;
            updateSlider();
        }
    });

    window.addEventListener('resize', updateSlider);
    updateSlider();
});