import React from "react";
import "./Contacts.scss";
import Contact from "../../component/Contact/Contact";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { MdEmail, MdPhone, MdLanguage, MdLocationOn } from "react-icons/md";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { profile } from "../../data";

const Contacts = ({ path }) => {
  const links = [
    { icon: <FaGithub className="icon" />, label: profile.githubLabel, href: profile.github },
    { icon: <SiLinkedin className="icon" />, label: profile.linkedinLabel, href: profile.linkedin },
    { icon: <MdEmail className="icon" />, label: profile.email, href: `mailto:${profile.email}` },
    { icon: <MdPhone className="icon" />, label: profile.phone, href: `tel:${profile.phone.replaceAll(' ', '')}` },
    { icon: <MdLanguage className="icon" />, label: profile.websiteLabel, href: profile.website },
    { icon: <MdLocationOn className="icon" />, label: profile.location, href: "" },
  ];

  return (
    <div className="contacts-container">
      <div className="wrapper">
        <Navbar path={path} />
        <div className="up">
          <h1>
            <span>/</span>Contact
          </h1>
          <p>Alternance IA / Data / Big Data / MLOps — septembre 2026</p>
        </div>
        <Contact title={false} />
        <div className="media-container">
          <h3>
            <span>#</span>Liens-directs
          </h3>
          <div className="social">
            {links.map((link, index) => (
              <div data-aos="fade-right" data-aos-delay={(index + 1) * 100} key={link.label}>
                {link.href ? (
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.icon} /{link.label}
                  </a>
                ) : (
                  <span className="item">{link.icon} /{link.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
