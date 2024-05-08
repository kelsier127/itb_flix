<template>

    <article class="articleTal">
        <b><router-link to='/pelicula'>{{ titol }}</router-link></b><br>
        <img class="posterPelicula" :src=imgUrl >
        <p>Release Date: <b>{{ releaseYear }}</b></p><br>
        <p>{{ id }}</p>
        
    </article>

</template>


<script>

    export default{
        name: 'peliculaArticle',
        props: {
            imgUrl: String,
            titol: String,
            releaseYear: String,
            id: String
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