import React from 'react';
import "./Footer.scss";
import { FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { profile } from '../../data';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="top">
                <div className="content">
                    <div>
                        {profile.name}
                        <span>{profile.email}</span>
                    </div>
                    <p>{profile.title} · {profile.location}</p>
                </div>
                <div className="media">
                    <h3>{profile.shortName}</h3>
                    <div className="icons">
                        <a href={profile.github} target='_blank' rel="noreferrer"><FaGithub className='icon'/></a>
                        <a href={profile.linkedin} target='_blank' rel="noreferrer"><SiLinkedin className='icon'/></a>
                        <a href={`mailto:${profile.email}`} target='_blank' rel="noreferrer"><MdEmail className='icon'/></a>
                    </div>
                </div>
            </div>
            <div className='copyright'>© 2026 {profile.name}. Portfolio personnel orienté IA, Data & Big Data.</div>
        </footer>
    );
}

export default Footer;
