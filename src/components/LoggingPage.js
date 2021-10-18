import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/authentication";

const LoggingPage = (props) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">
          Welcome to the your Budget Application
        </h1>
        <p>Here you will control your expenses</p>
        <button className="button-login" onClick={props.startLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => {
    dispatch(startLogin());
  },
});

export default connect(undefined, mapDispatchToProps)(LoggingPage);
