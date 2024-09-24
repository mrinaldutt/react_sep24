import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
query Books {
  books {
    author
    title
  }
}`;

function Books() {
    const { loading, error, data } = useQuery(GET_BOOKS);
    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error ...</p>
    return data.books.map(({ title, author }) => (
        <div key={author}>{title}</div>
    ))
}

export default Books;