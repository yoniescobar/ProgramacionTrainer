
//Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 1500,
    disponible: true
}

//Object Constructor
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;

}

const Producto2 = new Producto('Monitor 24 Pulgadas',500);
console.log(Producto2);

const producto3 = new Producto('Television',100);
console.log(producto3);