import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {
  constructor(prop) {
    super(props);

    this.state = {
      tabOne: { open: true },
      tabTwo: { open: false },
    }
  }



  render() {
    return (
      <div className="heero_tabs heero_content">
        <div className="heero_tabs-header">
          <span className="heero_tabs-item">
            
          </span>
          <span className="heero_tabs-item">
            
          </span>
        </div>
        <div className="heero_tabs-content">
          <div className="heero-tabs-item">
          </div>
          <div className="heero-tabs-item">
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadDataListTownHouseDispatch: params => dispatch(loadDataListTownHouse(params)),
  loadDataTownHouseDispatch: params => dispatch(loadDataTownHouse(params)),
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
