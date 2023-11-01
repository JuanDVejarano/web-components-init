class multiSlot extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h2><slot name="title"></slot></h2>
            <div>
                <slot name="texto"></slot>
            </div>
        </section>
        ${this.getStyle()}
    `;
        return template;
    }

    getStyle() {
        return `
      <style>
        h2{
            color: red;
        }
      </style>
    `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define("my-element-multislot", multiSlot);
