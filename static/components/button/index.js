class ButtonComponent extends HTMLElement {
    static get observedAttributes () {
      return ['size','text','color','rounded']
    }
  }