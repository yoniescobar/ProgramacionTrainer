const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 1500,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1k',
            medida: '1m'
        },
        fabriccacion: {
             pais: 'China' 
        }
    }
}


console.log(producto);
console.log(producto.informacion.fabriccacion.pais);