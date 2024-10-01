import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsData from '../assets/projects.json';
import '../sass/extranet/ProjectDetail.scss';

function ProjectDetail() {
    const { id } = useParams();
    const project = projectsData.projects.find(p => p.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <motion.div
            className="projectDetail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
        >
            <div children="projectDetail__container">
                <div className="projectDetail__header">
                    <motion.img
                        src={`${project.picture}`}
                        alt="project"
                        className="projectDetail__header__picture"
                        layoutId={`picture-${project.id}`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                    <motion.img
                        src={`${project.partner}`}
                        alt="partner"
                        className="projectDetail__header__partnership"
                        layoutId={`partner-${project.id}`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                </div>

                <motion.div
                    className="project-detail__content"
                    layoutId={`content-${id}`}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <p>Status: {project.status}</p>
                    <p>Category: {project.category}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">Visit project</a>
                </motion.div>
                   
            </div>
        </motion.div>
    );
}

export default ProjectDetail;