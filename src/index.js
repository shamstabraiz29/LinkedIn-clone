import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";

ReactDOM.render(
  <>
    <Router>
      <Routing></Routing>
    </Router>
  </>,
  document.getElementById("root")
);
