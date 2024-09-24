import React, { useState } from 'react';
import Login from '../extranet/Login';
import ProtectedPage from './ProtectedPage';

function Extranet() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <div>
            {isAuthenticated ? (
                <ProtectedPage />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default Extranet;