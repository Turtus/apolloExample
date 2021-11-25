const { gql } = require('apollo-server');

const typeDefs = gql`
  type binancePrice {
    symbol: String
    price: String
  }
  
  scalar Object
  
  type Query {
    binanceGetPrice (symbol:String): binancePrice
    binanceGetPrices: [binancePrice]
    binanceGetMappedPrices: Object
  }
  
  type Subscription {
    binanceUpdatedMappedPrices: Object
  }
`;

module.exports = typeDefs;
