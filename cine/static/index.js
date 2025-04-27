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

