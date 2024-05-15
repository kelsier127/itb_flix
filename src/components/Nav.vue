  <template>
    <div class="hello">
      <h1>STAR FLIX</h1>

      <nav>
  
        <router-link to='/'>Peliculas</router-link> 
        <router-link to='/series'>Series</router-link> 
        <router-link to='/login'>Form</router-link>
  
      </nav>
      
    </div>
  </template>
  
  <script>
    export default {
        name: 'NavComponent'
    }
  </script>
  
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
    padding: 1rem 5rem;
    background-color: rgba(245, 245, 245, 0.293);
    border-radius: 10px;
    margin: auto 1rem;
  }

  a:hover{
    padding: 1.6rem 5.6rem;
    background-color: rgba(245, 245, 245, 0.573);

  }
  nav{
    margin-bottom: 3rem;
    margin-top: 3rem;

  }
  </style>
  
