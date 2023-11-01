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
            </section>
            ${this.getStyles()}
        `;

        return template;
    }

    getStyles() {
        const styles = `
            <style>
                :host {
                    --primary-color: red;
                    --secondary-color: blue;
                    --tertiary-color: yellow;
                    --cuarternary-color: purple;
                    --text1-color: white;
                    --text2-color: #20ff00;
                    display: inline-block;
                    background-color: var(--primary-color);
                    min-width: 400px;
                    margin: 10px;
                    padding: 20px;
                }
                :host *{
                    margin: 0;
                    padding: 0;
                }
                :host(.blue) {
                    background-color: var(--secondary-color);
                }
                :host([yellow]) {
                    background-color: var(--tertiary-color);
                }
                :host-context(article.card) {
                    display: block;
                    max-width: 100%;
                    background-color: var(--cuarternary-color);
                }
                ::slotted(span) {
                    font-size: 30px;
                }
                ::slotted(.texto1) {
                    color: var(--text1-color);
                }
                ::slotted(.texto2) {
                    color: var(--text2-color);
                }
            </style>
        `;
        return styles;
    }

    render() {
        // Aquí se pueden agregar los elementos HTML y la lógica de inicialización del componente
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    // Aquí se pueden definir otros métodos y propiedades del componente
}

customElements.define("my-component", MyComponent);
