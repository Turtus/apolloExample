import {ApolloConsumer} from '@apollo/client';
import BooksData from "./BooksData";

function Books() {
    return (
        <div>
            <h1>Books</h1>
            <ApolloConsumer>
                {client =>
                    <BooksData/>
                }
            </ApolloConsumer>
        </div>
    );
}

export default Books;
