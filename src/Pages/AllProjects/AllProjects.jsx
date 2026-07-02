import React from 'react';
import Projects from '../../component/Projects/Projects';
import "./AllProjects.scss";
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/footer/Footer';

const AllProjects = ({path}) => {
    return (
        <div className='Projects-container'>
            <div className="wrapper">
                <Navbar path={path} />
                <div className="up">
                    <h1><span>/</span>Projets</h1>
                    <p>Une sélection de projets IA, Data, BI, automatisation et développement.</p>
                </div>
                <Projects title={"projets-principaux"} typeProject={"big"}/>
                <Projects title={"autres-projets"} typeProject={"small"}/>
            </div>
            <Footer />
        </div>
    );
}

export default AllProjects;
