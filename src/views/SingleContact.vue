<template>
  <div>
    <div class="pt-2 px-2 d-flex align-items-center justify-content-between">
      <h3 class="m-0">{{contact[0].name}}</h3>
      <div>
        <button class="btn btn-outline-secondary btn-sm mr-1" :data-id="contact[0].id" @click="contactEditHandler">Изменить</button>
        <button class="btn btn-outline-danger btn-sm" :data-id="contact[0].id" @click="contactRemoveHandler">Удалить</button>
      </div>
    </div>
    <hr class="mb-3" />
    <ul class="list-group mb-2">
      <h5 class="p-2">Номер</h5>
      <li
        v-for="(number, index) in contact[0].numbers"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center"
      >{{number}}</li>
    </ul>
    <ul class="list-group mb-2">
      <h5 class="p-2">Адресс</h5>
      <li
        v-for="(addres, index) in contact[0].addresses"
        :key="index"
        class="list-group-item"
      >{{addres}}</li>
    </ul>
    <ul class="list-group">
      <h5 class="p-2">Почта</h5>
      <li v-for="(email, index) in contact[0].emails" :key="index" class="list-group-item">{{email}}</li>
    </ul>
  </div>
</template>


<script>
import {mapActions} from 'vuex';
export default {
  name: "SingleContact",
  data() {
    return {
      id: this.$route.params["id"]
    };
  },
  computed: {
    contact() {
      return this.$store.state.contacts.filter(item => item.id === this.id);
    }
  },
  methods: {
      ...mapActions(['removeContact']),
    contactEditHandler(e) {
      console.log(e.target.dataset.id)
      this.$router.push({
        name: "ContactForm",
        params: { id: e.target.dataset.id }
      });
    },
    contactRemoveHandler(e) {
      const id = e.target.dataset.id;
      this.removeContact(id);
      this.$router.push({name: 'Home'});
    }
  }
};
</script>

