import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/QuotesComponent.vue'; 
import AllQuotes from '@/components/AllQuotes.vue'; 
import NotFound from '@/components/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/all-quotes', component: AllQuotes },
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
