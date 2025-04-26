class NewsCardComponent extends HTMLElement {
  static get observedAttributes() {
    return ['title','image','news','author'];
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
    if (name === 'news') {
      this.news = newValue;
      this.render();
    }
    if (name === 'author') {
      this.author = newValue;
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
      <div class="card">
        <img src="${this.image}" alt="">
        <div class="title">
          <span>${this.title}</span>
        </div>
        <div class="body">
          <div>
            <div class="play-icon"><div></div></div>
            <span class="title">Aston Villa Confirmó dóndo jugará Jhon Durán</span>
          </div>
          <div class="author">Por: Juan Carlos Garcia Sierra</div>
        </div>
      </div>
    `
  }
}

customElements.define('news-card-component', NewsCardComponent)