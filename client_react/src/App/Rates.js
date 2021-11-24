import {ApolloConsumer} from '@apollo/client';
import RatesData from "./RatesData";

function Rates() {
    return (
        <div>
            <h1>Books</h1>
            <ApolloConsumer>
                {client =>
                    <RatesData/>
                }
            </ApolloConsumer>
        </div>
    );
}

export default Rates;
