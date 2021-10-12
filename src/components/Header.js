import React from "react";
import { NavLink } from "react-router-dom";
import { startLogOut } from "../actions/authentication";
import { connect } from "react-redux";

const Header = (props) => (
  <header>
    <h1> Budget APP</h1>

    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
    <button onClick={props.signOut}>LogOut</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  signOut: () => {
    dispatch(startLogOut());
  },
});

export default connect(undefined, mapDispatchToProps)(Header);
