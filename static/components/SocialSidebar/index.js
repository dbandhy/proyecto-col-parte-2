class SocialSiderbar extends HTMLElement {
  static get observedAttributes() {
    return ['image','link']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'image') {
      this.image = newValue
      this.render()
    }
    if (name === 'link') {
      this.link = newValue
      this.render()
    }
  }

  connectedCallback() {
    this.render()
  }

  render () {
    this.innerHTML = `
      <section class="social-bar-container">
        <div class="sidebar-ad">
          <img src="${this.image}" alt="${this.image}" class="img-fluid">
        </div>
        <div class="social-sidebar-bn">
          <div class="social-icons-bn">
            <a href="#" class="social-icon-bn-link">
              <div class="social-icon-bn shopping">
                <i class="fas fa-shopping-cart"></i>
              </div>
            </a>
            <a href="#" class="social-icon-bn-link">
              <div class="social-icon-bn whatsapp">
                <i class="fab fa-whatsapp"></i>
              </div>
            </a>
            <a href="#" class="social-icon-bn-link">
              <div class="social-icon-bn facebook">
                <i class="fab fa-facebook-f"></i>
              </div>
            </a>
            <a href="#" class="social-icon-bn-link">
              <div class="social-icon-bn youtube">
                <i class="fab fa-youtube"></i>
              </div>
            </a>
            <a href="#" class="social-icon-bn-link">
              <div class="social-icon-bn instagram">
                <i class="fab fa-instagram"></i>
              </div>
            </a>
            <a href="#" class="social-icon-bn-link">
              <div class="social-icon-bn twitter">
                <i class="fab fa-twitter"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('social-sidebar', SocialSiderbar)