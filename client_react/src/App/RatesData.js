import {gql, useQuery} from '@apollo/client';

const BINANCE_GET_MAPPED_PRICES = gql`
    query Query {
      binanceGetMappedPrices
    }
`;


function RatesData() {
    const usual = useQuery(BINANCE_GET_MAPPED_PRICES);
    if (usual.loading) return <h1>USUAL LOADING ...</h1>;
    if (usual.error) return (
        <div><h1>USUAL ERROR</h1><div>{usual.error.message}</div></div>
    );

    const tmp = new Date().toISOString().split('T')[1]
    const data = usual.data?.binanceGetMappedPrices
    console.log(usual)
    return (
        <div>
            <h1>USUAL: {tmp}</h1>
            <div>USDT : {data?.BTC?.USDT || ''}</div>
            <div>EURO : {data?.BTC?.EUR || ''}</div>
            <div>UAH : {data?.BTC?.UAH || ''}</div>
        </div>
    );

}

export default RatesData;
