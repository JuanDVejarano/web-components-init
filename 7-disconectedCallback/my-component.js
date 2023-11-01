class MyComponent extends HTMLElement {
    // primer ciclo de vida
    constructor() {
        super();
        console.log("Hola desde el constructor (primer ciclo de vida)");
    }

    connectedCallback() {
        console.log("Hola desde el DOM (segundo ciclo de vida)");
    }

    disconnectedCallback() {
        console.log("Adios desde el DOM (tercer ciclo de vida)");
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        console.log("Hola desde los atributos (cuarto ciclo de vida)");
    }

    adoptedCallback() {
        console.log(
            "cambio del componette a otro archivo DOM (quinto ciclo de vida)"
        );
    }

    // Aquí definimos los getters y setters para las propiedades reactivas
}

customElements.define("my-component", MyComponent);

document.querySelector("my-component").remove();
