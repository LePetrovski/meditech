import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsData from '../assets/projects.json';
import '../sass/extranet/ProjectDetail.scss';

function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = projectsData.projects.find(p => p.id === parseInt(id));
        setProject(foundProject);
    }, [id]);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <motion.div
            className="projectDetail"
            layoutId={`tile-${id}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="projectDetail__container">
            <Link to="/projects" className="projectDetail__back">Back</Link>
                <div className="projectDetail__header">
                    <motion.img
                        src={`${project.picture}`}
                        alt="project"
                        className="projectDetail__header__picture"
                        layoutId={`picture-${project.id}`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        />
                    <motion.img
                        src={`${project.partner}`}
                        alt="partner"
                        className="projectDetail__header__partnership"
                        layoutId={`partner-${project.id}`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        />
                </div>

                <div className="project-detail__content">
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <p>Status: {project.status}</p>
                    <p>Category: {project.category}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">Visit project</a>
                </div>
                   
            </div>
        </motion.div>
    );
}

export default ProjectDetail;