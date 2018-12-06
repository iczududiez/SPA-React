import React from 'react';

const Button = ({ classes, ...otherProps }) => (
  <button {...otherProps} className={`hro_btn ${classes}`} />
);

export default Button;
