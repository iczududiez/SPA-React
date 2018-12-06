import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import Card from '../../../components/Common/Card';
import Input from '../../../components/Common/Input';
import Button from '../../../components/Common/Button';

import {
  passValue,
  loginValue,
  logar,
  loginRequest,
} from '../../../redux-flow/actions/_login.actions';

class Login extends Component {
  static propTypes = {
    pass: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    logado: PropTypes.bool.isRequired,
    passValueDpch: PropTypes.func.isRequired,
    loginValueDpch: PropTypes.func.isRequired,
    logarDpch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    // Binders
    this.onChangePassValue = this.onChangePassValue.bind(this);
    this.onChangeLoginValue = this.onChangeLoginValue.bind(this);
    this.onLogar = this.onLogar.bind(this);
  }

  componentWillUpdate(nextProps) {
    const { history, logado } = nextProps;

    if (logado) {
      history.push('/events');
    }
  }

  onChangePassValue = (event) => {
    const { passValueDpch } = this.props;
    passValueDpch(event.target.value);
  }

  onChangeLoginValue = (event) => {
    const { loginValueDpch } = this.props;
    loginValueDpch(event.target.value);
  }

  onLogar = () => {
    const { pass, login, loginRequestDpch } = this.props;
    // const ret = {
    //   sindico: { pass: 'asd123', perfil: { type: 'sindico', condominios: ['1', '2'] } },
    //   admin: { pass: 'dsa321', perfil: { type: 'admin' } },
    //   morador: { pass: '123456', perfil: { type: 'morador', condominios: ['1'] } },
    // };

    if (pass && login) {
      loginRequestDpch({ password: pass, userName: login });
    } else {
      toastr.warning('Aviso!', 'Preencha o login e/ou a senha.');
    }
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
          <label>Usuario:</label>
          <Input
            type="text"
            placeholder="Digite seu usuario"
            onKeyUp={this.onChangeLoginValue}
            onChange={this.onChangeLoginValue}
          />
          <label>Senha:</label>
          <Input
            type="password"
            placeholder="Digite a senha"
            onKeyUp={this.onChangePassValue}
            onChange={this.onChangePassValue}
          />
          <Button
            type="submit"
            classes="__size-medium"
            onClick={this.onLogar}
          >
            {'Logar'}
          </Button>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  passValueDpch: value => dispatch(passValue(value)),
  loginValueDpch: value => dispatch(loginValue(value)),
  logarDpch: perfil => dispatch(logar(perfil)),
  loginRequestDpch: perfil => dispatch(loginRequest(perfil)),
});

const mapStateToProps = ({ loginReducer }) => ({
  pass: loginReducer.pass,
  login: loginReducer.login,
  logado: loginReducer.logado,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
