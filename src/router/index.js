import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carte from '../views/Carte.vue'
import Lineup from '../views/Lineup.vue'
import Tickets from '../views/Tickets.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import News from '../views/News.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lineup',
    name: 'Lineup',
    component: Lineup
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  },
  {
    path: '/carte',
    name: 'Carte',
    component: Carte
  },
  {
    path: '/about',
    name: 'About',
    component: About 
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/news',
    name: 'News',
    component: News
  }
];

const router = new VueRouter({
  routes
});

export default router
