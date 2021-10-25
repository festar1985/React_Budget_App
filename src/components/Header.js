import React from "react";
import { NavLink } from "react-router-dom";
import { startLogOut } from "../actions/authentication";
import { connect } from "react-redux";
import logo01 from "../images/logo03.png";

const Header = (props) => (
  <header className="header">
    <div className="header-container">
      <div className="header__logo">
        <img className="logo" src={logo01} alt="Logo" />
      </div>
      <div>
        <h1 className="header__title">Budget App</h1>
      </div>
      <div className="button-container">
        <NavLink
          className="header__buttons"
          to="/dashboard"
          activeClassName="is-active"
        >
          DASHBOARD
        </NavLink>
        <NavLink
          className="header__buttons"
          to="/create"
          activeClassName="is-active"
        >
          CREATE
        </NavLink>
        <NavLink
          className="header__buttons"
          to="/help"
          activeClassName="is-active"
        >
          HELP
        </NavLink>

        <button className="header__buttons" onClick={props.signOut}>
          LOGOUT
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  signOut: () => {
    dispatch(startLogOut());
  },
});

export default connect(undefined, mapDispatchToProps)(Header);
