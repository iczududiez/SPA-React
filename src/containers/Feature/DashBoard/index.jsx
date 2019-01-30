import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';

import './style.scss';

Moment.locale('pt-BR');

class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {} = this.state;

    return (
      <div>
        <div className="heero_dash-header">
          <p>{Moment().format('LL')}</p>
          <h1>DashBoard</h1>
        </div>
      </div>
    );
  }
}


export const mapStateToProps = () => ({});

export const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
