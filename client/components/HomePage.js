import React from 'react';
import AjaxForm from './AjaxForm';
import { connect } from 'react-redux';
import { testAjaxFunc, addTestState } from '../actions/testActions';

class HomePage extends React.Component {
  render() {
    const { testAjaxFunc, addTestState } = this.props;

    return(
      <div className="home-container">
        <h1>Home</h1>
        <AjaxForm
          testAjaxFunc={testAjaxFunc}
          addTestState={addTestState}
        />
      </div>
    )
  }
}

HomePage.propTypes = {
  testAjaxFunc: React.PropTypes.func.isRequired,
  addTestState: React.PropTypes.func.isRequired
}

export default connect(null, { testAjaxFunc, addTestState } )(HomePage)
