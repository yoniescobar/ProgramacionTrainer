var nombre = null;

function actualizarNombre() {
    console.log('Actualizacion Empezada...');
    return new Promise((resolve)=>{
        setTimeout(() => {
           console.log('Actualizacion completa.');
           resolve ("Yoni Escobar"); 
        }, 2000);
    })
    
}

async function saludar() {
    nombre = await actualizarNombre();
    console.log('Actualizacion  finalizada..');
    console.log(`Hola me llamo ${nombre}`);
}

saludar();