<template>
    <div class="form-group">
        <div class="d-flex justify-content-between align-items-center mb-1">
            <label class="ml-1 mt-2">{{title}}</label>
            <button class="btn" @click.prevent="addItemHandler">Добавить</button>
        </div>
        <div class="input-group rounded" v-for="(item, index) in items" :key="index">
            <input 
                class="form-control rounded-left" 
                :type="typeName" name="name" 
                id="name-input" v-model="items[index]" 
                autocomplete="off" />
            <div class="input-group-append rounded-right" >
                <button 
                    class="btn btn-outline-danger rounded-right" 
                    :data-id="index" 
                    @click.prevent="removeItemHandler">&times;</button>
            </div>
        </div>
    </div>
</template>>


<script>
export default {
    name: 'InputGroup',
    props: ['items', 'title', 'name'],
    methods: {
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