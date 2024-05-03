<template>
  <img alt="Vue logo" src="./assets/delorean.jpeg">
  <Nav/>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1b71c6;
  margin-top: 60px;
}
img{
  width: 150px;
  height: 150px;
}
</style>./components/Nav.vue
