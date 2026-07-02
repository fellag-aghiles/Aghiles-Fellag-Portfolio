import React, { useState  } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import { FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { profile } from '../../data';

const Navbar = ({path = ""}) => {
    const [menu, setMenu] = useState(false);

    const closeMenu = () => setMenu(false);
    const socialLinks = (
        <>
            <a href={profile.github} target='_blank' rel="noreferrer"><FaGithub className='icon'/></a>
            <a href={profile.linkedin} target='_blank' rel="noreferrer"><SiLinkedin className='icon'/></a>
            <a href={`mailto:${profile.email}`} target='_blank' rel="noreferrer"><MdEmail className='icon'/></a>
        </>
    );

    return (
        <div className='nav-container'>
            <div className='falling-contact'>
                <div className="line-div"></div>
                <div className="icons">{socialLinks}</div>
            </div>
            <h1><Link to='/'>{profile.name}</Link></h1>
            <nav>
                <ul>
                    <li><Link className={`${path === "" ? "color-white" : "color-gray"}`} to='/'><span>#</span>home</Link></li>
                    <li><Link className={`${path === "projects" ? "color-white" : "color-gray"}`} to='/projects'><span>#</span>projets</Link></li>
                    <li><Link className={`${path === "about" ? "color-white" : "color-gray"}`} to='/about'><span>#</span>profil</Link></li>
                    <li><Link className={`${path === "contacts" ? "color-white" : "color-gray"}`} to='/contacts'><span>#</span>contact</Link></li>
                </ul>
            </nav>

            {!menu ? <img src="./icons/burger.png" alt="menu" className='menu-icons' onClick={() => setMenu(prev => !prev)}/> 
            : <img src="./icons/close.png" alt="menu" onClick={() => setMenu(prev => !prev)}  className='menu-icons'/>}
            {menu && <div className="sidebar-container">
                <div className="sidebar">
                    <div className="links">
                        <Link onClick={closeMenu} className={`${path === "" ? "color-white" : "color-gray"}`} to='/'><span>#</span>home</Link>
                        <Link onClick={closeMenu} className={`${path === "projects" ? "color-white" : "color-gray"}`} to='/projects'><span>#</span>projets</Link>
                        <Link onClick={closeMenu} className={`${path === "about" ? "color-white" : "color-gray"}`} to='/about'><span>#</span>profil</Link>
                        <Link onClick={closeMenu} className={`${path === "contacts" ? "color-white" : "color-gray"}`} to='/contacts'><span>#</span>contact</Link>
                    </div>
                    <div className="link-icon">{socialLinks}</div>
                </div>
            </div>}
        </div>
    );
}

export default Navbar;
