"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 1500,
    disponible: true
}

const medidas ={
    peso: '1kg',
    medida: '1m'
}

console.log(producto)
console.log(medidas)

//unir dos objetos
const resultado = Object.assign(producto,medidas);
console.log(resultado);

//unir dos objetos Operator o Rest Operator
const resultado2 = {...producto,...medidas}

console.log(resultado2);