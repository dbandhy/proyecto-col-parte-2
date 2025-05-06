const SalaData = [
    {
      titulo: "Compañera Perfecta",
      poster: "/assets/img/movie-2.png",
      formatos: ["2D", "Doblada"],
      horas: ["01:00 PM", "03:45 PM", "06:30 PM", "06:30 PM"]
    },
    {
      titulo: "Desastre En El Ártico",
      poster: "/assets/img/movie-2.png",
      formatos: ["2D", "Doblada"],
      horas: ["01:00 PM"]
    },
    {
      titulo: "El Maravilloso Mago De Oz",
      poster: "/assets/img/movie-2.png",
      formatos: ["2D", "Doblada"],
      horas: ["01:00 PM"]
    },
    {
      titulo: "Las Aventuras De Dog Man",
      poster: "/assets/img/movie-2.png",
      formatos: ["2D", "Doblada"],
      horas: ["01:00 PM", "03:45 PM", "06:30 PM"]
    },
    {
        titulo: "Compañera Perfecta",
        poster: "/assets/img/movie-2.png",
        formatos: ["2D", "Doblada"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM", "06:30 PM"]
      },
      {
        titulo: "Desastre En El Ártico",
        poster: "/assets/img/movie-2.png",
        formatos: ["2D", "Doblada"],
        horas: ["01:00 PM"]
      },
      {
        titulo: "El Maravilloso Mago De Oz",
        poster: "/assets/img/movie-2.png",
        formatos: ["2D", "Doblada"],
        horas: ["01:00 PM"]
      },
  ];

  function renderHorarios() {
    const container = document.getElementById('cine-horarios-content');
    container.innerHTML = '';
    SalaData.forEach((pelicula,index) => {
      let html = `
        <div class="d-flex align-items-start pb-4" style="border-bottom:1px solid #1a38761a;">
          <img src="${pelicula.poster}" alt="${pelicula.titulo}" class="card-img">
          <div class="flex-grow-1 card-left">
            <h3 class='card-titulo'>${pelicula.titulo}</h3>
            <div class="d-flex align-items-center mb-2" style="gap:8px;">
              <i class="fa-solid fa-film" style="color:#1a3876; font-size:1.3rem;"></i>
              ${pelicula.formatos.map(f => `<span class="badge">${f}</span>`).join('')}
            </div>
            <div class="d-flex align-items-center" style="gap:8px; flex-wrap:wrap;">
              <i class="fa-regular fa-clock" style="color:#1a3876; font-size:1.3rem;"></i>
              ${pelicula.horas.map(h => `<span class="badge-white">${h}</span>`).join('')}
            </div>
          </div>
        </div>
        ${index === 2 || index === 5 ?
          '<div class="justify-content-center align-items-center hide-800 w-100 position-relative pb-4 pt-4 image-anuncio">' +
          '<img src="/assets/img/banner-copa-america.png" alt="img" />' +
          '</div>' : ''}
      `;
      container.innerHTML += html;
    });
  }
  document.addEventListener('DOMContentLoaded', renderHorarios);

