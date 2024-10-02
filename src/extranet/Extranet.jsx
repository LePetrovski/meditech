import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Projects from './Projects';
import '../sass/extranet/Extranet.scss';

function Extranet() {
    const location = useLocation();
    const isProjectDetail = location.pathname.includes('/projects/');

    return (
        <div className="extranet">
            <div className='extranet__container'>
                {!isProjectDetail && <Projects />}
                <Outlet />
            </div>
        </div>
    );
}

export default Extranet;