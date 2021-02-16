let arrayObjetos = [{
        nombre: "Spider-Man",
        edad: 17,
        superpoderes: ["Esclar", "Tela de Araña", "Super Agilidad"],
        armas: false,
        armasLista: []
    },
    {
        nombre: "Hulk",
        edad: 32,
        superpoderes: ["Super Fuerza", "Cabreo Maximo", "Color verde Moco"],
        armas: false,
        armasLista: []
    },
    {
        nombre: "Iron Man",
        edad: 41,
        superpoderes: ["Tecnología", "Inteligencia", "Mucho Cash"],
        armas: true,
        armasLista: ["Robots", "Laser", "Misiles"]
    }

];

let nombreHeroe = arrayObjetos[0].nombre;
let armas = arrayObjetos[0].armas;
let edad = arrayObjetos[0].edad;

if (armas === true && edad > 10) { // && complen las 2 opciones       || cumple por si almenos una es Verdadero
    console.log(nombreHeroe + " Si  que tiene armas.");
} else if(!armas) {
    console.log(nombreHeroe + " No  que tiene armas.");
}else{
    console.log("Heroe Desconocido...");
}

console.log( arrayObjetos[1].armas? "Si que tiene Armas ": "No tiene Armas");

