const autenticado = true;

if(autenticado){
    console.log('El usuario esta autenticado...');
}

const puntaje = 850;

const revisarPuntaje=()=> {
    if(puntaje > 400){
        console.log('Excelente');
        return;
    }
    if(puntaje > 300){
        console.log('Buen Puntaje .... Felicidades ');
        return;
    }
}

revisarPuntaje();