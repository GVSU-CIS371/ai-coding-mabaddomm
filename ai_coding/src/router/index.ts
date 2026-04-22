import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LivePricesView from '../views/HomeView.vue'
import WatchList from '../views/WatchList.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/prices', name: 'prices', component: LivePricesView },
   // { path: '/search', name: 'search', component: Search },
    { path: '/watchlist', name: 'watchlist', component: WatchList }
  ]
})

export default router