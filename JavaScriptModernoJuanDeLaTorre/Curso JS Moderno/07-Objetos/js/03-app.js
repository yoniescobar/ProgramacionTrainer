const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 1500,
    disponible: true
}

//Agregar nuevas propiedades al objeto
producto.imagen = "Imagen.jpg";
//Eliminar una propiedad
delete producto.disponible;

console.log(producto);