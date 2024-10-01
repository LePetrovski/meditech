import React, { useState } from 'react';
import Login from '../components/Login';
import Projects from './Projects';
import '../sass/extranet/Extranet.scss';

function Extranet() {

    return (
        <div className="extranet">
            <div className='extranet__container'>
                <Projects />
            </div>
        </div>
    );
}

export default Extranet;