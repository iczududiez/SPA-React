import React, { createElement } from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, header, footer }) => (
  <div className="wdyg_card">
    {header && (<div className="wdyg_card-header">{createElement(header)}</div>)}
    <div className="wdyg_card-content">
      {children}
    </div>
    {footer && (<div className="wdyg_card-footer">{createElement(footer)}</div>)}
  </div>
);

Card.defaultProps = {
  header: null,
  footer: null,
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.shape({}),
  ]).isRequired,
  header: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({}),
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({}),
  ]),
};

export default Card;
