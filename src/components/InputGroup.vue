<template>
    <div class="form-group">
        <label class="ml-1">{{title}}</label>
        <div class="d-flex mb-2" v-for="(item, index) in items" :key="index">
            <input class="form-control" :type="typeName" name="name" id="name-input" v-model="items[index]" placeholder="Номер телефона" autocomplete="off">
            <button class="btn btn-danger ml-1" :data-id="index" @click.prevent="removeItemHandler">X</button>
        </div>
        <button class="btn btn-primary" @click.prevent="addItemHandler">Добавить</button>
    </div>
</template>>


<script>
import {mapActions} from 'vuex';
export default {
    name: 'InputGroup',
    props: ['items', 'title', 'name'],
    methods: {
        ...mapActions(['removeItem']),
        addItemHandler() {
            this.$emit('addItemHandler', this.name);
        },
        removeItemHandler(e) {
            const idx = e.target.dataset.id;
            this.$emit('removeItemHandler', this.name, idx);
        }
    },
    computed: {
        typeName() {
            if (this.name === 'numbers') {
                return 'tell';
            }
            if (this.name === 'emails') {
                return 'email';
            }
            
            return 'text';
        }
    },
}
</script>