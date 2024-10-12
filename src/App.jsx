import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './sass/App.scss';
import './sass/composent/frame.scss';
import TemplatePage from './components/TemplatePage';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  

    return (
        <Router >
            <TemplatePage>
                <AnimatedRoutes />
            </TemplatePage>
        </Router>
    );
}

export default App;