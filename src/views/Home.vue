<template>
  <div class="home container">
    <div class="d-flex justify-content-between align-items-center px-3">
     <h1> Контакты </h1>
     <button class="btn btn-outline-primary" @click="contactAddHandler">Новый контакст</button>
    </div>
     <input type="search" name="" id="input" v-model="search" class="form-control" value="" title="" placeholder="Поиск контакта">
    <hr />
    <ul class="list-group">
      <li class="list-group-item">
          <div class="row">
              <div class="col-md-12 col-12">
                  <div class="row align-items-center">
                      <div class="col-md-4 col-4 user-img text-center">
                          <img src="@/assets/user_2.png" alt="Seth Frazier" class="img-responsive img-circle rounded-circle">
                      </div>
                      <div class="col-md-8 col-8">
                          <h5 class="font-weight-bold mb-1">Nick Daniel</h5>
                          <div class="user-detail">
                              <p class="m-0"><i class="fa fa-phone mr-1" aria-hidden="true"></i> +91 1234567890</p>
                              <p class="m-0"><i class="fa fa-envelope mr-1" aria-hidden="true"></i> example@gmail.com</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </li>
      <li class="list-group-item d-flex align-items-center">
          <div class="col-xs-12 col-sm-3">
              <img src="@/assets/user_1.png" alt="Seth Frazier" class="img-responsive img-circle rounded-circle">
          </div>
          <div class="col-xs-12 col-sm-9">
              <span class="name">Seth Frazier</span><br>
              <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="7396 E North St"></span>
              <span class="visible-xs"> <span class="text-muted">7396 E North St</span><br></span>
              <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(560) 180-4143"></span>
              <span class="visible-xs"> <span class="text-muted">(560) 180-4143</span><br></span>
              <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="seth.frazier@example.com"></span>
              <span class="visible-xs"> <span class="text-muted">seth.frazier@example.com</span><br></span>
          </div>
          <div class="clearfix"></div>
      </li>
      <li v-for="contact in searchContact" :key="contact.id" @click="$router.push({name: 'single', params: {id: contact.id}})" v-bind:test="'work'" class="list-group-item d-flex justify-content-between align-items-center">
        <div>{{contact.name}}</div>
      </li>
    </ul>
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
