import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AuthAPI from "../utils/auth";
import classNames from "classnames"

import { USER_UPDATED } from "../actions";
import "./loginForm.css";
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      missingCredentials: null,
      wrongCredentials: null
    }
  }

  handleLogin() {
    const { username, password } = this.state;
    const { updateUser, history, isLogged } = this.props;

    username.length && password.length ? (

      AuthAPI.login(username, password)
        .then(user => {
          updateUser(user);
          isLogged();
          history.push("/");
        })
        .catch(e => {
          this.setState({ wrongCredentials: true });
        })
    ) : (
    this.setState({missingCredentials: true })
    )
  }

  render() {
    const { username, missingCredentials, wrongCredentials } = this.state;
    const css = classNames('login-input', {'login-error': missingCredentials || wrongCredentials })

    return (
      <div className="login-page">
        <div className="login-wrapper">
          <h1 className="login-title">
            Cami y Ale{" "}
            <span role="img" aria-label="heart">
              {" "}
              ❤️
            </span>
          </h1>
          <h3 className="login-subtitle">
            18 - 05 - 2019 En un lugar de Madrid...
          </h3>

          <input
            className={css}
            placeholder="Pon tu usuario aquí..."
            value={username}
            onChange={e => this.setState({ username: e.target.value, missingCredentials: false, wrongCredentials: false
            })}
          />

          <input
            className={css}
            placeholder="Buena suerte con la contraseña..."
            type="password"
            onChange={e => this.setState({ password: e.target.value, missingCredentials: false, wrongCredentials: false })}
          />
          {missingCredentials && <p className="login-error-text">Ups, falta el usuario o la contraseña</p>}
          {wrongCredentials && <p className="login-error-text">Vaya... contraseña incorrecta</p>}

          <p className="login-details">
            Si te atascas con la contraseña, llámanos <span role="img" aria-label="wink">😉</span>
          </p>
          <div className="btn-wrapper disable" style={{justifyContent: 'flex-start'}}>
            <button style={{width: '100%'}} onClick={() => this.handleLogin()}>> Empezar</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = ({ user }) => {
  return {
    user
  };
};

const mapDispatch = dispatch => {
  return {
    updateUser: payload => {
      dispatch({
        type: USER_UPDATED,
        payload
      });
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(withRouter(LoginForm));
