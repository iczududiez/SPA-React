import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => (
  <header>
    <div className="row">
      <div className="wdyg_container">
        {children}
      </div>
    </div>
  </header>
);

Header.defaultProps = {
  children: {},
};

Header.propTypes = {
  children: PropTypes.shape({}),
};

export default Header;
