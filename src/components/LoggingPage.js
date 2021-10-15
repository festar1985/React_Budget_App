import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/authentication";

const LoggingPage = (props) => {
  return (
    <div className="box-layout">
      <h1> Welcome to the Budget App please login</h1>
      <button onClick={props.startLogin}>Login</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => {
    dispatch(startLogin());
  },
});

export default connect(undefined, mapDispatchToProps)(LoggingPage);
