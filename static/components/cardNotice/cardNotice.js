class CardNoticeComponent extends HTMLElement {
  static get observedAttributes() {
    return [
      'orientation',
      'distribution',
      'category',
      'news',
      'author',
      'subtitle',
      'image',
      'video',
      'classnames'
    ];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'orientation') {
      this.orientation = newValue;
      this.render();
    }
    if (name === 'distribution') {
      this.distribution = newValue;
      this.render();
    }
    if (name === 'category') {
      this.category = newValue;
      this.render();
    }
    if (name === 'news') {
      this.news = newValue;
      this.render();
    }
    if (name === 'author') {
      this.author = newValue;
      this.render();
    }
    if (name === 'subtitle') {
      this.subtitle = newValue;
      this.render();
    }
    if (name === 'image') {
      this.image = newValue;
      this.render();
    }
    if (name === 'classnames') {
      this.classnames = newValue;
      this.render();
    }
    if (name === 'video') {
      this.video = newValue;
      this.render();
    }
  }

  set orientation (val) {
    this._orientation = val
    this.render()
  }
  get orientation () {
    return this._orientation
  }

  set distribution (val) {
    this._distribution = val
    this.render()
  }
  get distribution () {
    return this._distribution
  }

  set classnames (val) {
    this._classnames = val
    this.render()
  }
  get classnames () {
    return this._classnames
  }

  set news(val) {
    this._news = val;
    this.render();
  }
  get news() {
    return this._news
  }

  set category(val) {
    this._category = val;
    this.render();
  }
  get category() {
    return this._category
  }

  set author(val) {
    this._author = val;
    this.render();
  }
  get author() {
    return this._author
  }

  set subtitle(val) {
    this._subtitle = val;
    this.render();
  }
  get subtitle() {
    return this._subtitle
  }

  set image(val) {
    this._image = val;
    this.render();
  }
  get image() {
    return this._image
  }

  set video(val) {
    this._video = val;
    this.render();
  }
  get video() {
    return this._video
  }

  connectedCallback () {
    this.render()
  }

  generateClassnames () {
    let classnames = ''
    if (this.orientation) {
      classnames += ` orientation-${this.orientation}`
    }
    if (this.distribution) {
      classnames += ` distribution-${this.distribution}`
    }
    if (this.classnames) {
      classnames += ` ${this.classnames}`
    }
    if (!this.image && !this.video) {
      classnames += ' none-image'
    }
    return classnames
  }

  render () {
    const classNames = this.generateClassnames()
    this.innerHTML = `
      <div class="card-news ${classNames}">
        ${this.image ? `<img src="${this.image}" alt="news"></img>` : ''}
        ${this.video ? `<iframe width="100" height="100" src="${this.video}" allowfullscreen></iframe>` : ''}
        <div class="news-content">
          ${this.category ? `<span class="category">${this.category}</span>` : ''}
          <span class="title">${this.news}</span>
          <span class="read-more">Leer más</span>
          <span class="author">${this.author}</span>
          ${this.subtitle ? `<span class="subtitle">${this.subtitle}</span>` : ''}
        </div>
      </div>
    `
  }
}

customElements.define('card-notice-component', CardNoticeComponent)