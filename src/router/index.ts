import { createRouter, createWebHistory } from '@ionic/vue-router';

import TabsPage from '../views/TabsPage.vue'
import HomePage from '../views/HomePage.vue'
import EventosPage from '../views/EventosPage.vue'
import EventoDetalhePage from '../views/EventoDetalhePage.vue'
import FavoritosPage from '../views/FavoritosPage.vue'
import PerfilPage from '../views/PerfilPage.vue'

const routes = [
  {
    path: '/',
    component: TabsPage,
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', component: HomePage },
      { path: 'eventos', component: EventosPage },
      { path: 'detalhe/:id', component: EventoDetalhePage },
      { path: 'favoritos', component: FavoritosPage },
      { path: 'perfil', component: PerfilPage }
    ]
  }
]

const router = createRouter({
  history: createWebHistory( ),
  routes 
})

export default router