import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class valleElement extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
				display: block;
			};
    </style>

    <h1>Hello [[prop1]]</h1>
    `;
	}
	
	static get properties() {
		return {
			prop1: {
        type: String,
        value: '<%= elementName %>'
      }
		}
	}
};

customElements.define('<%= elementName %>', valleElement);
