import React from 'react';
import {Text, View} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const BINANCE_GET_MAPPED_PRICES = gql`
    query Query {
      binanceGetMappedPrices
    }
`;


function RatesData() {
    const usual = useQuery(BINANCE_GET_MAPPED_PRICES);
    if (usual.loading) return <View><Text>USUAL LOADING ...</Text></View>;
    if (usual.error) return (
        <View><Text>USUAL ERROR</Text><Text>{usual.error.message}</Text></View>
    );

    const tmp = new Date().toISOString().split('T')[1]
    const data = usual.data?.binanceGetMappedPrices
    
    return (
        <View>
            <Text>USUAL: {tmp}</Text>
            <Text>USDT : {data?.BTC?.USDT || ''}</Text>
            <Text>EURO : {data?.BTC?.EUR || ''}</Text>
            <Text>UAH : {data?.BTC?.UAH || ''}</Text>
        </View>
    );

}

export default RatesData;
