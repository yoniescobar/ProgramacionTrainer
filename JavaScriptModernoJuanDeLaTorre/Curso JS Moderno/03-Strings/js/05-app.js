const producto ='Monitor 20 Pulgadas';
console.log(producto);
//remplazar datos
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));

//cortar un pedazo de texto .slice cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

//alternativa a slice
console.log(producto.substring(2,1));

const usuario = "Yoni ";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));