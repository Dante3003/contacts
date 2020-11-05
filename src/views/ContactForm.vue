<template>
<div class="container-fluid d-flex flex-column align-items-center">
    <h4 class="">Новый контакт</h4>

    <form class="form-horizontal d-flex flex-column align-items-left w-100" v-on:submit.prevent="contactSaveHandler">

        <div class="form-group">
            <label for="name-input" class="ml-1">Имя абонента</label>
            <input type="text" name="name" id="name-input" class="form-control" v-model="contact.name" placeholder="Имя абонента" autocomplete="off">
        </div>
        <InputGroup :items="contact.numbers" @addItemHandler="addNumberHandler" :title="'Номер телефона'" data-id="numbers"/>
        <InputGroup :items="contact.addresses" @addItemHandler="addAddressHandler" :title="'Адресс'" data-id="addresses"/>
        <InputGroup :items="contact.emails" @addItemHandler="addEmailHandler" :title="'Почта'" data-id="emails"/>
        
        
        <!-- <div class="form-group">
            <label for="name-input" class="ml-1">Номер телефона</label>
            <input type="text" v-for="(number, index) in contact.numbers" :key="index" name="name" id="name-input" class="form-control mb-2" v-model="contact.numbers[index]" placeholder="Номер телефона" autocomplete="off">
            <button class="btn btn-primary" @click.prevent="addNumberHandler">добавить номер</button>
        </div> -->

        <!-- <div class="form-group">
            <label for="name-input" class="ml-1">Адресс</label>
            <input type="text" v-for="(addres, index) in contact.addresses" :key="index" name="name" id="name-input" class="form-control mb-2" v-model="contact.addresses[index]" placeholder="Адресс" autocomplete="off">
            <button class="btn btn-primary" @click.prevent="addAddressHandler">добавить адресс</button>
        </div>

        <div class="form-group">
            <label for="name-input" class="ml-1">Эл.почта</label>
            <input type="text" v-for="(email, index) in contact.emails" :key="index" name="name" id="name-input" class="form-control mb-2" v-model="contact.emails[index]" placeholder="Адресс" autocomplete="off">
            <button class="btn btn-primary" @click.prevent="addEmailHandler">добавить почту</button>
        </div> -->

        <input type="submit" class="btn btn-primary" value="Сохранить" />

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
            }
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
        }
    },
    methods: {
        ...mapActions(['addContact', 'editContact']),
        contactSaveHandler() {
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
        addItemHandler(items) {
            console.log(this.contact.items);
            console.log(items);
            // const lastItem = this.contact[items].length - 1;
            // if (this.contact[items][lastItem] === '') {
            //     return;
            // }
            // this.contact[items].push('');
        },
        addNumberHandler() {
            const lastItem = this.contact.numbers.length - 1;
            if (this.contact.numbers[lastItem] === '') {
                return;
            }
            this.contact.numbers.push('');
        },
        addAddressHandler() {
            const lastItem = this.contact.addresses.length - 1;
            if (this.contact.addresses[lastItem] === '') {
                return;
            }
            this.contact.addresses.push('');
        },
        addEmailHandler() {
            const lastItem = this.contact.emails.length - 1;
            if (this.contact.emails[lastItem] === '') {
                return;
            }
            this.contact.emails.push('');
        }
    },
    mounted() {
        console.log(this.contact);
    },
}
</script>
