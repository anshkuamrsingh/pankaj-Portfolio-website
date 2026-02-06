import React from "react";
import "./Certificate.css";

import javaCert from "../assets/certificates/java.jpeg";
import mernCert from "../assets/certificates/mern.jpeg";
import systemCert from "../assets/certificates/systemdesign.png";
import mongoCert from "../assets/certificates/mongodb.jpeg";
import tcsCert from "../assets/certificates/tcs-ion.jpg";

const certificates = [
  {
    title: "Java Programming",
    issuer: "PW Skills",
    skill: "Core Java & Advanced Java with DSA",
    date: "10 july 2024",
    file: javaCert,
  },
  {
    title: "System Design",
    issuer: "PW Skills",
    skill: "System Design Fundamentals And Workshop",
    date: "6 february 2025",
    file: systemCert,
  },
  {
    title: "MERN Stack",
    issuer: "GRAStech",
    skill: "Full Stack Development (MERN)",
    date: "24 june - 31 july 2025",
    file: mernCert,
  },
  {
    title: "Soft Skills",
    issuer: "Lernovate Enterprises",
    skill: "Soft Skills & Personality Development",
    date: "November- December 2025",
    
  },
  {
    title: "MongoDB",
    issuer: "MongoDB University",
    skill: "Database Management",
    date: "8 Agust 2025",
    file: mongoCert,
  },
  {
    title: "TCS iON Hub",
    issuer: "TCS iON",
    skill: "Industry Readiness And Cummunication Skills",
    date: "4 october 2023",
    file: tcsCert,
  },
];

const Certificate = () => {
  return (
    <section className="certificate-section" id="certification">
      <h2 className="certificate-title">My Certificates</h2>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            {/* DATE BADGE */}
            <span className="cert-date">{cert.date}</span>

            <h3>{cert.title}</h3>

            <p>
              <span>Issuer:</span> {cert.issuer}
            </p>

            <p>
              <span>Skill:</span> {cert.skill}
            </p>

            {/* ✅ View button only if file exists */}
            {cert.file && (
              <a
                href={cert.file}
                
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
