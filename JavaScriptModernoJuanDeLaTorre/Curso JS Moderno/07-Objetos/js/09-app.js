"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 1500,
    disponible: true
}

//seal no permite agregar ni eleminar propiedades pero si puede modificarse
Object.seal(producto);

 producto.disponible=false;
// producto.imagen = "imagen.jpg"

console.log(producto);
console.log(Object.isSealed(producto));
