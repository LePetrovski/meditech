import React from 'react';
import { TypeAnimation } from "react-type-animation";
import Tile from './Tile';
import data from '../assets/projects.json';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Projects() {

    return (
        <motion.div 
            className='extranet__project'
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'Welcome Edmund,',
                        1000,
                        'Welcome Dagfe',
                        100,
                        'Welcome Dagger,',
                        100,
                        'Welcome Dagger, :)',
                    ]}
                    speed={50}
                    repeat={false}
                />
            </h1>
            <h2>Project list :</h2>

            <div className='extranet__project__list'>
                {data.projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`}>
                        <Tile {...project} />
                    </Link>
                ))}
            </div>
        </motion.div>
        
    );
}

export default Projects;