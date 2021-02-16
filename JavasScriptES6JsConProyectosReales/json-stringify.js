const auto ={
    marca: "Ferrari",
    color: "Rojo",
    precio: 78000
}

console.log(auto);
//covertir objeto de Js a formato JSON
const autoJson = JSON.stringify(auto);

console.log(autoJson);

const jsonRecibido = '{"marca":"Ferrari","color":"Rojo","precio":78000}';
//convertir de formato Json a objeto
const jsonRecibidoObjeto = JSON.parse(jsonRecibido);
console.log(jsonRecibidoObjeto.marca);