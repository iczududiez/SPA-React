import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { URL_LOGO_IMG } from './constants';

import { logar } from '../../../redux-flow/actions/login';

import './style.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusLogin: false,
      focusSenha: false,
      loginBlurOrValue: false,
      passBlurOrValue: false,
      error: false,
      viewPass: false,
    };

    // refs
    this.email = null;
    this.pass = null;

    //binders
    this.onFocusLogin = this.onFocusLogin.bind(this);
    this.onBlurLogin = this.onBlurLogin.bind(this);
    this.onFocusPass = this.onFocusPass.bind(this);
    this.onBlurPass = this.onBlurPass.bind(this);
    this.onLogar = this.onLogar.bind(this);
  }

  onFocusLogin = () => this.setState({ ...this.state, loginBlurOrValue: true, focusLogin: true });
  onBlurLogin = () => {
    if (!this.email.value.trim()) {
      this.setState({ ...this.state, loginBlurOrValue: false, focusLogin: false });
    } else {
      this.setState({ ...this.state, focusLogin: false });
    }
  }

  onFocusPass = () => this.setState({ ...this.state, passBlurOrValue: true, focusSenha: true });
  onBlurPass = () => {
    if (!this.email.value) {
      this.setState({ ...this.state, passBlurOrValue: false, focusSenha: false });
    } else {
      this.setState({ ...this.state, focusSenha: false });
    }
  }

  onSeePass = () => this.setState({ ...this.state, viewPass: !this.state.viewPass });
  onLogar = () => {
    if (this.pass.value.trim() && this.email.value.trim()) {
      this.props.logarDispatch({
        data: {
          password: this.pass.value,
          userName: this.email.value,
        },
        success: () => {
          debugger;
        },
        error: () => {
          debugger;
        },
      })
    } else {
      debugger;
      this.setState({
        ...this.state,
        error: true,
      });
    }
  }

  render() {
    const {
      loginBlurOrValue,
      passBlurOrValue,
      focusSenha,
      error,
      focusLogin,
      viewPass,
    } = this.state;

    return (
      <div>
        <div className="heero_logo-header">
          <img src={URL_LOGO_IMG} />
        </div>
        <div className="heero_logo-main">
          <p className="title">Login</p>
          <p className="subtitle">Use o e-mail do condominio</p>
          <div>
            <fieldset className={`${focusLogin ? '--focus' : ''} ${error ? '--error' : ''}`}>
              <legend>{loginBlurOrValue ? 'e-mail' : ''}</legend>
              <input
                ref={email => this.email = email }
                type="text"
                className="heero_logo-input"
                placeholder={!loginBlurOrValue ? 'e-mail' : ''}
                onFocus={this.onFocusLogin}
                onBlur={this.onBlurLogin}
              />
            </fieldset>
            <fieldset className={`${focusSenha ? '--focus' : ''} ${error ? '--error' : ''}`}>
              <legend>{passBlurOrValue ? 'senha' : ''}</legend>
              <input
                ref={pass => this.pass = pass }
                type={viewPass ? 'text' : 'password'}
                className="heero_logo-input"
                placeholder={!passBlurOrValue ? 'senha' : ''}
                onFocus={this.onFocusPass}
                onBlur={this.onBlurPass}
              />
              <span
                className={`mdi ${viewPass ? 'mdi-eye-off' :'mdi-eye'}`}
                onClick={this.onSeePass}
              ></span>
            </fieldset>
          </div>
          <div className="heero_logo-error" style={{ display: error ? 'block' : 'none' }}>
            <p>E-mail e senha incompatíveis, tente novamente</p>
          </div>
          <div>
            <button onClick={this.onLogar}>ENTRAR</button>
          </div>
        </div>
      </div>
    );
  }
}


export const mapStateToProps = () => ({});

export const mapDispatchToProps = dispatch => ({
  // Parent
  logarDispatch: params => dispatch(logar(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
