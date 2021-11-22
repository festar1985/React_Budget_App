import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/authentication";
import google from "../images/google-48.png";
import apple from "../images/apple-logo-48.png";
import github from "../images/github-48.png";
import logoMain from "../images/logo_main.png";

const LoggingPage = (props) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <img className="box-main_logo" src={logoMain} alt="logo" />
        <div>
          <h1 className="box-layout__title">
            Welcome to your Budget Application
          </h1>
          <p className="box-layout__title">Your way to control expenses</p>
        </div>

        <div className="box-button">
          <button
            className="button-login button-login-hover"
            onClick={props.startLogin}
          >
            <img className="logging_logo" src={google} alt="GLogo" />
            <div>Login with Google</div>
          </button>
          <button className="button-login button-temp">
            <img className="logging_logo" src={apple} alt="ALogo" />
            <div>Login with Apple</div>
          </button>
          <button className="button-login button-temp">
            <img className="logging_logo" src={github} alt="GitLogo" />
            <div>Login with GitHub</div>
          </button>
        </div>
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
