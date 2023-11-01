# Web Components

En este proyecto vamos a ver como crear componentes web con vanilla javascript y sin ningun framework o libreria. en el proyecto encontreremos varios ejemplos de como crear componentes web y como usarlos.

Para ello vamos a utilizar las web APIs que nos proporciona el navegador. Estas web APIs son las siguientes:

## 1 HTMLElement

me permite crear un objeto con la estructura neccesaria para inyectar el codigo en el DOM
en la carpeta **1-Custom-Elements** podemos ver algunos ejemplos de como usarlo.

## 2 Template

Me permite encapsuar el codigo dentro de un document-fragment.

podremos ver un ejemplo en la carpeta **2-Templates**

## 3 Shadow Dom

Me permite encapsular los componentes para hacer un ecosistema porpio e independiente del elemento.

podremos ver un ejemplo en la carpeta **3-shadowDom**.

# Aqui miraremos algunos conceptos y ejemplos de la construccion de componentes web

## Content Slot

nos ayuda a manipular datos.

la etiqueta slot va dentro del componente y el contenido que se quiera manipular va dentro de la etiqueta del componete

```html
<my-element-aslot>
    Este texto saldra en la etiqueta slot, texto puesto fuera del componente
</my-element-aslot>
```

tambien puede tener nombres los slots

```html
<my-element-multislot>
    <span slot="title">
        Este texto saldra en la etiqueta slot1(title), texto puesto fuera del
        componente
    </span>
    <span slot="texto">
        Este texto saldra en la etiqueta slot2(texto), texto puesto fuera del
        componente
    </span>
</my-element-multislot>
```

podremos ver un ejemplo en la carpeta **4-slot**.

## Atributos

Los atributos nos permiten mandar propiedades a los componentes.

podremos ver un ejemplo en la carpeta **5-Atributos**.

### Atribute change CallBack

nos permite estar a la escucha de los cambios de los atributos.

podremos ver un ejemplo en la carpeta **6-Atributos-changeCallback**.

## disconnectedCallback

me permite eliminar el componente del DOM cuando se deje de usar el componente, lo cula es muy util para liberar memoria.

poderemos ver un ejemplo en la carpeta **7-disconnectedCallback** en este archivo esta todos los ciclos de vida del componente y se demuestra cuando salta el disconnectedCallback por medio de console.log, tambien se puede ver mas documentacion en **https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_custom_elements#usando_callbacks_de_ciclo_de_vida**.

## estilos del componente y seudo selectores y seudoclases

### :host

Este selector nos permite acceder a los estilos del componente padre, aqui tambien podemos crear variables de css para usarlas en el componente.

### ::slotted

Este selector nos permite acceder a los estilos del componente hijo o a los slots.

podremos ver un ejemplo de :host y ::slotted en la carpeta **8-style-host-slotted**
