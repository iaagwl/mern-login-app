import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import PropTypes from 'prop-types';

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;

    return(
      <div className="signup-container">
        <SignupForm
          userSignupRequest={userSignupRequest}
        />
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
}

export default connect(null, { userSignupRequest } )(SignupPage);
