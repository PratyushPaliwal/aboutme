import React from 'react';
import { Router, Redirect } from '@reach/router';
import Home from '../pages/Home';

const Routes = () => {
    return (
        <Router>
            <Home path="/aboutme" />
        </Router>
    );
}

export default Routes;