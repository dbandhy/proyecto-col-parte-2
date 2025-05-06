class NewsCardComponent extends HTMLElement {
  static get observedAttributes() {
    return ['category','image','title','author','orientation','variants'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.title = newValue;
      this.render();
    }
    if (name === 'image') {
      this.image = newValue;
      this.render();
    }
    if (name === 'category') {
      this.category = newValue;
      this.render();
    }
    if (name === 'author') {
      this.author = newValue;
      this.render();
    }
    if (name === 'orientation') {
      this.orientation = newValue;
      this.render();
    }
    if (name === 'variants') {
      this.variants = newValue;
      this.render();
    }
  }

  set title(val) {
    this._title = val;
    this.render();
  }
  get title() {
    return this._title
  }

  connectedCallback() {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="news-card-main">
        <img src="${this.image}" alt="">
        <div class="content">
          <div class="category">
            <span>${this.category}</span>
          </div>
          <div class="body">
            <div class="title">
              <div class="news-play-icon"><div></div></div>
              <span>${this.title}</span>
              <a href="#">Leer más</a>
            </div>
            <div class="author">
              <span>Por:</span>
              <span>Juan Carlos Garcia Sierra</span>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('news-card-component', NewsCardComponent)