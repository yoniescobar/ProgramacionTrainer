//Funcion simple
function saludo() {
    console.log ("Hola Mundo!");
}


//funcion con parametros
function holaPersona(nombre="",apellidos="") {
    console.log(`Hola ${nombre}  ${apellidos}`);
}

// holaPersona("Yoni Edilzar","Escobar Bautista");
//funcion de calculo
function sumaDosNumeros(numUno,numDos) {
    let total = numUno/numDos;
    console.log(`La suma de ${numUno} mas ${numDos} es de ${total}`);
}

function numTabla(num) {
    for (let i = 1; i <=10; i++) {
         console.log(`${i} x ${num} = ${i*num}`);
    }
}

//funcion para calcular la edad pansandole el año de nacimiento
function miEdad(anioNacimiento) {
    let date = new Date();
    let anioActual = date.getFullYear(); 
    let edad = anioActual-anioNacimiento;
    console.log(`Tienes ${edad} años`);
}

//funcios con retorno
function menosUno(numero) {
   return numero-1;
}
let result = menosUno(10);
//console.log(result);

function miEdad(anioNacimiento) {
    let date = new Date();
    let anioActual = date.getFullYear(); 
    let edad = anioActual-anioNacimiento;
    return edad;
}

// let edad = miEdad(1988);
// console.log(`Tienes ${edad} años`);

//funcion con Objeto

function miFunctionObjeto(objeto) {
    let date = new Date();
    let anioActual = date.getFullYear();
    objeto.anioActual = anioActual;
    return objeto;
}

let miObjeto = {
    nombre: 'Yoni Edilzar',
    apellidos: 'Escobar Bautista'
}
let coche = {
    marca: "BMW",
    precio: 1000000,
    caballos: 390
}

let objetoResultado = miFunctionObjeto(coche);
console.log(objetoResultado);
