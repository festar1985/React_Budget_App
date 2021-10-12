import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Header from "../components/Header";

const PrivatRoute = ({
  isAuthenticated,
  component: Component,
  ...restProps
}) => (
  <Route
    {...restProps}
    component={(props) =>
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivatRoute);
