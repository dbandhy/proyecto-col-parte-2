const PersonajesData = [
    {
        nombre: "Antonio Banderas",
        imagen: "/assets/img/movie-2.png",
        nombreArtistico: "Antonio Banderas",
        fechaNacimiento: "10 de Agosto de 1960",
        nacionalidad: "Español",
        edad: "64 años",
        inicioCarrera: "1979",
        mostrarVerMas: true
    },
    {
        nombre: "Dwayne Johnson",
        imagen: "/assets/img/movie-2.png",
        nombreArtistico: "Antonio Banderas",
        fechaNacimiento: "10 de Agosto de 1960",
        nacionalidad: "Español",
        edad: "64 años",
        inicioCarrera: "1979"
    },
    {        
        nombre: "Jesse Eisenberg",
        imagen: "/assets/img/movie-2.png",
        nombreArtistico: "Antonio Banderas",
        fechaNacimiento: "10 de Agosto de 1960",
        nacionalidad: "Español",
        edad: "64 años",
        inicioCarrera: "1979"
    },
    {        
        nombre: "Aaron Taylor Johnson",
        imagen: "/assets/img/movie-2.png",
        nombreArtistico: "Antonio Banderas",
        fechaNacimiento: "10 de Agosto de 1960",
        nacionalidad: "Español",
        edad: "64 años",
        inicioCarrera: "1979"
    },
    {
        nombre: "Dwayne Johnson",
        imagen: "/assets/img/movie-2.png",
        nombreArtistico: "Antonio Banderas",
        fechaNacimiento: "10 de Agosto de 1960",
        nacionalidad: "Español",
        edad: "64 años",
        inicioCarrera: "1979"
    },
    {        
        nombre: "Jesse Eisenberg",
        imagen: "/assets/img/movie-2.png",
        nombreArtistico: "Antonio Banderas",
        fechaNacimiento: "10 de Agosto de 1960",
        nacionalidad: "Español",
        edad: "64 años",
        inicioCarrera: "1979"
    },
    {
        nombre: "Dwayne Johnson",
        imagen: "/assets/img/movie-2.png",
        nombreArtistico: "Antonio Banderas",
        fechaNacimiento: "10 de Agosto de 1960",
        nacionalidad: "Español",
        edad: "64 años",
        inicioCarrera: "1979"
    },
    {        
        nombre: "Jesse Eisenberg",
        imagen: "/assets/img/movie-2.png",
        nombreArtistico: "Antonio Banderas",
        fechaNacimiento: "10 de Agosto de 1960",
        nacionalidad: "Español",
        edad: "64 años",
        inicioCarrera: "1979"
    },
];

function renderPersonajes() {
    const container = document.querySelector('.section-cartelera-derecha');
    if (!container) return;

    let html = '<div class="personajes-grid">';

    PersonajesData.forEach((personaje, index) => {
        html += `
        <div class="personaje-card">
          <img src="${personaje.imagen}" alt="${personaje.nombre}" class="personaje-img">
          <div class="personaje-info">
            <h3 class="personaje-nombre">${personaje.nombre}</h3>
            
            <div class="personaje-detalle">
              <span class="personaje-detalle-label">Nombre artístico:</span>
              <span class="personaje-detalle-valor">${personaje.nombreArtistico}</span>
            </div>
            
            <div class="personaje-detalle">
              <span class="personaje-detalle-label">Fecha nacimiento:</span>
              <span class="personaje-detalle-valor">${personaje.fechaNacimiento}</span>
            </div>
            
            <div class="personaje-detalle">
              <span class="personaje-detalle-label">Nacionalidad:</span>
              <span class="personaje-detalle-valor">${personaje.nacionalidad}</span>
            </div>
            
            <div class="personaje-detalle">
              <span class="personaje-detalle-label">Edad:</span>
              <span class="personaje-detalle-valor">${personaje.edad}</span>
            </div>
            
            <div class="personaje-detalle">
              <span class="personaje-detalle-label">Inicio de carrera:</span>
              <span class="personaje-detalle-valor">${personaje.inicioCarrera}</span>
            </div>          
          </div>
        </div>      
        ${index === 2 || index === 5 ?
          '<div class="justify-content-center align-items-center hide-800 w-100 position-relative image-anuncio">' +
          '<img src="/assets/img/banner-copa-america.png" alt="img" />' +
          '</div>' : ''}      
      `;
    });

    html += '</div>';
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderPersonajes);