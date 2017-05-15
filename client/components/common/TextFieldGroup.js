import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({ field, value, label, error, type, handleChange }) => {
  return (
    <div>
      <div className={classnames("form-group", { 'has-error': error })}>
        <label>{label}</label>
        <input
          value={value}
          onChange={handleChange}
          type={type}
          name={field}
        />
        {error && <span>{error}</span>}
      </div>
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
