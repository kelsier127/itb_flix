<template>

    <h1>HOME PAGINA</h1>
    
    <NavComponent/>

    <div class="divPeliculas">
        <peliculaArticle v-for="(peli,index) in peliculas"
        :key="index"
        :imgUrl="peli.poster"
        :titol="peli.title"
        :releaseYear="peli.releaseYear"
        :id="peli.id"
        />
    </div>

    <div class="divPeliculas">
        <serieArticle v-for="(serie,index) in series"
        :key="index"
        :imgUrl="serie.poster"
        :titol="serie.title"
        :releaseYear="serie.releaseYear"
        :id="serie.id"
        />
    </div>
        
</template>
    
<script>
    import NavComponent from './Nav.vue'
    import peliculaArticle from "./peliculaArticle"
    import serieArticle from "./serieArticle"
    import axios from "axios"
    
    export default {
        name: 'HomePagina',
        components: {
            NavComponent,
            peliculaArticle,
            serieArticle
        },
        data(){
            return {
                info:null,
                peliculas: [],
                series: []
            }
        },
        mounted(){
            axios.get("http://www.omdbapi.com/?apikey=d148e2fd&s=star+wars")
            .then(response=>{
                this.info=response.data;
                if(this.info&&this.info.Search){
                    this.peliculas= this.info.Search.map(peli=>({
                        title: peli.Title,
                        releaseYear: peli.Year,
                        type: peli.Type,
                        poster: peli.Poster,
                        id: peli.imdbID
                    }))
                    console.log(this.peliculas)
                }
            })

            axios.get("https://www.omdbapi.com/?apikey=d148e2fd&s=star+wars&type=series")
            .then(response=>{
                this.info=response.data;
                if(this.info&&this.info.Search){
                    this.series= this.info.Search.map(serie=>({
                        title: serie.Title,
                        releaseYear: serie.Year,
                        type: serie.Type,
                        poster: serie.Poster,
                        id: serie.imdbID
                    }))
                    console.log(this.series)
                }
            })
        }
    }

        

</script>
    
<style>
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #1b71c6;
    margin-top: 60px;
    }
    
    .divPeliculas{
      border: 1px solid black;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: auto;
      margin-bottom: 2em;
    }
    </style>