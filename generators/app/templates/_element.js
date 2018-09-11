import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class valleElement extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
				color: var(--<%= elementName %>-color, #000);
			}
    </style>

    <h1>Hello [[prop1]]</h1>
    `;
	}
	
	static get properties() {
		return {
			prop1: {
        type: String,
        value: 'World'
      }
		}
	}
};

customElements.define('<%= elementName %>', valleElement);
