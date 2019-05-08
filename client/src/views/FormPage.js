import React, { Fragment } from "react";
import Form from "../components/Form";

const FormPage= ({history}) => {
  return (
    <Fragment>
      <Form history={history} />
    </Fragment>
  );
};

export default FormPage