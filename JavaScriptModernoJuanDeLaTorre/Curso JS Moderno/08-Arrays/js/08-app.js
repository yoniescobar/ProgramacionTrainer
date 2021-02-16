const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 1500,
    disponible: true
}
//const nombre = producto.nombre;
//console.log(nombre);
//Destructuring

const { nombre }= producto;

console.log(nombre);

//Destructuring con Arreglos
const numeros = [10,20,30,40,50];

const[primero,segundo,...tercero] = numeros;

console.log(tercero);
