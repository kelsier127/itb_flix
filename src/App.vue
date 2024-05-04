<template>

<h1>ITB FLIX</h1>

<NavComponent/>

<div class="divPeliculas">

  <peliculaArticle poster="./imagen/fallGuy.jpg" titol="Fall Guy" rating="8.65"/>
  <peliculaArticle poster="./imagen/lalaland.jpg" titol="Lala Land" rating="10"/>
  <peliculaArticle poster="./imagen/drive.jpg" titol="Drive" rating="7.86"/>

  <peliculaArticle poster="./imagen/lalaland.jpg" titol="Lala Land" rating="10"/>
  <peliculaArticle poster="./imagen/drive.jpg" titol="Drive" rating="7.86"/>
  <peliculaArticle poster="./imagen/fallGuy.jpg" titol="Fall Guy" rating="8.65"/>
  

</div>

</template>

<script>
import NavComponent from './components/Nav.vue'
import peliculaArticle from './components/peliculaArticle.vue'

export default {
name: 'App',
components: {
  NavComponent,
  peliculaArticle
}
}
</script>

<style>
#detallApp {
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