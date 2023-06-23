import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PedidosView from '../views/PedidosView.vue'; // Importe o componente PedidosView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pedidos', // Defina o novo caminho para a visualização de pedidos
      name: 'pedidos',
      component: PedidosView // Associe o componente PedidosView à rota '/pedidos'
    }
  ]
});

export default router;
