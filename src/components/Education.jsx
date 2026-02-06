import React from 'react'
import './Education.css'
function Education() {
  return (
    <div>
      <section className="education-section" id="Education">
  <h2 className="section-title">Education</h2>

  <div className="education-container">

    <div className="education-card">
      <span className="edu-dot"></span>
      <h3>Bachelor of Technology (B.Tech)</h3>
      <p className="edu-stream">Computer Science & Engineering</p>
      <p className="edu-institute">Babu Banarasi Das University Lucknow</p>
      <p className="edu-year">2022 – Present</p>
      <p className="edu-score">CGPA: 8.44</p>
    </div>
    <div className="education-card">
      <span className="edu-dot"></span>
      <h3>Soft Skill Training </h3>
      <p className="edu-stream">Learnovate Enterprises</p>
      <p className="edu-institute">Training </p>
      
      <p className="edu-year">2025</p>
      <p className="edu-score">Excellent academic performance</p>
    </div>

     <div className="education-card">
      <span className="edu-dot"></span>
      <h3>Skill</h3>
      <p className="edu-institute" id='java'>java with Dsa and System Design,Mern stack</p>
       <p className="edu-year"><span id='java'>Java :</span> Java Oops , Jdbc, Hibernate SpringBoot </p>
       <p className="edu-year"><span id='java'>Mern Stack : </span>Html5 Css3 javascript React.js Node.js express.js MongoDb </p>
       <p className="edu-year"><span id='java'>Developer Tools & Deployment:</span> VS Code, Git, GitHub, Postman, Netlify, Render, Vercel</p>
    </div>

    <div className="education-card">
      <span className="edu-dot"></span>
      <h3>Secondary Education(12th)</h3>
      <p className="edu-institute">Mahamana malviy Inter College Varanasi</p>
      <p className="edu-stream">Science (PCM)</p>
      <p className="edu-institute">U.P. Board</p>
      <p className="edu-year">2021</p>
      <p className="edu-score">Percentage: 74.4%</p>
    </div>

    <div className="education-card">
      <span className="edu-dot"></span>
      <h3>Primary Education(10th)</h3>
      <p className="edu-institute">Mahamana malviy Inter College Varanasi</p>
      <p className="edu-institute">U.P. Board</p>
      <p className="edu-year">2019</p>
      <p className="edu-score">Percentage: 81%</p>
    </div>

  </div>
</section>

    </div>
  )
}

export default Education
