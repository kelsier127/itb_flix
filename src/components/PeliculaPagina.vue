<template>
  
    <h1>PELICULA PAGINA</h1>
    <NavComponent/>

    <div class="global-conatiner">
      <h1>{{ article.title }}</h1>
      <div class="img-info-container">
        <img class="poster" :src="article.poster" alt="Poster de la película">
        <div class="div-article">
          
          <p><span>Año de Lanzamiento: </span>{{ article.releaseYear }}</p>
          <p><span>Clasificación por Edad: </span>{{ article.ageRate }}</p>
          <p><span>Fecha de Estreno: </span> {{ article.releaseDate }}</p>
          <p><span>Duración: </span> {{ article.runTime }}</p>
          <p><span>Géneros: </span> {{ article.genres }}</p>
          <p><span>Actores: </span> {{ article.actors }}</p>
          <p><span>Trama: </span> {{ article.plot }}</p>
          <p><span>Premios: </span> {{ article.awards }}</p>
        </div>
      </div>
    </div>


</template>

<script>
  import NavComponent from './Nav.vue'
  import axios from 'axios'

  export default {
    name: 'PeliculaPagina',
    components: {
      NavComponent
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        article: {
          title: '',
          releaseYear: '',
          ageRate: '',
          releaseDate: '',
          runTime: '',
          genres: '',
          actors: '',
          plot: '',
          awards: '',
          poster: '',
          imdbRating: ''
        }
      }
    },
    methods: {
      loadMovieData() {
        axios.get(`http://www.omdbapi.com/?apikey=d148e2fd&i=${this.id}`)
          .then(response => {
            const info = response.data;
            this.article = {
              title: info.Title,
              releaseYear: info.Year,
              ageRate: info.Rated,
              releaseDate: info.Released,
              runTime: info.Runtime,
              genres: info.Genre,
              actors: info.Actors,
              plot: info.Plot,
              awards: info.Awards,
              poster: info.Poster,
              imdbRating: info.imdbRating
            };
          })
          .catch(error => {
            console.error('Error fetching movie data:', error);
          });
      }
    },
    mounted() {
      this.loadMovieData();
    }
  }
</script>

<style>
.global-conatiner{
  display: flex ;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.268);
  border-radius: 10px;
  margin: auto 10%;
  box-shadow: 0 0 5px 5px rgba(53, 53, 53, 0.442);
}

.div-article{
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
}

.poster{
  box-shadow: 0 0 5px 5px rgba(53, 53, 53, 0.442);
  margin: 3%;
  border-radius: 10px;
}

.img-info-container{
  display: flex;
  justify-content: center;
}
span{
  font-weight: 600;
}
</style>