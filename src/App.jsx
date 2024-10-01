import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ProtectedPage from './extranet/ProtectedPage';
import Frontpage from './frontpage/Frontpage';
import './sass/App.scss';
import './sass/composent/frame.scss';
import Extranet from './extranet/Extranet';
import TemplatePage from './components/TemplatePage';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <TemplatePage>
            <Router>
                <Routes>
                    <Route path="/" element={<Frontpage />} />
                    <Route path="/login" element={isAuthenticated ? <Navigate to="/extranet" /> : <Login handleLogin={ handleLogin } />} />
                    <Route path="/extranet" element={isAuthenticated ? <Extranet isAuthenticated={ isAuthenticated }/> : <Navigate to="/login" />} />
                </Routes>
            </Router>
        </TemplatePage>
    );
}

export default App;