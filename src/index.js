import React from "react";

//import library
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//import App.js
import App from "./App";

//import style + assets
// import "./assets/scss/App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
