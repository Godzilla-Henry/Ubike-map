import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import MapView from '@/views/MapView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/SearchView',
    name: 'SearchView',
    component: SearchView
  },
  {
    path: '/MapView',
    name: 'MapView',
    component: MapView
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component: AboutView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
