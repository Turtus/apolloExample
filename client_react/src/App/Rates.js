import {ApolloConsumer} from '@apollo/client';
import RatesData from "./RatesData";
import RatesDataWS from "./RatesDataWS";
function Rates() {
    return (
        <div>
            <h1>Rates</h1>
            <ApolloConsumer>
                {client =>
                    <div>
                        <RatesDataWS/>
                        <RatesData/>
                    </div>
                }
            </ApolloConsumer>
        </div>
    );
}

export default Rates;
