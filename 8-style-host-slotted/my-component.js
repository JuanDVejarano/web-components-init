class MyComponent extends HTMLElement {
    constructor() {
        // Aquí se pueden inicializar las propiedades y el estado del componente
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        // Aquí se pueden agregar los elementos HTML y la lógica de inicialización del componente
        this.render();
    }

    disconnectedCallback() {
        // Aquí se pueden realizar tareas de limpieza y eliminación de elementos HTML
        console.log("El componente ha sido eliminado del DOM");
    }

    static get observedAttributes() {
        // Aquí se pueden definir los atributos que se quieren observar y reaccionar a cambios en ellos
        return ["titulo", "parrafo"];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        // Aquí se puede definir la lógica que se quiere ejecutar cuando un atributo observado cambia
        if (attr === "titulo") {
            this.titulo = newValue;
        }
        if (attr === "parrafo") {
            this.parrafo = newValue;
        }
    }

    getTemplate() {
        const template = document.createElement("template");

        template.innerHTML = `
            <section>
                <h2>${this.titulo}</h2>
                <p>${this.parrafo}</p>
                <slot name="texto1"></slot>
                <slot name="texto2"></slot>
            </section>`;

        return template;
    }

    async loadStyles() {
        const res = await fetch("./my-component.css");
        const css = await res.text();
        const style = document.createElement("style");
        style.textContent = css;
        this.shadowRoot.appendChild(style);
    }

    render() {
        // Aquí se pueden agregar los elementos HTML y la lógica de inicialización del componente
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        this.loadStyles();
    }

    // Aquí se pueden definir otros métodos y propiedades del componente
}

customElements.define("my-component", MyComponent);
