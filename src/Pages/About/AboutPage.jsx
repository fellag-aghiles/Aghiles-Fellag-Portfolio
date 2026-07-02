import React from 'react';
import "./AboutPage.scss";
import Navbar from '../../component/Navbar/Navbar';
import About from '../../component/about/About';
import Footer from '../../component/footer/Footer';
import { skillsGroups, profile } from '../../data';

const AboutPage = ({ path }) => {
    return (
        <div className='about-page-container'>
            <div className="wrapper">
                <Navbar path={path} />
                <About />
                <div className="skills-table">
                    <h3><span>#</span>Parcours & compétences</h3>
                    <p className="about-note">{profile.headline} {profile.availability}.</p>
                    <div className="items">
                        {skillsGroups.map((group, index) => (
                            <div className="item" data-aos="fade-right" data-aos-delay={(index + 1) * 100} key={group.title}>
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
            <Footer />
        </div>
    );
}

export default AboutPage;
