import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div id="wdyg_base-layout">
    {children}
  </div>
);

Layout.defaultProps = {
  children: {},
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.shape({}),
  ]),
};

export default Layout;
