import React, { useState } from 'react';
import Login from '../components/Login';
import ProtectedPage from './ProtectedPage';

function Extranet() {

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