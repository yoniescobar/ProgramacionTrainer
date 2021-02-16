
iniciarApp();

function iniciarApp(){
    console.log('Iniciando ap...');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la senguda función');
    usuarioAutenticado('Yoni Escobar');
}

function usuarioAutenticado( usuario){
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}