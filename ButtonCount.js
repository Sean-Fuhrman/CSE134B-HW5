class ButtonCount extends HTMLElement {
    constructor () {
        super();
        let clickCount = 0;
        this.attachShadow({mode : "open"});
        this.shadowRoot.innerHTML = `<button>Times Clicked: ${clickCount}</button>`;

        this.addEventListener('click', () => {
            clickCount++;
            this.shadowRoot.innerHTML = `<button>Times Clicked: ${clickCount}</button>`;
        });
    }
}

customElements.define('button-count', ButtonCount);