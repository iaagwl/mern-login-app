import React from 'react';
import classnames from 'classnames';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });

    this.props.userSignupRequest(this.state).then(
      () => {},
      (err) => this.setState({ errors: err.response.data, isLoading: false })
    );
  }

  handleChange(e) {
    // input field needs name
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>

        <div className={classnames("form-group", { 'has-error': errors.username })}>
          <label>Username</label>
          <input
            value={this.state.test}
            onChange={this.handleChange}
            type="text"
            name="username"
          />
          {errors.username && <span>{errors.username}</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.email })}>
          <label>Email</label>
          <input
            value={this.state.test}
            onChange={this.handleChange}
            type="email"
            name="email"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.password })}>
          <label>Password</label>
          <input
            value={this.state.test}
            onChange={this.handleChange}
            type="password"
            name="password"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.passwordConfirmation })}>
          <label>Password Confirmation</label>
          <input
            value={this.state.test}
            onChange={this.handleChange}
            type="password"
            name="passwordConfirmation"
          />
          {errors.passwordConfirmation && <span>{errors.passwordConfirmation}</span>}
        </div>

        <input disabled={this.state.isLoading}
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
