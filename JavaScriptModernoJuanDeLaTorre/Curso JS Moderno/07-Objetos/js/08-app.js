"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 1500,
    disponible: true
}

//freeze para congelar elementos
Object.freeze(producto);

// producto.disponible=false;
// producto.imagen = "imagen.jpg"

console.log(producto);

console.log(Object.isFrozen(producto));