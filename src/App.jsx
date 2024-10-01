import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Frontpage from './frontpage/Frontpage';
import './sass/App.scss';
import './sass/composent/frame.scss';
import Extranet from './extranet/Extranet';
import TemplatePage from './components/TemplatePage';
import ProjectDetail from './extranet/ProjectDetail';
import { AnimatePresence } from 'framer-motion';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };


    return (
        <TemplatePage>
            <AnimatePresence>
                <Router >
                    <Routes>
                        <Route path="/" element={<Frontpage />} />
                        <Route path="/login" element={isAuthenticated ? <Navigate to="/extranet" /> : <Login handleLogin={ handleLogin } />} />
                        <Route path="/extranet" element={isAuthenticated ? <Extranet isAuthenticated={ isAuthenticated }/> : <Navigate to="/login" />} />
                        <Route path="/project/:id" element={isAuthenticated ? <ProjectDetail /> : <Navigate to="/login" />} />
                    </Routes>
                </Router>
            </AnimatePresence>
        </TemplatePage>
    );
}

export default App;