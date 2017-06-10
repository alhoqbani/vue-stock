<template>
    <div id="app">

        <app-header></app-header>

        <div class="container">
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {'app-header': Header},
        created() {
            this.$store.dispatch('initStock');
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

</style>
