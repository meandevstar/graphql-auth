import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class Signup extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  getValidationState(type) {
    const { name, email, password, confirmPassword } = this.state;

    const validationState = { success: true };

    if (!name) {
      validationState.name = { status: 'error', msg: 'Name is required' };
      validationState.success = false;
    } else {
      validationState.name = { status: 'success' };
    }

    if (!email) {
      validationState.email = { status: 'error', msg: 'Email is required' };
      validationState.success = false;
    } else {
      validationState.email = { status: 'success' };
    }

    if (!password) {
      validationState.password = { status: 'error', msg: 'Password is required' };
      validationState.success = false;
    } else if (password.length < 8) {
      validationState.password = { status: 'error', msg: 'Password length needs to be at least 8' };
      validationState.success = false;
    } else {
      validationState.password = { status: 'success' };
    }

    if (confirmPassword !== password) {
      validationState.confirmPassword = { status: 'error', msg: 'Password does not match' };
      validationState.success = false;
    } else {
      validationState.confirmPassword = { status: 'success' };
    }

    return validationState;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { onSubmit, onChange } = this.props;
    const { name, email, password, confirmPassword } = this.state;
    const validationState = this.getValidationState();

    return (
      <form>
        <FormGroup controlId="name" validationState={validationState.name.status}>
          <ControlLabel>Name</ControlLabel>
          <FormControl 
            type="text"
            placeholder="Enter name"
            onChange={this.handleChange}
          />
          <HelpBlock>{validationState.name.msg}</HelpBlock>
        </FormGroup>
        <FormGroup controlId="name" validationState={validationState.email.status}>
          <ControlLabel>Email</ControlLabel>
          <FormControl 
            type="email"
            placeholder="Enter email"
            onChange={this.handleChange}
          />
          <HelpBlock>{validationState.email.msg}</HelpBlock>
        </FormGroup>
        <FormGroup controlId="name" validationState={validationState.password.status}>
          <ControlLabel>Password</ControlLabel>
          <FormControl 
            type="password"
            placeholder="Enter password"
            onChange={this.handleChange}
          />
          <HelpBlock>{validationState.password.msg}</HelpBlock>
        </FormGroup>
        <FormGroup controlId="name" validationState={validationState.confirmPassword.status}>
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl 
            type="password"
            placeholder="Enter confirm password"
            onChange={this.handleChange}
          />
          <HelpBlock>{validationState.confirmPassword.msg}</HelpBlock>
        </FormGroup>
        <FormGroup>
          <Button
            className="btn btn-primary"
            onClick={() => onSubmit()}>
            Log in
          </Button>
        </FormGroup>
      </form>
    );
  }
}

export default Signup;