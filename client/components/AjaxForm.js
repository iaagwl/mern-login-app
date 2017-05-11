import React from 'react';

class AjaxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    //test actions defined in /client/actions/testActions.js
    this.props.addTestState(this.state.test);
    this.props.testAjaxFunc(this.state);
  }

  handleChange(e) {
    // input field needs name
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Test Ajax</h1>

        <input
          value={this.state.test}
          onChange={this.handleChange}
          type="text"
          name="test"
        />
        <input
          type="submit"
        />
      </form>
    );
  }
}

AjaxForm.propTypes = {
  testAjaxFunc: React.PropTypes.func.isRequired,
  addTestState: React.PropTypes.func.isRequired
}

export default AjaxForm;
