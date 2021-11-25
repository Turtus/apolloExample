const {createServer} = require('http');
const {execute, subscribe} = require("graphql");
const {ApolloServer} = require("apollo-server-express");
const {makeExecutableSchema} = require("@graphql-tools/schema");
const express = require("express");
const {SubscriptionServer} = require("subscriptions-transport-ws");

const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const BinanceAPI = require('./src/datasources/binance');
const BinanceMappedAPI = require('./src/datasources/binanceMapped');

const dataSources = () => ({
    binanceAPI: new BinanceAPI(),
    binanceMappedAPI: new BinanceMappedAPI()
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    introspection: true,
    plugins: [
        {
            async serverWillStart() {
                return {
                    async drainServer() {
                        subscriptionServer.close();
                    },
                };
            },
        },
    ]
});


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
const app = express();
const httpServer = createServer(app);
const subscriptionServer = SubscriptionServer.create(
    {
        schema,
        execute,
        subscribe,
    },
    {server: httpServer, path: "/graphql"}
);

server.start().then(() => {
    server.applyMiddleware({app});
    process.setMaxListeners(0);

    httpServer.listen({port: 4000}, () =>
        console.log(`
          Server is running!
          Listening on port 4000
          Explore at https://studio.apollographql.com/sandbox
        `)
    )
})




