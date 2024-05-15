<template>

    <h1>SERIES PAGINA</h1>
    
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
        <p>StarFlix, está actualizado para tener información de prácticamente todas las series que tienen algo que ver con el mundo del espacio! Desde las antiguas series de Star Wars, hasta las más nuevas de Star trek.</p>
        <p>Tenemos todo tipo de información sobre las diferentes series de estas dos grandes franquicias de cine/televisión. Guardamos datos de las series más antiguas por si alguien no conoce estos proyectos!</p>
        <p>Para los verdaderos fans, una página que recopila información sobre dos de los pilares del mundo de ciencia ficción de la actualidad.</p>
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
        name: 'SeriesPagina',
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
            axios.get("http://www.omdbapi.com/?apikey=d148e2fd&s=star+wars&type=series")
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

            axios.get("https://www.omdbapi.com/?apikey=d148e2fd&s=star+trek&type=series")
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
  
</style>