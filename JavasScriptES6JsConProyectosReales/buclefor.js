let arrayObjetos = [
  {
    nombre: "Spider-Man",
    edad: 17,
    superpoderes: ["Esclar", "Tela de Araña", "Super Agilidad"],
    armas: false,
    armasLista: [],
  },
  {
    nombre: "Hulk",
    edad: 32,
    superpoderes: ["Super Fuerza", "Cabreo Maximo", "Color verde Moco"],
    armas: false,
    armasLista: [],
  },
  {
    nombre: "Iron Man",
    edad: 41,
    superpoderes: ["Tecnología", "Inteligencia", "Mucho Cash"],
    armas: true,
    armasLista: ["Robots", "Laser", "Misiles","Bombas"],
  },
];

for (let x = 0; x < arrayObjetos.length; x++) {
    console.log(arrayObjetos[x].nombre);
  if (arrayObjetos[x].armas) {
    console.log('Tiene Armas');
        for (let y = 0; y < arrayObjetos[x].armasLista.length; y++) {
              console.log(arrayObjetos[x].armasLista[y]);
            
        }
  }else{
    console.log('No Tiene Armas');
  }
}
