function Animal(tipo,nombre,edad) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.edad = edad;
}

var pequis = new Animal("Perro","Rocky",3);
var memo = new Animal("Pez","Memo",5);
pequis.color = "Blanco";

console.log(pequis);
console.log(memo)
