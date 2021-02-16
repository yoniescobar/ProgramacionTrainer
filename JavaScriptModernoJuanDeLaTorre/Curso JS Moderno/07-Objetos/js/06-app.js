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

const {nombre,informacion,informacion:{fabriccacion: {pais}}} = producto;

console.log(nombre);
console.log(informacion);
console.log(pais);
