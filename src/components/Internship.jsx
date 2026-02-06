import React from "react";
import "./Internship.css";

const Internship = () => {
  return (
    <section className="internship-section" id="internship">
      <h2 className="section-title">My Internships</h2>

      <div className="internship-container">
        <div className="internship-card">
          <h3>Java Intern – NativeSoftTech</h3>
          <p className="duration">1 Feb 2025 – 1 Apr 2025 | Work From Home</p>

          <ul>
            <li>
              Applied core Object-Oriented Programming principles to build
              scalable Java applications
            </li>
            <li>
              Designed and developed interactive desktop applications using Java
              Swing
            </li>
            <li>
              Successfully connected frontend interfaces with backend logic and
              workflows
            </li>
          </ul>

          <a href="/java-certificate.jpg.jpeg" className="btn">
            View Certificate
          </a>
        </div>

        <div className="internship-card">
          <h3>Web Development Intern – NativeSoftTech</h3>
          <p className="duration">10 Sep 2025 – 10 Dec 2025 | Work From Home</p>

          <p className="certificate-text">
            <li>
              Built a fully functional GreenBazar e-commerce website from
              scratch
            </li>
            <li>
              Enhanced UI responsiveness by 40% ensuring smooth performance on
              all devices
            </li>
            <li>
              Integrated backend routes and implemented secure online payment
              functionality
            </li>
            <li>
              Designed and connected MongoDB database for reliable data storage
              and retrieval
            </li>
          </p>

          <a href="/web-certificate.jpg.jpeg" className="btn">
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Internship;
