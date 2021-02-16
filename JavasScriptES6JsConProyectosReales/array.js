let numeros = [1,2,3,4,109];
// console.log(numeros);

let arrayMezclado = [99,"Iron Man",4.77,true,false];
// console.log(arrayMezclado);

let myArray =[];
// console.log(myArray);

myArray.push("Deadpool");
// console.log(myArray);

myArray.push(106,true,"Yoni Escobar");
myArray.unshift("Yoshua");  //Insertar al principio
 console.log(myArray);

// console.log(`Mi Arreglo tiene un tamaño de: ${myArray.length} elementos`);
// console.log(`El tercer elemento es: ${myArray[3]}`);

//Eliminar el ultimo elemento del Array
myArray.pop(); //elminar el ultimo elemento
// console.log(myArray); 
myArray.shift(); //eliminar el primer elemento
// console.log(myArray); 

//Encontrar un elemento en el Array
// console.log(myArray.indexOf(true));

//Encontrar el valor del index
let elemento = myArray.indexOf(true);
// console.log(myArray[elemento]);

//clonar de array

let copiaArray = myArray.slice(); //copia el array en el nuevo
copiaArray.push("Ciplope");
console.log( myArray);
console.log( copiaArray);