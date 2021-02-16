const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 1500,
    disponible: true
}


// const  nombre = producto.nombre;
// console.log(producto.nombre);

//Destructuring sacar de una estructura
const{ nombre,precio,disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);