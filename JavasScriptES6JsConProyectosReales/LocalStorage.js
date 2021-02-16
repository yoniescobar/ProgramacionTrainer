var nombre = "Yoni";
var apellidos ="Escobar Bautista";
var edad = 32;

localStorage.setItem("nombre",nombre);
localStorage.setItem("apellidos",apellidos);
localStorage.setItem("edad",edad);

console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("apellidos"));
console.log(localStorage.getItem("edad"));

localStorage.removeItem("apellidos");
localStorage.setItem("nombre","Manolo");

console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("apellidos"));
console.log(localStorage.getItem("edad"));

