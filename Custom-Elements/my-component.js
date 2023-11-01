const template = document.createElement("div");
template.innerHTML = `
    <style>
        .texto {
            color: red;
        }
    </style>
    <p class="texto">Hola mundo 2</p>
`;

class myElement extends HTMLElement {
    constructor() {
        super();
        console.log("primer ciclo, ciclo de inicio");
        this.p = document.createElement("p");
    }
    connectedCallback() {
        this.p.textContent = "Hola Mundo";
        this.appendChild(this.p);
        this.appendChild(template);
    }
}

customElements.define("my-element", myElement);
