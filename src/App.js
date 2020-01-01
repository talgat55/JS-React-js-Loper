import React from 'react';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import {BrowserRouter as Router,  Route, Switch } from "react-router-dom";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact component={Error}/>
            </Switch>
        </Router>
    );
}

export default App;
