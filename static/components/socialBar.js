class SocialBarComponent extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="social-bar mt-4">
				<div class="social-icon facebook"><i class="fab fa-facebook-f"></i></div>
				<div class="social-icon whatsapp"><i class="fab fa-whatsapp"></i></div>
				<div class="social-icon twitter"><i class="fa-brands fa-x-twitter"></i></div>
				<div class="social-icon email"><i class="fa-regular fa-envelope"></i></div>
			</div>
    `
  }
}

customElements.define('social-bar-component', SocialBarComponent)