<template>
    <div>
        <h1>stocks - Stocks</h1>
        <stock v-for="stock in stocks" :stock="stock" :key="stock.id"></stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    import {mapGetters} from 'vuex'

    export default {
        data: function () {
            return {}
        },
        components: {Stock},
        computed: {
            ...mapGetters([
                'stocks'
            ])
        }
    }
</script>