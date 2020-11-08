<template>
  <div class="container pb-2">
    <div class="d-flex align-items-center justify-content-between pt-2 pb-4 px-2">
      <h3 class="m-0">{{contact.name}}</h3>
      <div>
        <button
          class="btn btn-outline-primary btn-sm mr-1"
          :data-id="contact.id"
          @click="contactEditHandler"
        >Изменить</button>
        <button
          class="btn btn-outline-danger btn-sm"
          :data-id="contact.id"
          @click="contactRemoveHandler"
        >Удалить</button>
      </div>
    </div>
    <ul class="list-group mb-2">
      <h5 class="p-2">Номер телефона</h5>
      <li
        v-for="(number, index) in contact.numbers"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center"
      >{{number}}</li>
      <p class="" v-if="contact.numbers.length <= 0">Информация отсуствует</p>
    </ul>
    <ul class="list-group mb-2">
      <h5 class="p-2">Адресс</h5>
      <li
        v-for="(addres, index) in contact.addresses"
        :key="index"
        class="list-group-item"
      >{{addres}}</li>
      <p class="" v-if="contact.addresses.length <= 0">Информация отсуствует</p>
    </ul>
    <ul class="list-group">
      <h5 class="p-2">Почта</h5>
      <li v-for="(email, index) in contact.emails" :key="index" class="list-group-item">{{email}}</li>
      <p class="" v-if="contact.emails.length <= 0">Информация отсуствует</p>
    </ul>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SingleContact",
  props: ["id"],
  computed: {
    ...mapGetters(['getContacts']),
    newIndex() {
      return this.getContacts.findIndex(i => i.id === parseInt(this.id));
    },
    contact() {
      return this.getContacts[this.newIndex];
    }
  },
  methods: {
    ...mapActions(["removeContact"]),
    contactEditHandler(e) {
      this.$router.push({
        name: "ContactForm",
        params: { id: e.target.dataset.id }
      });
    },
    contactRemoveHandler(e) {
      const id = e.target.dataset.id;
      this.removeContact(id);
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

