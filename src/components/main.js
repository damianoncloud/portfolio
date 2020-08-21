import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage.js';
import AboutMe from './aboutme.js';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';

const Main = () => {
    
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
        </Switch>
    )
    
}

export default Main;