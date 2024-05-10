import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"

import HomePagina from "./components/HomePagina.vue"
import LoginPagina from "./components/LoginPagina.vue"
import PeliculaPagina from "./components/PeliculaPagina.vue"
import SeriesPagina from "./components/SeriesPagina.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: HomePagina },
      { path: '/pelicula/:id', name:'Detall', component: PeliculaPagina, props:true },
      { path: '/series', component: SeriesPagina },
      { path: '/login', component: LoginPagina},
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')


