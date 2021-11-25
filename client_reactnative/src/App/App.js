/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import {SafeAreaView} from 'react-native';

import {ApolloProvider, ApolloClient, InMemoryCache, split, HttpLink} from '@apollo/client/main';
import {getMainDefinition} from '@apollo/client/utilities';
import {WebSocketLink} from '@apollo/client/link/ws'
import Rates from "./Rates";

const serverHost = '10.0.2.2'
const httpLink = new HttpLink({
    uri: 'http://' + serverHost + ':4000/graphql'
})

const wsLink = new WebSocketLink({
    uri: 'ws://' + serverHost + ':4000/graphql',
    options: {
        reconnect: true
    }
});

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        console.log( )
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
    uri: 'http://' + serverHost + ':4000/graphql'
});

const App: () => Node = () => {

    return (
        <SafeAreaView>
            <ApolloProvider client={client}>
                <Rates/>
            </ApolloProvider>
        </SafeAreaView>
    );
};

export default App;
