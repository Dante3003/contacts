import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleContact from '@/views/SingleContact.vue';
import ContactForm from '@/views/ContactForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/single/:id',
    name: 'single',
    component: SingleContact,
    props: true
  },
  {
    path: '/contactForm/:id',
    name: 'ContactForm',
    component: ContactForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
