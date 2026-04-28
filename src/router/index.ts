import { createRouter, createWebHistory } from '@ionic/vue-router'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Cadastro from '../views/Cadastro.vue'
import Recuperar from '../views/RecuperarSenha.vue'
import Detalhes from '../views/DetalhesLivro.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
  { path: '/cadastro', component: Cadastro },
  { path: '/recuperar', component: Recuperar },
  { path: '/detalhes/:id', component: Detalhes }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router