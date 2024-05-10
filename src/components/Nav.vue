  <template>
    <div class="hello">
      <h1>ITB FLIX</h1>

      <nav>
  
        <router-link to="/">Index</router-link> | 
        <router-link to='/pelicula'>Detalle</router-link> | 
        <router-link to='/series'>Series</router-link> | 
        <router-link to='/login'>Form</router-link>
  
      </nav>
      
    </div>
  </template>
  
  <script>
    export default {
        name: 'NavComponent'
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: black;
  }
  nav{
    margin-bottom: 3em;
  }
  </style>
  
