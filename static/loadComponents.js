
// function loadComponent(id, file) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => document.getElementById(id).innerHTML = data)
//         .catch(error => console.error('Error al cargar el archivo:', error));
// }

// // Cargar el header y footer
// loadComponent('main-header', '/components/header.html');
// loadComponent('main-footer', '/components/footer.html');
// Anexos
    // Colombia-info
    // loadComponent('main-header-colombia-info', '/components/header-colombia-info.html');


    async function loadComponent(id, file, script) {
      try {
        const container = document.getElementById(id);
        if (!container) {
          console.warn(`No se encontró el elemento con id "${id}"`);
          return;
        }
        const response = await fetch(file);
        const data = await response.text();
        container.innerHTML = data;
        if (script) {
          const scriptResponse = await fetch(script);
          const scriptText = await scriptResponse.text();
          new Function(scriptText)(); 
        }
    
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
      }
    }
    
    // Cargar el header y footer
    loadComponent('main-header', '/components/header.html','/static/menu-desplegable.js');
    loadComponent('main-footer', '/components/footer.html');
    loadComponent('main-menu-despegable', '/components/menu-despegable.html');
    loadComponent('main-header-cine', '/cine/components/header-cine.html','/static/menu-desplegable.js');
    loadComponent('main-slider-cine', '/cine/components/slider-cine.html');
    loadComponent('main-slider-estreno', '/cine/components/slider-estreno.html','/cine/static/slider-estreno.js');
    loadComponent('main-slider-cartelera', '/cine/components/slider-estreno.html','/cine/static/slider-estreno.js');
    loadComponent('main-slider-recomendado', '/cine/components/slider-estreno.html','/cine/static/slider-estreno.js');
    loadComponent('main-slider-estreno-mobile', '/cine/components/slider-estreno-mobile.html','/cine/static/slider-estreno.js');
    loadComponent('main-slider-detail', '/cine/components/slider-detail.html');
    loadComponent('main-slider-carrusel', '/cine/components/slider-carrusel.html', '/cine/static/slider-carrusel.js');