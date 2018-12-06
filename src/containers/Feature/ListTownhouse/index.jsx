import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  loadDataListTownHouse,
  loadDataTownHouse,
} from '../../../redux-flow/actions/service.actions';

class ListTownHouse extends Component {
  constructor(props) {
    super(props);

    // renderList
    this.renderList = this.renderList.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
    this.onLoadData = this.onLoadData.bind(this);
    this.onSuccessLoadData = this.onSuccessLoadData.bind(this);

    // state
    this.state = { data: [] };
  }

  componentDidMount() {
    this.onLoadData()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      data: nextProps.data,
    });
  }

  onLoadData = () => {
    const { loadDataListTownHouseDispatch } = this.props;
    loadDataListTownHouseDispatch({
      success: this.onSuccessLoadData,
    })
  }

  onSuccessLoadData = (data) => {
    this.setState({
      ...this.state,
      data: data,
    });
  }

  renderList = () => {
    const { data } = this.state;

    if (data.length) {
      return (
        <ul>
          {data.map(dataItem => this.renderListItem(dataItem))}
        </ul>
      );
    }

    return null;
  }

  renderListItem = (data) => {
    return (<li key={data.id}>{data.name}</li>);
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadDataListTownHouseDispatch: params => dispatch(loadDataListTownHouse(params)),
  loadDataTownHouseDispatch: params => dispatch(loadDataTownHouse(params)),
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListTownHouse);
