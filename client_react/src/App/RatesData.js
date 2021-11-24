import {gql, useQuery} from '@apollo/client';

const BINANCE_GET_MAPPED_PRICES = gql`
    query Query {
      binanceGetMappedPrices
    }
`;

function RatesData() {
    const {loading, error, data} = useQuery(BINANCE_GET_MAPPED_PRICES, {
        variables: {},
    });
    if (loading) return <p>Loading ...</p>;
    
    return (
        <div>
            <table>
                <tr>
                    <td>
                        BTC
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.BTC.BTC}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.BTC.ETH}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.BTC.LTC}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.BTC.BNB}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.BTC.USDT}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.BTC.EUR}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.BTC.RUB}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.BTC.UAH}
                    </td>
                </tr>
                <tr>
                    <td>
                        ETH
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.ETH.BTC}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.ETH.ETH}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.ETH.LTC}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.ETH.BNB}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.ETH.USDT}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.ETH.EUR}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.ETH.RUB}
                    </td>
                    <td>
                        {data.binanceGetMappedPrices.ETH.UAH}
                    </td>
                </tr>
            </table>
        </div>
    );

}

export default RatesData;
