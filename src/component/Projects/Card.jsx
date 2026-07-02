import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdLiveTv } from 'react-icons/md';

const Card = ({project}) => {
    return (
        <div className='card-item' data-aos="fade-right">
            <div className="image project-visual">
                {project.image ? (
                    <img src={project.image} alt={project.title} />
                ) : (
                    <div className="visual-content">
                        <span>{project.category}</span>
                        <strong>{project.status}</strong>
                    </div>
                )}
            </div>
            <p className='lang'>{project.tech}</p>
            <div className="desc">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="btn-container">
                    {project.live && <a href={project.live} className='live' target='_blank' rel="noreferrer"><MdLiveTv />Live</a>}
                    {project.github && <a href={project.github} className='cached' target='_blank' rel="noreferrer"><FaGithub />GitHub</a>}
                </div>
            </div>
        </div>
    );
}

export default Card;
