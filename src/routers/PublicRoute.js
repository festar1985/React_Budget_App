import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...restProps
}) => (
  <Route
    component={(props) =>
      isAuthenticated ? (
        <Redirect path="/dashboard" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
