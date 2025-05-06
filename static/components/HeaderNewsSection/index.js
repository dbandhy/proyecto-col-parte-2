class HeaderNewsSection extends HTMLElement {
  static get observedAttributes() {
    return ['title-text', 'button-text']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title-text') {
      this.titleText = newValue
      this.render()
    }
    if (name === 'button-text') {
      this.buttonText = newValue
      this.render()
    }
  }

  set titleText(val) {
    this._titleText = val
    this.render()
  }
  get titleText() {
    return this._titleText
  }

  set buttonText(val) {
    this._buttonText = val
    this.render()
  }
  get buttonText() {
    return this._buttonText
  }

  connectedCallback() {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="header-news-section">
        <text-component
          size-mobile="18"
          size-desktop="25"
          text="${this.titleText}"
          weight="bold"
          color="primary"
        ></text-component>
        <button-component
          text="${this.buttonText}"
          color="primary"
          size="large"
          rounded="medium"
        ></button-component>
      </div>
    `
  }
}

customElements.define('header-news-section', HeaderNewsSection)