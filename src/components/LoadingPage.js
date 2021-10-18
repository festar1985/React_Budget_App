import React from "react";
import loader from "../images/material_design_loading.gif";

const LoadingPage = () => (
  <div className="loader--container">
    <img className="loader--image" src={loader} alt="Loading" />
  </div>
);

export default LoadingPage;
