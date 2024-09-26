import React, { useState } from 'react';
import Login from '../components/Login';
import ProtectedPage from './ProtectedPage';

function Extranet() {

    return (
        <div>
            <ProtectedPage />
        </div>
    );
}

export default Extranet;