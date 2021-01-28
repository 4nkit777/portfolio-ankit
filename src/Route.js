import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
// import Aside from './components/Aside';
// import Main from './components/Main';
import App from './App';
import Background from './Background';

const RouteApp = () => {
    return (
        <div className='container'>
            <Router>
                <Navbar />
                {/* <Background /> */}
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route  path='/about' component={About} />
                    <Route  path='/projects' component={Projects} />
                    <Route  path='/skills' component={Skills} />
                </Switch>
                {/* <div className='d-flex mt-3'>
                    <Aside />
                    <Main />
                </div> */}
            </Router>
        </div>

    );
}

export default RouteApp;