function  getPeliculasPopulares() {
    const url= "https://api.themoviedb.org/3/movie/popular?api_key=2d6e4bc6fb1eb086b3f22937fce3e2c0&language=es-ES&page=8";

    fetch(url).then(pelis=>{
        return pelis.json();
    }).then(result=>{
        //console.log(result);
        const peliculas = result.results;
        peliculas.forEach(pelicula => {
            const {title, vote_count, vote_average, poster_path} = pelicula;   
            console.log(title); 
        });

        
       
    });
   
}

getPeliculasPopulares();