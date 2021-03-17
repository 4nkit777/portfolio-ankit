import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// pages
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import App from "./App";
import AboutGame from "./pages/subpages/AboutGame";
// import Error from "./pages/Error";

const RouteApp = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/skills' component={Skills} />
        </Switch>
        <Route exact path='/aboutgame' component={AboutGame} />
      </Router>
    </div>
  );
};

export default RouteApp;
