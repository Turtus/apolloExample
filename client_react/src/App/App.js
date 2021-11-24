import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import Rates from "./Rates";

const client = new ApolloClient({
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
