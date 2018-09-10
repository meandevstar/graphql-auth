import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Signup from '../../components/Signup'
import signupMutation from '../../graphql/mutations/signup.gql';

class SignupContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', password: '' };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    // TODO: validate email

    this.props.handleSignup(name, email, password);
  }

  render() {
    return (
      <Signup
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        {...this.state}
      />
    );
  }
}

const SignupWithMutation = graphql(signupMutation, {
  props: ({ ownProps, mutate }) => ({
    handleSignup: (name, email, password) => {
      mutate({ variables: { name: name, email: email, password: password } })
        .then(({ data: { register } }) => {
          localStorage.setItem('token', register.token);
          ownProps.history.push('dashboard');
          return Promise.resolve();
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject();
        })
    },
  })
})(SignupContainer)

export default SignupWithMutation;
