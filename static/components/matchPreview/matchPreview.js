class MatchPreviewComponent extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.title = newValue;
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
      <div class="match-preview">
        <div class="header">Serie A de Italia</div>
          <div class="body">
            <div class="dateContent">
            <span>Mar 06, Dic - 2024</span>
            <span>6:30AM</span>
          </div>
          <div class="teams-scores">
            <div class="team-score">
              <img src="https://crests.football-data.org/65.svg" alt="futbol-team">
              <span>ANG</span>
              <span>1</span>
            </div>
            <div class="team-score">
              <img src="https://crests.football-data.org/65.svg" alt="futbol-team">
              <span>ANG</span>
              <span>1</span>
            </div>
          </div>
          <div class="percentage">
            <span>15' +</span>
            <button class="button color-success size-medium rounded-small">En Vivo</button>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('match-preview-component', MatchPreviewComponent)