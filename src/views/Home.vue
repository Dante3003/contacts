<template>
  <div class="home container col-md-9">
    <div class="d-flex justify-content-between align-items-center px-3">
     <h1> Контакты </h1>
     <button class="btn btn-outline-primary" @click="contactAddHandler">Новый контакст</button>
    </div>
     <input type="search" name="" id="input" v-model="search" class="form-control mb-4" value="" title="" placeholder="Поиск контакта">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12" v-for="contact in searchContact" :key="contact.id" @click="$router.push({name: 'single', params: {id: contact.id}})" v-bind:test="'work'">
        <div class="shadow d-flex align-items-center pl-2 py-1 mb-4 rounded">
          <div class="avatar">
            <img src="@/assets/user.png">
          </div>
          <div class="btn ml-3 text-left">
            <h5 class="text-success">{{contact.name}}</h5>
            <p class="text-secondary"> {{contact.numbers[0]}} </p>
          </div>
        </div>
      </div>
    </div>
    <p v-if="searchContact.length <= 0" class="text-center">Контакты не найдены</p>
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
    }
  },
}
</script>
