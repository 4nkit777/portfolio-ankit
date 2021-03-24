import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// pages
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import App from "./App";
import AboutGame from "./pages/subpages/AboutGame";
import Loading from "./components/Loading";
// import Error from "./pages/Error";

const RouteApp = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      return setDone(true);
    }, 2000);
  });

  return (
    <div>
      {!done ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default RouteApp;
