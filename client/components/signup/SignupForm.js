import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/signup';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      invalid: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.doesUserExist(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if (res.data.user.length) {
          errors[field] = 'There is user with such ' + field;
          invalid = true;
        } else {
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.isValid()){
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMassage({
            type: 'success',
            text: 'You have signed up successfully. Welcome!'
          })
          this.context.router.history.push('/');
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }
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

        <TextFieldGroup
          error={errors.username}
          label="Username"
          handleChange={this.handleChange}
          checkUserExists={this.checkUserExists}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          handleChange={this.handleChange}
          checkUserExists={this.checkUserExists}
          value={this.state.email}
          field="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          handleChange={this.handleChange}
          value={this.state.password}
          field="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          handleChange={this.handleChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
        />

        <input disabled={this.state.isLoading || this.state.invalid}
          type="submit"
        />
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMassage: PropTypes.func.isRequired,
  doesUserExist: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SignupForm;
