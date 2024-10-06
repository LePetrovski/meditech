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
            <Link to="/projects" className="projectDetail__back">Back to list</Link>
                <div className="projectDetail__header">
                    <motion.img
                        src={`/project/${project.picture}`}
                        alt="project"
                        className="projectDetail__header__picture"
                        layoutId={`picture-${project.id}`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        />
                        <div className="projectDetail__header__partnership">
                            <div className='projectDetail__header__partnership__text'>
                                <h3>{project.partnerName}</h3>
                            </div>
                            <motion.img
                                src={`/project/${project.partner}`}
                                alt="partner"
                                className="projectDetail__header__partnership__logo"
                                layoutId={`partner-${project.id}`}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                </div>

                <div className="projectDetail__content">
                    <div className='projectDetail__content__wrapper'>
                        <h1 className="projectDetail__content__title">{project.name}</h1>
                        <p className='projectDetail__content__subtitle'>{project.description}</p>
                        <div className='projectDetail__content__status'>
                            Status:
                            {(() => {
                                switch(project.status) {
                                case 0:
                                    return <p data-status={project.status}>Prototype send</p>
                                case 1:
                                    return <p data-status={project.status}>Stagging</p>
                                case 2:
                                    return <p data-status={project.status}>Development</p>
                                default:
                                    return null
                                }
                            })()}
                        </div>
                    <p className='projectDetail__content__category'>{project.category}</p>
                    </div>
                </div>

                <div className="projectDetail__main" dangerouslySetInnerHTML={{ __html: project.report }} />

                { project.id === 7 &&
                    <div className="projectDetail__project">
                        CANVAS
                    </div>
                }
                   
            </div>
        </motion.div>
    );
}

export default ProjectDetail;