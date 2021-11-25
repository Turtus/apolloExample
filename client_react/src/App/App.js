import {ApolloProvider, ApolloClient, InMemoryCache,  split, HttpLink} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws'

import Rates from "./Rates";

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql'
});

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/graphql',
    options: {
        reconnect: true
    }
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
});


function App() {
    return (
        <ApolloProvider client={client}>
            <Rates/>
        </ApolloProvider>
    );
}

export default App;
