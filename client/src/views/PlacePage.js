import React, {Fragment} from "react";
import Place from "../components/Place";

const PlacePage= ({history}) => {
    return (
      <Fragment>
        <Place history={history} />
      </Fragment>
    );
  };

export default PlacePage