// const productos = [
//  {id: "1", nombre: "Camisa", categoria: "ropa"},
//  {id: "2", nombre: "Tenis Deportivo", categoria: "accesorios"},
//  {id: "3", nombre: "Calzado Casual", categoria: "calzado"},
//  {id: "4", nombre: "Corbata", categoria: "ropa"},
//  {id: "5", nombre: "Corbata", categoria: "ropa"}
// ]

// //si unar map debo extrar nombre de producto
// let nombreDeProductos=[];

// for (let i = 0; i < productos.length; i++) {
//     nombreDeProductos.push(productos[i].nombre);
    
// }
// // console.log(nombreDeProductos);
// /* map() recibe como parametro una funcion la cual recibe 3 parametros
//     el elemento actual,indice del elemento atual y el arreglo original
//  */

// let nombreDeCategorias = productos.map((producto)=>{
//     //como solo queremos los nommbres de categoria retornamos categoria
//     return producto.id;
// });
// console.log(nombreDeCategorias);

const nav = ['Home','About','Location','Contact']
const navConFormato = nav.map((item)=>`<li>${item}</li>`)
console.log(navConFormato);