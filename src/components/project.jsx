import React from "react";
import "./project.css";

const Project = () => {
  return (
    <section className="project-section" id="Project">
      <h2 className="section-title">My Projects</h2>

      <div className="project-grid fixed-grid">
        {/* CARD 1 */}
        <div className="project-card">
          <div className="project-content">
            <h3 className="project-title">Green Bazar Web Application </h3>
            <p className="project-desc">
              A full-stack grocery e-commerce application featuring role-based
              authentication, admin management, secure payments, RESTful APIs,
              And data management with Seller DashBoard and a fully responsive
              UI.
            </p>

            <div className="tech-stack">
              <span>Html</span>
              <span>CSS</span>
              <span>javascript</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>express.js</span>
              <span>mongodb</span>
              <span>multer</span>
              <span>Cloudinary</span>
              <span>Stripe</span>
              <span>vercel</span>
            </div>

            <ul className="project-features">
              <li>User Authentication & Secure Login</li>
              <li>Product Browsing with Categories & Search</li>
              <li>Smart Cart & Checkout System</li>
              <li>Online Payment Integration</li>
              <li>Admin Panel for Product & Order Management</li>
            </ul>

            <div className="project-buttons">
              <a href="https://greenbazar.vercel.app" className="btn live">
                Live Demo
              </a>
              <a
                href="https://github.com/anshkuamrsingh/Ecomerse"
                className="btn github"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="project-card">
          <div className="project-content">
            <h3 className="project-title">Lotus Ai a virtual Assistant</h3>
            <p className="project-desc">
              A voice-based virtual assistant that takes audio input, processes
              voice commands, and delivers real-time responses. It enables
              natural conversation and demonstrates real-time speech handling
              and intelligent automation.
            </p>

            <div className="tech-stack">
              <span>Html</span>
              <span>Css</span>
              <span>javascript</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDb Atlas</span>
              <span>Google gemini Api</span>
              <span>NLP</span>
            </div>

            <ul className="project-features">
              <li>Real-Time Speech Processing</li>
              <li>Real-Time Speech Processing</li>
              <li>Intelligent Command Recognition</li>
              <li>API-Based Information Retrieval</li>
              <li>Smooth Conversational Experience</li>
            </ul>

            <div className="project-buttons">
              <a
                href="https://virtualassistance-163w.onrender.com"
                className="btn live"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/anshkuamrsingh/VirtualAssistance"
                className="btn github"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="project-card">
          <div className="project-content">
            <h3 className="project-title">
              Chay with Singh a coffe & tea web Appliaction
            </h3>
            <p className="project-desc">
              Chay with Singh is a personal branding website built with a clean
              and modern UI. It focuses on smooth navigation, responsive design,
              and clear content presentation. The project showcases strong
              frontend development and user experience skills.
            </p>

            <div className="tech-stack">
              <span>Html</span>
              <span>Css</span>
              <span>Javscript</span>
              <span>Bootsrtap</span>
            </div>

            <ul className="project-features">
              <li>Personal Branding Focus </li>
              <li>Responsive & Modern UI</li>
              <li>Smooth Navigation & Clean Structure</li>
            </ul>

            <div className="project-buttons">
              <a href="https://chaywithsingh.netlify.app/" className="btn live">
                Live Demo
              </a>
              <a
                href="https://github.com/anshkuamrsingh/Foodiess-and-Tea-bar"
                className="btn github"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="project-card">
          <div className="project-content">
            <h3 className="project-title">Todo App</h3>
            <p className="project-desc">
              A simple functional To-Do application designed to manage daily
              tasks efficiently. It allows users to add, update, delete, and
              organize tasks in a structured way. user interaction, and clean UI
              design.
            </p>

            <div className="tech-stack">
              <span>Html</span>
              <span>Css</span>
              <span>JavaScript</span>
             < span>React.js</span>
            </div>

            <ul className="project-features">
              <li>Task Creation & Management</li>
              <li>Task Status Tracking</li>
              <li>Clean & Responsive Interface</li>
            </ul>

            <div className="project-buttons">
              <a
                href="https://todoappwithsingh.netlify.app"
                className="btn live"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/anshkuamrsingh/TodoApp-React"
                className="btn github"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
