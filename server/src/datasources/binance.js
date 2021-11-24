/**
 * https://binance-docs.github.io/apidocs/spot/en/#symbol-price-ticker
 */
const {RESTDataSource} = require('apollo-datasource-rest');

class BinanceAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.binance.com/';
    }

    // https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT
    async getPrice(symbol = 'BTCUSDT') {
        return this.get(`api/v3/ticker/price?symbol=${encodeURIComponent(symbol)}`);
    }

    // https://api.binance.com/api/v3/ticker/price
    async getPrices() {
        return this.get(`api/v3/ticker/price`);
    }
}

module.exports = BinanceAPI
