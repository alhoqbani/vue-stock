<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Home</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
                    <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li><a>{{ '$ ' + funds }}</a></li>
                    <li><a>{{  $store.state.portfolio.stocks.length + ' Stocks' }}</a></li>
                    <li><a href="#">End Day</a></li>
                    <li class="dropdown">
                        <a href="#"
                           class="dropdown-toggle"
                           data-toggle="dropdown"
                           role="button"
                           aria-haspopup="true"
                           aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Save</a></li>
                            <li><a href="#">Load</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>

</template>

<script>
    export default {
        data: function () {
            return {}
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }

    }
</script>