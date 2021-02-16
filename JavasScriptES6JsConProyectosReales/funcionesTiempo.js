console.log("Carga completa");

// setTimeout(()=>{
//     console.log("Suscribete Aqui");
// },2000)

const miFuncion =(edad)=>{
   console.log("Estamos calculando tu Edad"); 

   setTimeout(()=>{
    miEdad(edad)
   },1000);
}

const miEdad = edad => {
    console.log("Tu Edad es de"+edad);
}

miFuncion(32);