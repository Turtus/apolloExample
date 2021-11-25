/**
 * https://binance-docs.github.io/apidocs/spot/en/#symbol-price-ticker
 */
const {RESTDataSource} = require('apollo-datasource-rest');


class BinanceMappedAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.binance.com/';
    }
    async getMappedPrices() {
        const data = await this.get(`api/v3/ticker/price`);
        const indexed = {}
        for (const row of data) {
            indexed[row.symbol] = row.price
        }
        return {
            BTC : {
                BTC : 1,
                ETH : indexed['ETHBTC'] || 0,
                LTC : indexed['LTCBTC'] || 0,
                BNB : indexed['BNBBTC'] || 0,
                USDT: indexed['BTCUSDT'] || 0,
                UAH : indexed['BTCUAH'] || 0,
                RUB : indexed['BTCRUB'] || 0,
                EUR : indexed['BTCEUR'] || 0,
            },
            ETH : {
                BTC : indexed['ETHBTC'] || 0,
                ETH : 1,
                LTC : indexed['LTCETH'] || 0,
                BNB : indexed['BNBETH'] || 0,
                USDT: indexed['ETHUSDT'] || 0,
                UAH : indexed['ETHUAH'] || 0,
                RUB : indexed['ETHRUB'] || 0,
                EUR : indexed['ETHEUR'] || 0,
            }
        }
    }
}

module.exports = BinanceMappedAPI
