import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
// import PropTypes from 'prop-types';

class HeathFinancial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ['Entrada', 'Saida'],
        datasets: [{
          data: [155, 100], 
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        }],
      },
    };
  }

  render() {
    return (
      <Fragment>
        <div className="heero_hf-container heero_content">
          <h3>Nome do Condominio</h3>
          <Pie data={this.state.data}/>
        </div>
      </Fragment>
    );
  }
}


// const mapDispatchToProps = dispatch => ({
const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeathFinancial);
