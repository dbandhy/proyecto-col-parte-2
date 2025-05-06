class TextComponent extends HTMLElement {
  static get observedAttributes() {
    return ['size-mobile', 'size-desktop', 'text','weight','color', 'text-align', 'classnames'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'text') {
      this.text = newValue;
      this.render();
    }
    if (name === 'weight') {
      this.weight = newValue;
      this.render();
    }
    if (name === 'color') {
      this.color = newValue;
      this.render();
    }
    if (name === 'text-align') {
      this.textAlign = newValue;
      this.render();
    }
    if (name === 'size-mobile') {
      this.sizeMobile = newValue;
      this.render();
    }
    if (name === 'size-desktop') {
      this.sizeDesktop = newValue;
      this.render();
    }
    if (name === 'classnames') {
      this.classnames = newValue;
      this.render();
    }
  }

  set text (val) {
    this._text = val
    this.render()
  }
  get text () {
    return this._text
  } 

  set weight (val) {
    this._weight = val
    this.render()
  }
  get weight () {
    return this._weight
  }

  set color (val) {
    this._color = val
    this.render()
  }
  get color () {
    return this._color
  }

  set text_align (val) {
    this._textAlign = val
    this.render()
  }
  get textAlign () {
    return this._textAlign
  }

  set classnames (val) {
    this._classnames = val
    this.render()
  }
  get classnames () {
    return this._classnames
  }

  set sizeMobile (val) {
    this._sizeMobile = val
    this.render()
  }

  get sizeMobile () {
    return this._sizeMobile
  }

  connectedCallback () {
    this.render()
  }

  generateClassnames () {
    let classnames = 'text'
    const typeDevice = getDeviceByWidth()

    switch (typeDevice) {
      case 'mobile':
        classnames += ` size-${this.sizeMobile}`
        break
      case 'desktop':
        classnames += ` size-${this.sizeDesktop}`
        break
    }
    if (this.weight) {
      classnames += ` weight-${this.weight}`
    }
    if (this.color) {
      classnames += ` color-${this.color}`
    }
    if (this.textAlign) {
      classnames += ` align-${this.textAlign}`
    }
    if (this.classnames) {
      classnames += ` ${this.classnames}`
    }

    return classnames
  }

  render () {
    const classNames = this.generateClassnames()
    this.style.height = 'max-content'
    this.style.width = 'max-content'
    this.innerHTML = `
      <span class="${classNames}">${this.text}</span>
    `
  }
}

customElements.define('text-component', TextComponent)