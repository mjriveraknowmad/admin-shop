import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../modules/shop/layouts/ShopLayout.vue'),
    },
  ],
});

export default router;
