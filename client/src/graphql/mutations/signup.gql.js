import gql from 'graphql-tag';

export default gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      id
    }
  }
`;