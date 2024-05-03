<template>

    <article class="articleTal">
        <b><p>{{ titol }}</p></b>
        <img class="posterPelicula" :src=poster>
        <p>Rating: <b>{{ rating }}</b>/10</p><br>
        
    </article>

</template>


<script>

    export default{
        name: 'peliculaArticle',
        props: {
            poster: String,
            titol: String,
            rating: String
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