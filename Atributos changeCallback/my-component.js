class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    // Atributos (getters y setters)
    static get observedAttributes() {
        return ["title", "parrafo", "img"];
    }

    // observar los cambios de los atributos
    atrributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "title") {
            this.title = newVal;
        }
        if (attr === "parrafo") {
            this.parrafo = newVal;
        }
        if (attr === "img") {
            this.img = newVal;
        }
    }

    // template (html)
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h2>${this.title}</h2>
            <div>
                <p>${this.parrafo}</p>
                <img src="${this.img}" alt="" />
            </div>
        </section>
        ${this.getStyle()}
    `;
        return template;
    }

    // styles
    getStyle() {
        return `
      <style>
        h2{
            color: red;
        }
      </style>
    `;
    }

    // render
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    // connected callback (se ejecuta cuando el elemento es renderizado)
    connectedCallback() {
        this.render();
    }
}

customElements.define("my-element", myElement);
