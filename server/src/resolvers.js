module.exports = {
    Query: {
        binanceGetPrice: async (_, { symbol }, { dataSources }) => {
            return dataSources.binanceAPI.getPrice(symbol);
        },
        binanceGetPrices: async (_, __, { dataSources }) => {
            return dataSources.binanceAPI.getPrices();
        },
        binanceGetMappedPrices: async (_, __, { dataSources }) => {
            return dataSources.binanceMappedAPI.getMappedPrices();
        },
    },
};
