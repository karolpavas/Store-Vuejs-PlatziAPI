import { createApp } from 'vue';
import App from '@/App.vue';
import HomePage from '@/components/HomePage.vue';
import Clothes from '@/components/SingleCategories/CategoryClothes.vue';
import Electronics from '@/components/SingleCategories/CategoryElectronics.vue';
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/components/NoFoundPage.vue';
import Furniture from '@/components/SingleCategories/CategoryFurniture.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/categories/ropa/:id', component: Clothes, name: 'Clothes' }, // Añade el nombre 'Clothes'
  { path: '/categories/electronica/:id', component: Electronics, name: 'Electronics' }, // Añade el nombre 'Electronics'
  { path: '/categories/muebles/:id', component: Furniture, name: 'Furniture' }, // Añade el nombre 'Electronics'
  { path: '/:catchAll(.*)', component: NotFound }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');