import React from 'react';
import PropTypes from 'prop-types';
const renderField = ({
  input,
  label,
  type,
  className,
  placeholder,
  formGroupClass,
  meta: { touched, error, warning },
}) => (
  <div className={formGroupClass}>
    <label>{label}</label>
    <div>
      <input
        {...input}
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={input.onChange}
      />
      {touched &&
        ((error && (
          <span className="alert alert-warning alert--small">
            {error} <i className="fi fi-mad" />
          </span>
        )) ||
          (warning && (
            <span className="alert alert-warning alert--small">
              {warning}
              <i className="fi fi-dizzy" />
            </span>
          )))}
    </div>
  </div>
);
renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
  }),
  formGroupClass: PropTypes.string,
};
export default renderField;
