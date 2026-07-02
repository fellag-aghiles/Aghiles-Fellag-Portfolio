import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";
import { profile } from "../../data";
import me from "./me.jpg"

const About = () => {
  return (
    <div className="about-container">
      <div
        className="top"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <div>
          <h3>
            <span>#</span>À-propos
          </h3>
          <div className="line"></div>
        </div>
      </div>
      <div className="bottom">
        <div className="left" data-aos="fade-right">
          <p className="intro-line">Bonjour, je suis {profile.name}.</p>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link to="/about">{"En savoir plus ->"}</Link>
        </div>
        <div className="right" data-aos="fade-left">
          <div className="about-card">
            <img src={me} alt="Aghiles Fellag" className="profile-photo" />
            <span>{profile.title}</span>
            <p>{profile.location}</p>
            <p>{profile.availability}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
