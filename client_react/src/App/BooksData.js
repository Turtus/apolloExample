import {gql, useQuery} from '@apollo/client';

const GET_BOOKS = gql`
    query GetBooks {
      books {
        title
      }
    }
`;

function BooksData() {
    const {loading, error, data} = useQuery(GET_BOOKS, {
        variables: {},
    });
    if (loading) return <p>Loading ...</p>;
    return (
        <div>
            <ul>
            {data.books.map(function(d, idx){
                return (<li key={idx}>{d.title}</li>)
            })}
            </ul>
        </div>
    );

}

export default BooksData;
