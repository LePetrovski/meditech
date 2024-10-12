import React, { useState } from 'react';
import Login from './components/Login';
import Frontpage from './frontpage/Frontpage';
import Extranet from './extranet/Extranet';
import ProjectDetail from './extranet/ProjectDetail';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const location = useLocation();

    return(
        <AnimatePresence  mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Frontpage />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/projects" /> : <Login handleLogin={ handleLogin } />} />
                <Route path="/projects" element={isAuthenticated ? <Extranet isAuthenticated={ isAuthenticated }/> : <Navigate to="/login" />}>
                    <Route path=":id" element={isAuthenticated ? <ProjectDetail /> : <Navigate to="/login" />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}