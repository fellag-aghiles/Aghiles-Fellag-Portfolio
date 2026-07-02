import React from 'react';
import "./Skills.scss";
import { skillsGroups } from '../../data';

const Skills = () => {
    return (
        <div className='skills-container'>
            <div className="top" data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine">
                <div>
                    <h3><span>#</span>Compétences</h3>
                    <div className='line'></div>
                </div>
            </div>
            <div className="bottom" data-aos="fade-left">
                <div className="shapes" aria-label="Data and AI skills visual">
                    <div className="skills-orb">
                        <span>SQL</span>
                        <span>AI</span>
                        <span>BI</span>
                        <span>ML</span>
                    </div>
                </div>
                <div className="content">
                    {skillsGroups.map((group, index) => (
                        <div className={`item ${["first", "second", "third", "fourth", "fifth", "sixth"][index]}`} key={group.title}>
                            <h4>{group.title}</h4>
                            <p>
                                {group.items.map((skill) => (
                                    <span className='important' key={skill}>#<span>{skill}</span> </span>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
