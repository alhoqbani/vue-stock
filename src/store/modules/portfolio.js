const state = {
    funds: 1000,
    stocks: [],
};

const mutations = {
    'BUY_STOCKS': (state, {stockId, stockPrice, quantity}) => {
        let cost = (stockPrice * quantity);
        if (state.funds < cost) {
            console.log('NSF');
            return
        };
        state.stocks.push(stockId);
        state.funds -= cost;
    },
};

const actions = {};

const getters = {
    funds: (state) => state.funds,
    stocksInPortfolio: (state) => state.stocks,
};

export default {
    state,
    getters,
    actions,
    mutations,
}