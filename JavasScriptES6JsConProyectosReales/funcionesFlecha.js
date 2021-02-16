function holaMundo() {
    console.log("Hola Mundo");
}

const miNombre =(nombre, apellido)=>{
    let datoIng = `${nombre} ${apellido}`
    return datoIng;
}

let nombre = miNombre("Yoni Edilzar"," Escobar Bautista");
console.log(nombre);

const suma =(numeroUno,numeroDos)=>{
     return numeroUno+numeroDos;
}

let resOperacion = suma(78,2);
console.log(`El resulado es: ${resOperacion+10}`);