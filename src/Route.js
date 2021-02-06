import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
import App from "./App";

const RouteApp = () => {
  return (
    <div className=''>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/skills' component={Skills} />
        </Switch>
      </Router>
    </div>
  );
};

export default RouteApp;
