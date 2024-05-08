<template>

    <article class="articleTal">
        <b><router-link to='/pelicula'>{{ titol }}</router-link></b><br>
        <img class="posterPelicula" :src=imgUrl >
        <p>Release Date: <b>{{ releaseYear }}</b></p><br>
        
    </article>

</template>


<script>
    import axios from "axios"

    export default{
        name: 'peliculaArticle',
        props: {
            imgUrl: String,
            titol: String,
            releaseYear: String,
            id: String
        },data(){
            return{
                peli:[]
            }
            
        },mounted(){
            axios.get(`http://www.omdbapi.com/?apikey=d148e2fd&i=${this.id}`)
            .then(response=>{
                this.info=response.data;
                if(this.info&&this.info.Search){
                    this.peli = this.info.Search.map(pelicula=>({
                        title: pelicula.Title,
                        releaseYear: pelicula.Year,
                        ageRate: pelicula.Rated,
                        releaseDate: pelicula.Released,
                        runTime: pelicula.Runtime,
                        genres: pelicula.Genre,
                        director: pelicula.Director,
                        writers: pelicula.Writer,
                        actors: pelicula.Actors,
                        plot: pelicula.Plot,
                        awards:pelicula.Awards,
                        poster:pelicula.Poster,
                        metaRating:pelicula.Metascore,
                        imdbRating: pelicula.imdbRating,
                        boxOffice:pelicula.BoxOffice

                        
                    }))
                }
                
            })
            console.log(this.peli)
        }
    }
    
</script>


<style>
.articleTal{
    width: 33%;
    border: 1px solid black;
}
.posterPelicula{
    width: 140px;
    height: 210px;
}
</style>