
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo Canción con el id ${id}`);
    },
    pausar: function(){
        console.log('Pausando')
    },
    borrar: function(id){
        console.log(`Borrando Cancion... ${id}`)
    },
    playlist: function(){
        console.log('lista de Reproducciones...')
    },
    crearPlayList: function(nombre){
        console.log(`Creando la playList de ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playlist(); 
reproductor.crearPlayList('Música Romantica'); 
reproductor.crearPlayList('Música POP'); 