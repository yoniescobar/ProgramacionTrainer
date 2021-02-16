const coche ={
    marca: "Ferrari",
    color: "Rojo",
    precio: 6000000
}

const cocheString = JSON.stringify(coche);
console.log(cocheString);
localStorage.setItem("coche",cocheString)

let cocheStorage = localStorage.getItem("coche");
cocheStorage= JSON.parse(cocheStorage);
cocheStorage.color="Negro";
console.log(cocheStorage);

//actualizar para localStorage
cocheStorage = JSON.stringify(cocheStorage);
localStorage.setItem("coche",cocheStorage);
console.log(cocheStorage);

//eliminar dato de localStorage
localStorage.removeItem("coche");