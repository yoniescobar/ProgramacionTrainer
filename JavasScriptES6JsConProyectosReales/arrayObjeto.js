let arrayObjetos = [{
        nombre: "Spider-Man",
        edad: 17,
        superpoderes: ["Esclar", "Tela de Araña", "Super Agilidad"],
        aramas: false,
        aramasLista: []
    },
    {
        nombre: "Hulk",
        edad: 32,
        superpoderes: ["Super Fuerza", "Cabreo Maximo", "Color verde Moco"],
        aramas: false,
        aramasLista: []
    },
    {
        nombre: "Iron Man",
        edad: 41,
        superpoderes: ["Tecnología", "Inteligencia", "Mucho Cash"],
        armas: true,
        armasLista: ["Robots","Laser","Misiles"]
    }
];

// console.log(arrayObjetos[1].edad);  //ingresar un elemento especifico
console.log(arrayObjetos);
//Agregando mas objeto
arrayObjetos.push({
         nombre: "Ciclope",
         edad: 29,
         superpoderes:["Rayos Laser","Fuerza"],
         armas: false,
         armasLista: []
});

console.log(arrayObjetos);


if(arrayObjetos[1].armas==true){   //Evalua si tiene armas en el Array de Objeto
                                    //armasLista.Length>0
    console.log(arrayObjetos[2].nombre);
    console.log(arrayObjetos[2].armasLista);
}else{
    console.log("No tiene Armas");
}



//console.log(arrayObjetos[2].nombre);