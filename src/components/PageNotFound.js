import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <p>
    404 Page Not found <Link to="/dashboard">Go Home</Link>
  </p>
);

export default PageNotFound;
