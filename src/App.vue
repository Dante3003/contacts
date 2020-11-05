<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Home v-if="page === 'home'"  @changePage="changeView" />
    <p v-else> страница не существует </p> -->
  </div>
</template>

<script>
import Home from './views/Home.vue';
import SingleContact from './views/SingleContact.vue';

  export default {
    name: 'app',
    components: {
      Home,
      SingleContact
    },
    data() {
      return {
        page: 'home'
      }
    },
    methods: {
      changeView() {
        this.page = 'single'
      }
    },
  }
</script>