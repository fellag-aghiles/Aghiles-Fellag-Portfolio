import React from 'react';
import "./contact.scss";
import { MdEmail, MdPhone, MdLocationOn, MdLanguage } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { CopyButton, Tooltip } from '@mantine/core';
import Form from '../Form/Form';
import { profile } from '../../data';

const Contact = ({title = true}) => {
    const contacts = [
        { label: profile.email, value: profile.email, href: `mailto:${profile.email}`, icon: <MdEmail className='icon'/> },
        { label: profile.phone, value: profile.phone, href: `tel:${profile.phone.replaceAll(' ', '')}`, icon: <MdPhone className='icon'/> },
        { label: profile.linkedinLabel, value: profile.linkedin, href: profile.linkedin, icon: <SiLinkedin className='icon'/> },
        { label: profile.githubLabel, value: profile.github, href: profile.github, icon: <FaGithub className='icon'/> },
        { label: profile.websiteLabel, value: profile.website, href: profile.website, icon: <MdLanguage className='icon'/> },
        { label: profile.location, value: profile.location, href: '', icon: <MdLocationOn className='icon'/> },
    ];

    return (
        <div className='contact-container'>
            {title && <div className="top" data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine">
                <div>
                    <h3><span>#</span>Contact</h3>
                    <div className='line'></div>
                </div>
            </div>}
            <div className="bottom" data-aos="fade-right">
                <p>Je suis disponible pour une alternance IA, Data, Big Data ou MLOps à partir de septembre 2026. Basé à Lille, je suis aussi mobile vers Paris / Île-de-France selon les besoins de l’équipe.</p>
                <div className="message">
                    <span>Coordonnées</span>
                    {contacts.map((contact) => (
                        <CopyButton value={contact.value} timeout={2000} key={contact.label}>
                            {({ copied, copy }) => (
                                <Tooltip label={copied ? 'Copié' : 'Copier'} withArrow position="right">
                                    {contact.href ? (
                                        <a href={contact.href} target='_blank' rel="noreferrer" className="item" onClick={copy}>
                                            {contact.icon}<span>{contact.label}</span>
                                        </a>
                                    ) : (
                                        <div className="item" onClick={copy}>
                                            {contact.icon}<span>{contact.label}</span>
                                        </div>
                                    )}
                                </Tooltip>
                            )}
                        </CopyButton>
                    ))}
                </div>
            </div>
            <Form />
        </div>
    );
}

export default Contact;
