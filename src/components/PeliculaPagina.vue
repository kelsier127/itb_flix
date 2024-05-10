<template>
    <div>
      <h1>PELICULA PAGINA</h1>
      <NavComponent/>
      <div class="global-container">
        <div class="container">
        <img class="poster" :src="article.poster" alt="Poster de la película">
        <div class="details">
          <h1>{{ article.title }}</h1>
          <p><span>Año de Lanzamiento:</span> {{ article.releaseYear }}</p>
          <p><span>Clasificación por Edad:</span> {{ article.ageRate }}</p>
          <p><span>Fecha de Estreno:</span> {{ article.releaseDate }}</p>
          <p><span>Duración:</span> {{ article.runTime }}</p>
          <p><span>Géneros:</span> {{ article.genres }}</p>
          <p><span>Director:</span> {{ article.director }}</p>
          <p><span>Guionistas:</span> {{ article.writers }}</p>
          <p><span>Actores:</span> {{ article.actors }}</p>
          <p><span>Trama:</span> {{ article.plot }}</p>
          <p><span>Premios:</span> {{ article.awards }}</p>
        </div>
        <div class="ratings">
          <div>
            <span>{{ article.metaRating }}</span>
            <p>Metascore</p>
          </div>
          <div>
            <span>{{ article.imdbRating }}</span>
            <p>IMDb Rating</p>
          </div>
        </div>
        <div class="box-office">
          <span>Taquilla:</span> {{ article.boxOffice }}
        </div>
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
            director: '',
            writers: '',
            actors: '',
            plot: '',
            awards: '',
            poster: '',
            metaRating: '',
            imdbRating: '',
            boxOffice: ''
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
                director: info.Director,
                writers: info.Writer,
                actors: info.Actors,
                plot: info.Plot,
                awards: info.Awards,
                poster: info.Poster,
                metaRating: info.Metascore,
                imdbRating: info.imdbRating,
                boxOffice: info.BoxOffice
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
  .container {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 800px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .poster {
    width: 200px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .details {
    text-align: center;
  }
  
  .details h1 {
    margin: 0 0 10px;
  }
  
  .details p {
    margin: 5px 0;
  }
  
  .details span {
    font-weight: bold;
  }
  
  .ratings {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
  }
  
  .ratings div {
    text-align: center;
  }
  
  .ratings span {
    font-weight: bold;
    display: block;
  }
  
  .box-office {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
  }

  .global-container{
    display: flex;
    justify-content: center;
  }
  </style>
  