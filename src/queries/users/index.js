import gql from 'graphql-tag'

export const GET_USER = gql`
    query getUser($email: String!) {
        user: getUser(email: $email) {
            user_email
            user_password
            user_first_name
            user_last_name
        }
    }
`