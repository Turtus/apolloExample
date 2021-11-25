import React from 'react';
import {Text, View} from 'react-native';
import {gql, useSubscription} from '@apollo/client';

const BINANCE_GET_MAPPED_SUBSCRIPTION = gql`
    subscription Subscription {
      binanceUpdatedMappedPrices
    }
`;

function RatesDataWS() {
    const subscription = useSubscription(BINANCE_GET_MAPPED_SUBSCRIPTION);
    if (subscription.loading) return <View><Text>SOCKET LOADING ...</Text></View>;
    if (subscription.error) return (
        <View><Text>SOCKET ERROR</Text><Text>{subscription.error.message}</Text></View>
    );

    const data = subscription?.data?.binanceUpdatedMappedPrices
    const tmp = new Date().toISOString().split('T')[1]

    return (
        <View>
            <Text>SOCKET: {tmp}</Text>
            <Text>USDT : {data?.BTC?.USDT || ''}</Text>
            <Text>EURO : {data?.BTC?.EUR || ''}</Text>
            <Text>UAH : {data?.BTC?.UAH || ''}</Text>
        </View>
    );

}

export default RatesDataWS;
