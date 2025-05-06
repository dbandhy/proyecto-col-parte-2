class HeaderDesplegableComponent extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'size']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'text') {
      this.text = newValue
      this.render()
    }
    if (name === 'size') {
      this.size = newValue
      this.render()
    }
  }

  set text (val) {
    this._text = val
    this.render()
  }
  get text () {
    return this._text
  }

  set size (val) {
    this._size = val
    this.render()
  }
  get size () {
    return this._size
  }

  connectedCallback () {
    this.render()
  }

  generateClassnames () {
    let classnames = ''

    if (this.size) {
      classnames += ` size-${this.size}`
    }
    return classnames
  }
  
  render () {
    const classnames = this.generateClassnames()

    this.innerHTML = `
      <div class="header-desplegable ${classnames}">
        <span>${this.text}</span>
        <i class="fa-solid fa-angle-down"></i>
      </div>
    `
  }
}

customElements.define('header-desplegable-component', HeaderDesplegableComponent)