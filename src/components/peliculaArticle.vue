<template>

    <article class="articleTal">
        <b><router-link :to="{ name: 'Detall', params: { id }}">{{ titol }}</router-link></b><br>
        <img class="posterPelicula" :src=imgUrl >
        <p>Release Date: <b>{{ releaseYear }}</b></p><br>
        
    </article>

</template>


<script>
    //import axios from "axios"

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
            
        }
    }
    
</script>


<style>
.articleTal{
    width: auto 30%;
    border: 1px solid black;
    background-color: rgba(245, 245, 245, 0.293);
}
.posterPelicula{
    width: 140px;
    height: 210px;
}
</style>