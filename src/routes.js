import Home from './components/Home.vue';
import Stocks from './components/stocks/Stocks.vue';
import Portfolio from './components/portfolio/Portfolio.vue';

export const routes = [
    {path: '', components: {default: Home}},
    {path: '/stocks', components: {default: Stocks}},
    {path: '/portfolio', components: {default: Portfolio}},
];