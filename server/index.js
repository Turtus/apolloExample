const {ApolloServer} = require('apollo-server');

const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const BinanceAPI = require('./src/datasources/binance');
const BinanceMappedAPI  = require('./src/datasources/binanceMapped');

// set up any dataSources our resolvers need
const dataSources = () => ({
    binanceAPI: new BinanceAPI(),
    binanceMappedAPI: new BinanceMappedAPI()
});


// Set up Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    introspection: true
});


server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/sandbox
    `);
});
