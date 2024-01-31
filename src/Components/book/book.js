import { Fragment } from "react";
import Availiblebook from "./Availiblebook";

const book = (props) => {
  return (
    <Fragment>
      <bookSummary />
      <Availiblebook />
    </Fragment>
  );
};

export default book;
