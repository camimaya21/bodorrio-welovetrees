import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AuthAPI from "../utils/auth";

import { USER_UPDATED } from "../actions";
import "./loginForm.css";
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: null
    };
  }

  handleLogin() {
    const { username, password } = this.state;
    const { updateUser, history, isLogged } = this.props;

    AuthAPI.login(username, password)
      .then(user => {
        updateUser(user);
        isLogged();
        history.push("/");
      })
      .catch(e => {
        this.setState({ error: e });
      });
  }

  render() {
    const { username } = this.state;
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
            className="login-input"
            placeholder="Pon tu usuario aquí..."
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
          />

          <input
            className="login-input"
            placeholder="Buena suerte con la contraseña..."
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />

          <p className="login-details">
            Si te atascas con la contraseña, llámanos <span role="img" aria-label="wink">😉</span>
          </p>
          <div className="btn-wrapper" style={{justifyContent: 'flex-start'}}>
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
