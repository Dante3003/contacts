<template>
<div class="container d-flex flex-column align-items-center col-md-9">
    <h4 class="">{{pageTitle}}</h4>

    <form class="form-horizontal d-flex flex-column align-items-left w-100" v-on:submit.prevent="contactSaveHandler">

        <div class="form-group">
            <label for="name-input" class="ml-1">Имя абонента</label>
            <input type="text" name="name" id="name-input" class="form-control" required v-model="contact.name" placeholder="Имя абонента" autocomplete="off">
        </div>
        <InputGroup 
            :items="contact.numbers" 
            @removeItemHandler="removeHandler" 
            @addItemHandler="addItemHandler" 
            :title="'Номер телефона'" 
            :name="'numbers'" />
        <InputGroup 
            :items="contact.addresses" 
            @removeItemHandler="removeHandler" 
            @addItemHandler="addItemHandler" 
            :title="'Адресс'" 
            :name="'addresses'" />
        <InputGroup 
            :items="contact.emails" 
            @removeItemHandler="removeHandler" 
            @addItemHandler="addItemHandler" 
            :title="'Почта'" 
            :name="'emails'" />
        
        <div class="d-flex justify-content-between">
            <button class="btn btn-outline-secondary" @click.prevent="chansel">Отмена</button>
            <button type="submit" class="btn btn-outline-success" value="Сохранить">Сохранить</button>
        </div>

    </form>

</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex';
import InputGroup from '@/components/InputGroup';
export default {
    name: 'ContactForm',
    components: {
        InputGroup
    },
    data() {
        return {
            id: this.$route.params['id'],
            index: '',
            newContact: {
                id: Date.now(),
                name: '',
                numbers: [''],
                addresses: [''],
                emails: ['']
            },
            title: 'изменить контакт'
        }
    },
    computed: {
        ...mapGetters(['getContacts']),
        newIndex() {
            return this.getContacts.findIndex(i => i.id === parseInt(this.id));
        },
        contact() {
            if (this.id === 'new') {
                return this.newContact
            }
            return this.getContacts[this.newIndex];
        },
        pageTitle() {
            if (this.id === 'new') {
                return 'Новый контакт'
            }
            return 'Изменить контакт'
        }
    },
    methods: {
        ...mapActions(['addContact', 'editContact']),
        contactSaveHandler() {
            this.contact.numbers = this.contact.numbers.filter(String);
            this.contact.addresses = this.contact.addresses.filter(String);
            this.contact.emails = this.contact.emails.filter(String);
            if (this.id === 'new') {
                this.addContact(this.contact);
                this.$router.push({
                    name: 'Home'
                });
                return;
            }
            this.editContact(this.index, this.contact);
            this.$router.push({
                name: 'Home'
            });
        },
        removeHandler(item, itemIndex) {
            this.contact[item].splice(itemIndex, 1);
        },
        addItemHandler(items) {
            const lastItem = this.contact[items].length - 1;
            if (this.contact[items][lastItem] === '') {
                return;
            }
            this.contact[items].push('');
        },
        chansel() {
            this.$router.push({
                name: 'Home'
            });
        }
    },
    mounted() {},
}
</script>
