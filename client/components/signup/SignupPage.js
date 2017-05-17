import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { userSignupRequest, doesUserExist } from '../../actions/signupActions';
import { addFlashMassage } from '../../actions/flashMessages';

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest, addFlashMassage, doesUserExist } = this.props;

    return(
      <div className="signup-container">
        <SignupForm
          doesUserExist={doesUserExist}
          userSignupRequest={userSignupRequest}
          addFlashMassage={addFlashMassage}
        />
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMassage: PropTypes.func.isRequired,
  doesUserExist: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMassage, doesUserExist } )(SignupPage);
