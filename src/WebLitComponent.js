import { LitElement, html, css } from 'lit';

export class WebLitComponent extends LitElement {
  static get properties() {
    return {
      text: { type: String }
    }
  }

  static get styles() {
    return [
      css`
      :host {
        display: block;
      }
      `
    ]
  }

  render() {
    return html`
    ${this.text}
    `;
  }

  firstUpdated() {
    this.text = "Hello World.";
  }
}
