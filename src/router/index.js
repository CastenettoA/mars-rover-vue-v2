import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ApiDocs from '../views/ApiDocs.vue'
import ApiEndpointList from '../views/ApiEndpointList.vue'
import Map from '../views/Map.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/apiEndpointList',
    name: 'apiendpointlist',
    component: ApiEndpointList
  },
  {
    path: '/map',
    name: 'map',
    component: Map
  },
  {
    path: '/apiDocs/:path',
    name: 'apidocs',
    component: ApiDocs
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
