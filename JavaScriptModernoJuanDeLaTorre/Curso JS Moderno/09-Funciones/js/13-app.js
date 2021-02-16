
const reproductor = {
    cancion: '',
    reproducir: (id)=>console.log(`Reproduciendo Canción con el id ${id}`),
    pausar: ()=>console.log('Pausando'),
    borrar: (id)=> console.log(`Borrando Cancion... ${id}`),
    playlist: ()=>console.log('lista de Reproducciones...'),
    crearPlayList: (nombre)=>console.log(`Creando la playList de ${nombre}`),

    set nuevaCancion(cancion){ //Agregar valores
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get ObtenerCancion(){  //obtener devuelta los valores
        console.log(`${this.cancion}`)
    }

    }

    reproductor.nuevaCancion ='Los Broncos';
    reproductor.ObtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playlist(); 
reproductor.crearPlayList('Música Romantica'); 
reproductor.crearPlayList('Música POP'); 