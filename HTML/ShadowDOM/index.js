//Let's create a shadow dom first
let header = document.createElement('header');
let shadowRoot = header.attachShadow({mode: 'open'});

shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>';
document.body.appendChild(header);

//Now define your own element
customElements.define('chen', class extends HTMLElement {
	constructor() {
		super();

		//Attach a shadow root to `chen` tag
		let chen-shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = `
			<style>#tabs { ... }</style>
			<div id="tabs">
				<slot id="tabsSlot" name="title"></slot>
			</div>
			<div id="panels">
				<slot id="panelsSlot"></slot>
			</div>
		`
	}
})