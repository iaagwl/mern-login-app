import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    //test actions defined in /client/actions/testActions.js
    this.props.userSignupRequest(this.state);
  }

  handleChange(e) {
    // input field needs name
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>

        <div className="form-group">
          <label>Username</label>
          <input
            value={this.state.test}
            onChange={this.handleChange}
            type="text"
            name="username"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            value={this.state.test}
            onChange={this.handleChange}
            type="email"
            name="email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={this.state.test}
            onChange={this.handleChange}
            type="password"
            name="password"
          />
        </div>

        <div className="form-group">
          <label>Password Confirmation</label>
          <input
            value={this.state.test}
            onChange={this.handleChange}
            type="password"
            name="passwordConfirmation"
          />
        </div>

        <input
          type="submit"
        />
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;
