<template>

    <article class="serieArticleTal">
        <b><router-link :to="{ name: 'Detall', params: { id }}">{{ titol }}</router-link></b><br>
        <img class="posterPelicula" :src=imgUrl >
        <p>Release Date: <b>{{ releaseYear }}</b></p><br>
        
    </article>

</template>


<script>
    //import axios from "axios"

    export default{
        name: 'serieArticle',
        props: {
            imgUrl: String,
            titol: String,
            releaseYear: String,
            id: String
        },data(){
            return{
                peli:[]
            }
            
        }
    }
    
</script>


<style>
.serieArticleTal{
    padding-top: 2em;
    height: 300px;
    width: 320px;
    border: 1px solid black;
    background-color: rgba(245, 245, 245, 0.293);
    border-radius: 10px;
}
.posterPelicula{
    width: 140px;
    height: 210px;
}
</style>