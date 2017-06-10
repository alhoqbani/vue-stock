<template>
    <div>
        <h1>portfolio - Portfolio </h1>
        <h2> Avilable Funds: {{ funds }} </h2>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {

            }
        },
        computed: {
            funds() {
                console.log(this.$store.state.portfolio.funds);
                return this.$store.state.portfolio.funds;
            }
        }
    }
</script>