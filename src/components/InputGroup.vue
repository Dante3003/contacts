<template>
    <div class="form-group">
        <label for="name-input" class="ml-1">{{title}}</label>
        <input type="text" v-for="(item, index) in items" :key="index" name="name" id="name-input" class="form-control mb-2" v-model="items[index]" placeholder="Номер телефона" autocomplete="off">
        <button class="btn btn-primary" @click.prevent="addItemHandler">добавить номер</button>
    </div>
</template>>


<script>
export default {
    name: 'InputGroup',
    props: ['items', 'title'],
    methods: {
        addItemHandler() {
            console.log('work');
            this.$emit('addItemHandler', this.items)
        }
    },
}
</script>