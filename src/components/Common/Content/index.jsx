import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => (
  <main>
    <div className="row">
      <div className="wdyg_container">
        {children}
      </div>
    </div>
  </main>
);

Content.defaultProps = {
  children: {},
};

Content.propTypes = {
  children: PropTypes.shape({}),
};

export default Content;
