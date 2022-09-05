import { LitElement, html, css } from 'lit';
import '../web-lit-component';

class DemoExample extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
        padding: 10px;
      }
    `;
  }

  render() {
    return html`
      <web-lit-component></web-lit-component>
    `;
  }

  get wlc() {
    return this.shadowRoot.querySelector("web-lit-component")
  }

  /**
  * Lifecycle called after DOM updated on the first time
  * Pulling the app config and waiting for the sts state
  */
  firstUpdated() {
    console.log('firstUpdated');
    super.firstUpdated();

    console.log(this.wlc);
  }
}
customElements.define('demo-example', DemoExample);
