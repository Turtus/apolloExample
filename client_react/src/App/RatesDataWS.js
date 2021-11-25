import {gql, useSubscription} from '@apollo/client';

const BINANCE_GET_MAPPED_SUBSCRIPTION = gql`
    subscription Subscription {
      binanceUpdatedMappedPrices
    }
`;

function RatesDataWS() {
    const subscription = useSubscription(BINANCE_GET_MAPPED_SUBSCRIPTION);
    if (subscription.loading) return <h1>SOCKET Loading ...</h1>;
    if (subscription.error) return (
        <div><h1>SOCKET ERROR</h1><div>{subscription.error.message}</div></div>
    );

    const data = subscription?.data?.binanceUpdatedMappedPrices
    const tmp = new Date().toISOString().split('T')[1]

    return (
        <div>
            <h1>SOCKET: {tmp}</h1>
            <div>USDT : {data?.BTC?.USDT || ''}</div>
            <div>EURO : {data?.BTC?.EUR || ''}</div>
            <div>UAH : {data?.BTC?.UAH || ''}</div>
        </div>
    );

}

export default RatesDataWS;
