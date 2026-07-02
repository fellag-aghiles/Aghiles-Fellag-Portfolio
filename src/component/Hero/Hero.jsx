import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import { profile, highlights } from "../../data";
import me from "./me.jpg"

const Hero = () => {
  const words = profile.roles;

  const TypingEffect = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState("");

    useEffect(() => {
      let currentIndex = 0;
      let word = "";
      const intervalId = setInterval(() => {
        word = word + words[currentWordIndex][currentIndex];
        setCurrentWord(word);
        currentIndex++;
        if (currentIndex === words[currentWordIndex].length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setCurrentWord("");
          }, 1100);
        }
      }, 120);

      return () => clearInterval(intervalId);
    }, [currentWordIndex, words]);

    return <span className="typing">{currentWord}</span>;
  };

  return (
    <div className="hero-container">
      <div className="left" data-aos="fade-right">
        <span className="eyebrow">{profile.availability}</span>
        <h1>
          {profile.name} <br className="break-line" />
          <TypingEffect words={words} /> <br />
          <span className="typing">Engineer Junior</span>
        </h1>
        <p>{profile.summary}</p>
        <div className="hero-actions">
          <Link to="/contacts">Me contacter</Link>
          <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-action">
            Voir GitHub
          </a>
        </div>
      </div>
      <div className="right" data-aos="fade-left">
        <div className="profile-orb" aria-label="Aghiles Fellag profile card">
          <div className="orb-topline">DATA · IA · BIG DATA</div>
        <img src={me} alt="Aghiles Fellag" className="profile-photo" />
          <div className="terminal-card">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <code>$ build --career data-ai</code>
          </div>
        </div>
        <div className="card">
          <div className="square"></div>
          <div className="content">
            open to <span>alternance IA/Data</span>
          </div>
        </div>
        <div className="hero-tags">
          {highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
