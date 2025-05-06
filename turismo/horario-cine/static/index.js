const horariosData = [
    {
        nombre: "Altavista - Royal Films",
        ciudad: "Bogotá (d.c.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["2D", "Doblada"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM", "08:00 PM", "09:20 PM"]
    },
    {
        nombre: "Andino - Cine Colombia",
        ciudad: "Bogotá (d.c.)",
        direccion: "Carrera 11 Nº 82 - 71",
        formatos: ["2D"],
        horas: ["11:50 AM", "02:20 PM"]
    },
    {
        nombre: "Atlantis - Cinemark",
        ciudad: "Bogotá (d.c.)",
        direccion: "Calle 81 # 13 - 05 Nivel 4",
        formatos: ["2D", "Doblada", "Premier"],
        horas: ["12:30 PM", "03:30 PM", "06:40 PM"],
        formatos2: ["2D", "Subtitulada", "Premier"],
        horas2: ["09:40 PM"]
    },
    {
        nombre: "Bima - Procinal",
        ciudad: "Bogotá (D.C.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["Doblada"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM", "08:00 PM"]
    },
    {
        nombre: "Bulevar Niza - Procinal",
        ciudad: "Bogotá (D.C.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["Doblada"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM"]
    },
    {
        nombre: "Cedritos - Cine Colombia",
        ciudad: "Bogotá (D.C.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["2D"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM", "09:20 PM"]
    },
    {
        nombre: "Altavista - Royal Films",
        ciudad: "Bogotá (d.c.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["2D", "Doblada"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM", "08:00 PM", "09:20 PM"]
    },
    {
        nombre: "Andino - Cine Colombia",
        ciudad: "Bogotá (d.c.)",
        direccion: "Carrera 11 Nº 82 - 71",
        formatos: ["2D"],
        horas: ["11:50 AM", "02:20 PM"]
    },
    {
        nombre: "Atlantis - Cinemark",
        ciudad: "Bogotá (d.c.)",
        direccion: "Calle 81 # 13 - 05 Nivel 4",
        formatos: ["2D", "Doblada", "Premier"],
        horas: ["12:30 PM", "03:30 PM", "06:40 PM"],
        formatos2: ["2D", "Subtitulada", "Premier"],
        horas2: ["09:40 PM"]
    },
    {
        nombre: "Bima - Procinal",
        ciudad: "Bogotá (D.C.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["Doblada"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM", "08:00 PM"]
    },
    {
        nombre: "Bulevar Niza - Procinal",
        ciudad: "Bogotá (D.C.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["Doblada"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM"]
    },
    {
        nombre: "Cedritos - Cine Colombia",
        ciudad: "Bogotá (D.C.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["2D"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM", "09:20 PM"]
    },
    {
        nombre: "Altavista - Royal Films",
        ciudad: "Bogotá (d.c.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["2D", "Doblada"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM", "08:00 PM", "09:20 PM"]
    },
    {
        nombre: "Andino - Cine Colombia",
        ciudad: "Bogotá (d.c.)",
        direccion: "Carrera 11 Nº 82 - 71",
        formatos: ["2D"],
        horas: ["11:50 AM", "02:20 PM"]
    },
    {
        nombre: "Atlantis - Cinemark",
        ciudad: "Bogotá (d.c.)",
        direccion: "Calle 81 # 13 - 05 Nivel 4",
        formatos: ["2D", "Doblada", "Premier"],
        horas: ["12:30 PM", "03:30 PM", "06:40 PM"],
        formatos2: ["2D", "Subtitulada", "Premier"],
        horas2: ["09:40 PM"]
    },
    {
        nombre: "Bima - Procinal",
        ciudad: "Bogotá (D.C.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["Doblada"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM", "08:00 PM"]
    },
    {
        nombre: "Bulevar Niza - Procinal",
        ciudad: "Bogotá (D.C.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["Doblada"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM"]
    },
    {
        nombre: "Cedritos - Cine Colombia",
        ciudad: "Bogotá (D.C.)",
        direccion: "Cra 1 Nº 65 D 58 Sur Centro Comercial Altavista",
        formatos: ["2D"],
        horas: ["01:00 PM", "03:45 PM", "06:30 PM", "09:20 PM"]
    }
];

function renderHorarios() {
    const container = document.getElementById('cine-horarios-content');
    container.innerHTML = '';
    horariosData.forEach((cine) => {
        let html = `
        <div class="cine-horario-cine">
          <p class="cine-horario-nombre">${cine.nombre} <span style="font-weight:400;">${cine.ciudad}</span></p>
          <p class="cine-horario-direccion">
            <i class="fas fa-location-dot cine-horario-icon"></i>
            ${cine.direccion}
          </p>
          <div class="cine-horario-formatos">
            ${cine.formatos.map(f => `<span class="cine-horario-formato">${f}</span>`).join('')}
          </div>
          <div class="cine-horario-horas">
            ${cine.horas.map(h => `<span class="cine-horario-hora">${h}</span>`).join('')}
          </div>
          ${cine.formatos2 ? `
          <div class="cine-horario-formatos" style="margin-top:8px;">
            ${cine.formatos2.map(f => `<span class="cine-horario-formato">${f}</span>`).join('')}
          </div>
          <div class="cine-horario-horas">
            ${cine.horas2.map(h => `<span class="cine-horario-hora">${h}</span>`).join('')}
          </div>
          ` : ''}
        </div>
      `;
        container.innerHTML += html;
    });
}

document.addEventListener('DOMContentLoaded', renderHorarios);

function renderDetallePelicula() {
    const detalleHTML = `
    <div class="detalle-pelicula-container container-max-width">
        <div style="display:flex; flex-direction:column; align-items:center;">
            <div style="position:relative; width:260px;">
                <div style="background:#f43d4d; color:#fff; font-weight:700; border-radius:22px 22px 0 0; padding:14px 0; font-size:1.1rem; text-align:center; position:absolute; top:0; left:0; width:100%; z-index:2;">
                    ESTRENO 19 MAR. 2025
                </div>
                <img src="/assets/img/movie-2.png" alt="Mufasa: El Rey León"
                    style="width:100%; border-radius:22px; margin-top:32px; display:block; box-shadow:0 4px 16px #0002;">
            </div>
        </div>
        <div class="detalle-pelicula-info"> 
            <div class="detalle-pelicula-titulo-container">
                <p class="detalle-pelicula-titulo">Mufasa: El Rey León</p>
                <p class="detalle-pelicula-titulo-en">(Mufasa: The Lion King)</p>
                <a href="#" class="trailer-btn">
                    <span class="circle"></span>
                    Ver Trailer
                </a>
            </div>
            <div class="detalle-pelicula-tags">
                <span class="detalle-pelicula-tag"><i class="fas fa-users"></i> Todos</span>
                <span class="detalle-pelicula-tag"><i class="fas fa-clock"></i> 107 Min</span>
                <span class="detalle-pelicula-tag"><i class="fas fa-calendar"></i> 2023</span>
                <span class="detalle-pelicula-tag">Aventura</span>
            </div>
            <div class="detalle-pelicula-director">
                <span class="detalle-pelicula-label">Director:</span>
                <span style="color:#1a3876; font-weight:700;">Barry Jenkins</span>
            </div>
            <div class="detalle-pelicula-actores">
                <span class="detalle-pelicula-label">Actores:</span>
                <p>Mads Mikkelsen, Donald Glover, Seth Rogen, Billy Eichner, John Kani, Beyoncé, Aaron Pierre, Kelvin Harrison Jr., Tiffany Boone y Thandiwe Newton</p>
            </div>
            <div class="detalle-compartir">Comparte:</div>
            <div class="detalle-pelicula-social">
                <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                <a href="#" title="X"><i class="fab fa-x-twitter"></i></a>
                <a href="#" title="Correo"><i class="fas fa-envelope" style="color:#f4d14e;"></i></a>
            </div>
        </div>
    </div>
    `;
    document.getElementById('detalle-pelicula').innerHTML = detalleHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    renderDetallePelicula();
});