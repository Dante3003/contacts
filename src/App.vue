<template>
    <div id="app" class="bg-light container-fluid">
      <router-view></router-view>
    </div>
</template>

<script>
import Home from './views/Home.vue';

  export default {
    name: 'app',
    components: {
      Home,
    },
  }
</script>