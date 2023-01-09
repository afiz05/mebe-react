import React, { Component } from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import Home from "./components/templates/Home";
import Footer from "./components/templates/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/Style.css";

class App extends Component {
  render() {
    return <Home />;
  }
}

export default App;
