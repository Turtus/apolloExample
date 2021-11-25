const pubsub = require("./utils/pubsub")

module.exports = {
    Query: {
        binanceGetPrice: async (_, {symbol}, {dataSources}) => {
            return dataSources.binanceAPI.getPrice(symbol);
        },
        binanceGetPrices: async (_, __, {dataSources}) => {
            return dataSources.binanceAPI.getPrices();
        },
        binanceGetMappedPrices: async (_, __, {dataSources}) => {
            if (!dataSources) {
                throw new Error('Dont call this in WS:// connection - use split link https://www.apollographql.com/docs/react/data/subscriptions/#3-split-communication-by-operation-recommended')
            }
            const data = await dataSources.binanceMappedAPI.getMappedPrices();
            pubsub.publish("RATES_CHANGED", {
                binanceUpdatedMappedPrices : data
            });
            return data
        },
    },
    Subscription : {
        binanceUpdatedMappedPrices : {
            subscribe: () => {
                return pubsub.asyncIterator("RATES_CHANGED");
            }
        }
    }
};
