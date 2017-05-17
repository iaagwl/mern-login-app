import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({ field, value, label, error, type, handleChange, checkUserExists }) => {
  return (
    <div>
      <div className={classnames("form-group", { 'has-error': error })}>
        <label>{label}</label>
        <input
          value={value}
          onChange={handleChange}
          onBlur={checkUserExists}
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
  handleChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
