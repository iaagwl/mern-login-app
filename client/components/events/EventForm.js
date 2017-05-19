import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';
import TextFieldGroup from '../common/TextFieldGroup';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render() {
    const { title, errors, isLoading } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create New</h1>

        <TextFieldGroup
          field="title"
          label="Event Title"
          name="title"
          value={title}
          handleChange={this.handleChange}
          error={errors.title}
        />

        <input disabled={isLoading}
          type="submit"
        />
      </form>
    );
  }

}

EventForm.propTypes = {
  createEvent: PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm);
