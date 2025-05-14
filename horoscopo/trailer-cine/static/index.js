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
            '<div class="justify-content-center align-items-center hide-800 w-100 position-relative image-anuncio pb-4 pt-4">' +
            '<img src="/assets/img/banner-copa-america.png" alt="img" />' +
            '</div>' : ''}
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderPeliculas();
});

