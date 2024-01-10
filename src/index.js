import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");

// Envuelve tu componente principal con BrowserRouter y establece la ruta base
ReactDOM.render(
  <Router basename="/">
    <App />
  </Router>,
  rootElement
);
