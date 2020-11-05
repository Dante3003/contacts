<template>
  <div class="home">
    <div class="d-flex justify-content-between align-items-center px-3">
     <h1> Контакты </h1>
     <button class="btn btn-outline-primary" @click="contactAddHandler">Добавить</button>
    </div>
     <input type="search" name="" id="input" v-model="search" class="form-control" value="" title="" placeholder="Поиск контакта">
    <hr />
    <ul class="list-group">
      <li v-for="contact in searchContact" :key="contact.id" @click="$router.push({name: 'single', params: {id: contact.id}})" v-bind:test="'work'" class="list-group-item d-flex justify-content-between align-items-center">
        <div>{{contact.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters(['getContacts']),
    contacts() {
      return this.getContacts;
    },
    searchContact() {
      return this.contacts.filter(item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
    }
  },
  methods: {
    ...mapActions(['removeContact']),
    contactAddHandler() {
      this.$router.push({
        name: 'ContactForm',
        params: {
          id: 'new'
        }
      })
    },
    contactRemoveHandler(e) {
      const id = e.target.dataset.id;
      this.removeContact(id);
      console.log('work');
    }
  },
}
</script>
