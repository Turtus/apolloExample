import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import Books from "./Books";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Books/>
        </ApolloProvider>
    );
}

export default App;
