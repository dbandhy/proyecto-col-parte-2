const cinemaLocations = [
  {
    city: "Aguachica - Cesar",
    count: 4,
    expanded: false,
    cinemas: [
      { name: "Calima", company: "Royal Films", mapLink: true },
      { name: "Portal del Quindío", company: "Cine Colombia", mapLink: true },
      { name: "San Sur", company: "Royal Films", mapLink: true },
      { name: "Unicentro", company: "Cinemark", mapLink: true }
    ]
  },
  {
    city: "Apartadó - Antioquia",
    count: 4,
    expanded: false,
    cinemas: [
      { name: "Calima", company: "Royal Films", mapLink: true },
      { name: "Portal del Quindío", company: "Cine Colombia", mapLink: true },
      { name: "San Sur", company: "Royal Films", mapLink: true },
      { name: "Unicentro", company: "Cinemark", mapLink: true }
    ]
  },
  {
    city: "Armenia - Quindío",
    count: 4,
    expanded: true,
    cinemas: [
      { name: "Calima", company: "Royal Films", mapLink: true },
      { name: "Portal del Quindío", company: "Cine Colombia", mapLink: true },
      { name: "San Sur", company: "Royal Films", mapLink: true },
      { name: "Unicentro", company: "Cinemark", mapLink: true }
    ]
  },
  {
    city: "Apartadó - Antioquia",
    count: 4,
    expanded: false,
    cinemas: [
      { name: "Calima", company: "Royal Films", mapLink: true },
      { name: "Portal del Quindío", company: "Cine Colombia", mapLink: true },
      { name: "San Sur", company: "Royal Films", mapLink: true },
      { name: "Unicentro", company: "Cinemark", mapLink: true }
    ]
  },
  {
    city: "Armenia - Quindío",
    count: 4,
    expanded: false,
    cinemas: [
      { name: "Calima", company: "Royal Films", mapLink: true },
      { name: "Portal del Quindío", company: "Cine Colombia", mapLink: true },
      { name: "San Sur", company: "Royal Films", mapLink: true },
      { name: "Unicentro", company: "Cinemark", mapLink: true }
    ]
  },
  {
    city: "Apartadó - Antioquia",
    count: 4,
    expanded: false,
    cinemas: [
      { name: "Calima", company: "Royal Films", mapLink: true },
      { name: "Portal del Quindío", company: "Cine Colombia", mapLink: true },
      { name: "San Sur", company: "Royal Films", mapLink: true },
      { name: "Unicentro", company: "Cinemark", mapLink: true }
    ]
  },
  {
    city: "Armenia - Quindío",
    count: 4,
    expanded: false,
    cinemas: [
      { name: "Calima", company: "Royal Films", mapLink: true },
      { name: "Portal del Quindío", company: "Cine Colombia", mapLink: true },
      { name: "San Sur", company: "Royal Films", mapLink: true },
      { name: "Unicentro", company: "Cinemark", mapLink: true }
    ]
  }
];

function renderCinemaLocations() {
  const container = document.getElementById('cine-salas-content');
  container.innerHTML = '';
  cinemaLocations.forEach((location,index) => {
    let locationHtml = `
      <div class="cinema-location-item">
        <div class="d-flex align-items-center justify-content-between p-3 location-header">
          <div class="d-flex align-items-center">
            <span class="location-name">${location.city}</span>
            <span class="location-count">${location.count}</span>
          </div>
          <button class="btn-toggle ${location.expanded ? 'minus' : 'plus'}">
            <i class="fas fa-${location.expanded ? 'minus' : 'plus'}"></i>
          </button>
        </div>
       
    `;

    if (location.expanded && location.cinemas.length > 0) {
      locationHtml += `<div class="cinema-list">`;
      location.cinemas.forEach(cinema => {
        locationHtml += `
          <div class="cinema-item d-flex align-items-center justify-content-between p-3">
            <div class="d-flex align-items-center">
              <span class="cinema-bullet">•</span>
              <a href="#" class="cinema-name">${cinema.name}</a>
              <span class="cinema-company">- ${cinema.company}</span>
            </div>
            <a href="#" class="map-link">
              <i class="fas fa-map-marker-alt"></i>
            </a>
          </div>
        `;
      });
      locationHtml += `</div>`;
    }

    locationHtml += `</div>`;
    locationHtml += (index === 2 || index === 5) ?
      '<div class="justify-content-center align-items-center hide-800 w-100 position-relative image-anuncio pt-3 pb-3">' +
      '<img src="/assets/img/banner-copa-america.png" alt="img" />' +
      '</div>' : '';    
    
    container.innerHTML += locationHtml;
  });

  document.querySelectorAll('.btn-toggle').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      cinemaLocations[index].expanded = !cinemaLocations[index].expanded;
      renderCinemaLocations();
    });
  });
}
document.addEventListener('DOMContentLoaded', () => {
  renderCinemaLocations();
});