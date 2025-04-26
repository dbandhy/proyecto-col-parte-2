class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render () {
    this.innerHTML = `
    <div id="main-footer">
      <footer class="footer">
        <div class="container">
          <div class="layout">
            <div class="member">
              <img src="/assets/icons/colombia-com-header.png" alt="Colombia.com Logo" width="150" class="col-lg-6 col-md-6">
              <p>MIEMBRO DE:</p>
              <img src="/assets/icons/iab.png" alt="IAB Logo" width="80" class="col-lg-6 col-md-6">
              <p>Interactive Advertisement Bureau.</p>
            </div>

            <div class="services">
              <div class="footer-title">SERVICIOS</div>
              <ul>
                <li><a href="#">Cambio De Moneda</a></li>
                <li><a href="#">Cine</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Radio En Vivo</a></li>
                <li><a href="#">TV En Vivo</a></li>
              </ul>
            </div>

            <div class="about">
              <div class="footer-title">NOSOTROS</div>
              <ul>
                <li><a href="#">Términos y Condiciones</a></li>
                <li><a href="#">Políticas De Privacidad</a></li>
                <li><a href="#">Paute con Nosotros</a></li>
                <li><a href="#">Grupo Interlatin</a></li>
              </ul>
            </div>

            <div class="buttons-footer">
              <button class="btn">CONTÁCTENOS</button>
              <button class="btn">PAUTA CON NOSOTROS</button>
              <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-x"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-tiktok"></i></a>
              </div>
            </div>
          </div> 
        </div>
        <div class="container-fluid m-0 p-0">
          <div class="disclaimer">
            <div class="disclaimer-text">
              <span>PAUTA CON NOSOTROS</span>
              <span>somos la vitrina perfecta</span>
              <span>para ofrecer tus productos y/o servicios</span>
            </div>
            <span>Todos los derechos son reservados</span>
          </div>    
        </div>
      </footer>
    </div>
    `;
  }
}

customElements.define('footer-component', FooterComponent);