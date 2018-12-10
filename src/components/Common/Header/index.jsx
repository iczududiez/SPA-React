import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static defaultProps = {
    children: {},
  };

  static propTypes = {
    children: PropTypes.shape({}),
  };

  render() {
    const { children } = this.props;

    return (
      <header>
        <div className="row">
          <div className="wdyg_container">
            {children}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
