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

  arrayObjetos.forEach(heroe => {
      console.log(heroe.nombre);
      if(heroe.armas){
        console.log('Tiene Armas');
        heroe.armasLista.forEach(arma=>{
            console.log(arma+"\n--------------------");
        })
      }else{
          console.log('No tiene Armas');
      }
      console.log("###############################");
      
  });