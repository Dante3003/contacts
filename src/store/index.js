import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {
        id: 1,
        name: 'Боб',
        numbers: ['+992907785262', '+9928886462002', '+992908444464'],
        addresses: ['г.Душанбе, ул.Исмили Сомони, дом 13'],
        emails: ['xtronshark889@gmail.com', 'someexample@gmail.com']
      },
      {
        id: 2,
        name: 'Андрей',
        numbers: ['+99280245879687'],
        addresses: [],
        emails: ['andrey544@mail.com']
      },
      {
        id: 3,
        name: 'Никалай',
        numbers: ['+75896554785'],
        addresses: [],
        emails: ['nikolay231@mail.com']
      },
      {
        id: 4,
        name: 'Дориюш',
        numbers: ['+992885645787'],
        addresses: [],
        emails: ['darisDark@gmail.com']
      }
    ]
  },
  mutations: {
    addContact(state, newItem) {
      state.contacts.push(newItem);
    },
    removeContact(state, index) {
      state.contacts.splice(index, 1);
    },
    editContact(state, index, newItem) {
      state.contacts[index] = newItem;
    }
  },
  actions: {
    addContact({commit}, newItem) {
      commit('addContact', newItem)
    },
    removeContact({state, commit}, id) {
      const index = state.contacts.findIndex(i => i.id === parseInt(id));
      commit('removeContact', index);
    },
    editContact({commit}, index, newItem) {
      commit('editContact', index, newItem);
    },
  },
  getters: {
    getContacts(state) {
      return state.contacts;
    }
  }
})
