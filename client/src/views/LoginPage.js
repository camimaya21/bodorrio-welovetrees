import React, { Fragment } from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = ({ history, ...props }) => {
  return (
    <Fragment>
      <LoginForm history={history} isLogged={props.isLogged} />
    </Fragment>
  );
};

export default LoginPage;
