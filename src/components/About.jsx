import React, { useRef } from "react";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiPostman, SiExpress } from "react-icons/si";
import "./About.css";

const About = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className="about-section" id="about">
      <div
        className="about-container"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="about-left">
          <h2>About Me</h2>

          <p>
            I am a dedicated software developer with a strong foundation in
            <strong> Java</strong> and experience in
            <strong> MERN Stack development</strong>. I work on both frontend and
            backend to build complete applications.
          </p>

          <p>
            I enjoy solving problems, learning new technologies, and creating
            scalable, user-friendly solutions with a positive mindset.
          </p>

          <h4>Technologies I Work With</h4>
          <p className="tech-text">
            Java, HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB,
            Postman, Git
          </p>
        </div>

        <div className="about-divider"></div>

        <div className="about-right">
          <FaJava />
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <FaNodeJs />
          <SiExpress />
          <SiMongodb />
          <SiPostman />
          <FaGitAlt />
        </div>
      </div>
    </section>
  );
};

export default About;
