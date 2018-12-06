import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import Card from '../../../components/Common/Card';
import { setFbLoginData } from '../../../redux-flow/actions/login.actions';

class Login extends Component {
  static propTypes = {
    // states
    // accessToken: PropTypes.string.isRequired,
    // data_access_expiration_time: PropTypes.number.isRequired,
    // email: PropTypes.string.isRequired,
    // expiresIn: PropTypes.number.isRequired,
    // id: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // picture: PropTypes.shape({}).isRequired,
    // reauthorize_required_in: PropTypes.number.isRequired,
    // signedRequest: PropTypes.string.isRequired,
    userID: PropTypes.string.isRequired,
    // actions
    setFbLoginDataDispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    // Binders
    this.handleResponse = this.handleResponse.bind(this);
  }

  componentWillUpdate(nextProps) {
    const { userID, history } = nextProps;

    if (userID) {
      history.push('/events');
    }
  }

  handleResponse = (response) => {
    this.props.setFbLoginDataDispatch(response);
  }

  renderHeader = () => (
    <h3 className="h3 __color-base __weight-bolder __size-large">Login</h3>
  )

  render() {
    return (
      <div className="wdyg_full-screen __flex-ai_center __h-400">
        <Card
          header={this.renderHeader}
        >
          <FacebookLogin
            appId="186139758989534"
            autoLoad
            fields="name,email,picture"
            callback={this.handleResponse}
          />
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setFbLoginDataDispatch: payload => dispatch(setFbLoginData(payload)),
});

const mapStateToProps = ({ loginReducer }) => ({
  accessToken: loginReducer.accessToken,
  data_access_expiration_time: loginReducer.data_access_expiration_time,
  email: loginReducer.email,
  expiresIn: loginReducer.expiresIn,
  id: loginReducer.id,
  name: loginReducer.name,
  picture: loginReducer.picture,
  reauthorize_required_in: loginReducer.reauthorize_required_in,
  signedRequest: loginReducer.signedRequest,
  userID: loginReducer.userID,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
