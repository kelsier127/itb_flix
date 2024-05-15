<template>

    <h1>HOME PAGINA</h1>
    
    <NavComponent/>

        <div class="divContainer">
            <peliculaArticle v-for="(peli,index) in peliculas"
            :key="index"
            :imgUrl="peli.poster"
            :titol="peli.title"
            :releaseYear="peli.releaseYear"
            :id="peli.id"/>
        </div>
    

    <section>
        <p>En StarFlix, podrás informarte sobre los diferentes proyectos audiovisuales de las diferentes historias en el mundo del espacio con Star Wars y Star Trek.</p>
        <p>Desde las nuevas películas, hasta las más antiguas. Con proyectos antiguos, como la trilogia original Star Wars, hasta las mas nuevas peliculas como Star Wars: The Rise of Skywalker.</p>
        <p>Déjate llevar por el mundo de La Guerra de las Galaxias y Star Trek, e infórmate sobre el proyecto que más te guste!!</p>
    </section>

    <div class="divContainer">
        <serieArticle v-for="(serie,index) in series"
        :key="index"
        :imgUrl="serie.poster"
        :titol="serie.title"
        :releaseYear="serie.releaseYear"
        :id="serie.id"
        />
    </div>

    <FooterComponent/>
        
</template>
    
<script>
    import NavComponent from './Nav.vue'
    import peliculaArticle from "./peliculaArticle"
    import serieArticle from "./serieArticle"
    import FooterComponent from "./Footer.vue"
    import axios from "axios"
    
    export default {
        name: 'HomePagina',
        components: {
            NavComponent,
            peliculaArticle,
            serieArticle,
            FooterComponent
        },
        data(){
            return {
                info:null,
                peliculas: [],
                series: []
            }
        },
        mounted(){
            axios.get("http://www.omdbapi.com/?apikey=d148e2fd&s=star+wars&type=movie")
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

            axios.get("https://www.omdbapi.com/?apikey=d148e2fd&s=star+trek&type=movie")
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
        color: black;
        margin-top: 60px;
    }

    .aux{
        overflow: hidden;
    }
    
    .divContainer{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
        justify-content: center;
        height: auto;
        width: 98%;
        margin-bottom: 2em;
        overflow-x: auto;
    }
    </style>