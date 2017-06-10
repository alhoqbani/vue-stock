<template>
    <div class="col-xs-6">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title"> {{ stock.name }}
                    <small>(Price: {{stock.price}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number"
                           placeholder="Enter Quantity"
                           class="form-control"
                           v-model.Number="quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success"
                            @click="buyStock"
                            :disabled="quantity <=0 || !Number.isInteger(Number(quantity))"

                    >Buy
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data: function () {
            return {
                childStock: this.stock,
                quantity: 0,
            }
        },
        methods: {
            buyStock: function () {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                }
                console.log(order);
                this.$store.commit('BUY_STOCKS', order);
                this.quantity = 0;
            }
        }
    }
</script>