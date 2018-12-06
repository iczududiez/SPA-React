import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ classes, ...otherProps }) => (
  <input {...otherProps} className={`hro_input ${classes}`} />
);

Input.defaultProps = {
  classes: '',
};

Input.propTypes = {
  classes: PropTypes.string,
};

export default Input;
