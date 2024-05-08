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
        
</template>
    
<script>
    import NavComponent from './Nav.vue'
    import peliculaArticle from "./peliculaArticle"
    import axios from "axios"
    
    export default {
        name: 'HomePagina',
        components: {
            NavComponent,
            peliculaArticle
        },
        data(){
            return {
                info:null,
                peliculas: []
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
                        id: `http://www.omdbapi.com/?apikey=d148e2fd&i=${peli.imdbID}`
                    }))
                    console.log(this.peliculas)
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
    }
    </style>