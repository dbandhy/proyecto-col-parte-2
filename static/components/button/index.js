class ButtonComponent extends HTMLElement {
  static get observedAttributes () {
    return ['size','text','color','rounded']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'size') {
      this.size = newValue
    } else if (name === 'text') {
      this.text = newValue
    } else if (name === 'color') {
      this.color = newValue
    } else if (name === 'rounded') {
      this.rounded = newValue
    }
  }

  set size(val) {
    this._size = val
    this.render()
  }
  get size() {
    return this._size
  }

  set text(val) {
    this._text = val
    this.render()
  }
  get text() {
    return this._text
  }

  set color(val) {
    this._color = val
    this.render()
  }
  get color() {
    return this._color
  }

  set rounded(val) {
    this._rounded = val
    this.render()
  }
  get rounded() {
    return this._rounded
  }

  connectedCallback () {
    this.render()
  }

  generateClassnames () {
    let classnames = 'button'
    
    if (this.size) {
      classnames += ` size-${this.size}`
    }
    if (this.color) {
      classnames += ` color-${this.color}`
    }
    if (this.rounded) {
      classnames += ` rounded-${this.rounded}`
    }
    
    return classnames
  }

  render () {
    const classnames = this.generateClassnames()

    this.innerHTML = `
      <div class="${classnames}">
			  ${this.text}
			</div>
    `
  }
}

customElements.define('button-component', ButtonComponent)
