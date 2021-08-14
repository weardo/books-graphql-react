import {gql} from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            id
            name
        }
    }
`

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`

const getBookQuery = gql`
    query($id: ID){
        book(id: $id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    id
                    name
                }
            }
        }
    }
`

export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery}