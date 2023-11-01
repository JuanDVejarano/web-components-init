Para la construccion de web componentes se utilizan 4 web APIs

## 1 HTMLElement

me permite crear un objeto con la estructura neccesaria para inyectar el codigo en el DOM
en la carpeta **Custom-Elements** podemos ver algunos ejemplos de como usarlo

## 2 Template

Me permite encapsuar el codigo dentro de un document-fragment

podremos ver un ejemplo en la carpeta **Templates**

## 3 Shadow Dom

Me permite encapsular los componentes para hacer un ecosistema porpio e independiente del elemento

podremos ver un ejemplo en la carpeta **shadowDom**

## Content Slot

nos ayuda a manipular datos

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

podremos ver un ejemplo en la carpeta **Slot**

## Atributos

Los atributos nos permiten mandar propiedades a los componentes.

podremos ver un ejemplo en la carpeta **Atributos**

### Atribute change CallBack

nos permite estar a la escucha de los cambios de los atributos

podremos ver un ejemplo en la carpeta **Atributos-changeCallback**

## disconnectedCallback

me permite eliminar el componente del DOM cuando se deje de usar el componente, lo cula es muy util para liberar memoria.

poderemos ver un ejemplo en la carpeta **disconnectedCallback** en este archivo esta todos los ciclos de vida del componente y se demuestra cuando salta el disconnectedCallback por medio de console.log, tambien se puede ver mas documentacion en **https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_custom_elements#usando_callbacks_de_ciclo_de_vida**
