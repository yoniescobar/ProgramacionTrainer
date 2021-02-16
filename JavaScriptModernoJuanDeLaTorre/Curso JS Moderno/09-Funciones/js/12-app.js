const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio:  500},
    { nombre: 'Televisor 32 pulg', precio:  1000},
    { nombre: 'Audifonos', precio:  300},
    { nombre: 'Teclado', precio:  400},
    { nombre: 'Celular', precio:  700}

]


const nuevoArreglo = carrito.map((producto)=> `${producto.nombre}-Precio: ${producto.precio}`);

 carrito.forEach((producto)=>console.log( `${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArreglo);
