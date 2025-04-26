import { getDeviceByWidth } from '../../responsive'

class TextComponent extends HTMLElement {
  static get observedAttributes() {
    return ['size-mobile', 'size-desktop', 'text','weight','color', 'align'];
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
      this.align = newValue;
      this.render();
    }
    if (name === 'align') {
      this.align = newValue;
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

  set align (val) {
    this._align = val
    this.render()
  }
  get align () {
    return this._align
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
    let classnames = ''
    const typeDevice = getDeviceByWidth()

    console.log('typeDevice', typeDevice)

    if (this.sizeMobile) {
      
      switch (this.sizeMobile) {
      
      }
      classnames += ` size-mobile-${this.sizeMobile}`
    }
    if (this.weight) {
      classnames += ` weight-${this.weight}`
    }
    if (this.color) {
      classnames += ` color-${this.color}`
    }
    if (this.align) {
      classnames += ` align-${this.align}`
    }
    return classnames
  }

  render () {
    const classNames = this.generateClassnames()

    this.innerHTML = `
      <span class=${classNames}>${this.text}</span>
    `
  }
}

customElements.define('text-component', TextComponent)