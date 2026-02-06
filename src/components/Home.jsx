import React, { useEffect, useState } from "react";
import "./Home.css";
import profileImg from "../assets/profile.jpeg";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  const fullName = "Pankaj Kumar Singh";
  const [typedName, setTypedName] = useState("");
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval;

    const startTyping = () => {
      setTypedName("");
      index = 0;

      interval = setInterval(() => {
        setTypedName(fullName.slice(0, index + 1));
        index++;

        if (index === fullName.length) {
          clearInterval(interval);
          setTimeout(startTyping, 5000);
        }
      }, 120);
    };

    startTyping();
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-section" id="Home">
      <div className="bg-decor"></div>

      <div className="home-content">
        <div className="greeting">
          Hi, I’m{" "}
          <span className="highlight">
            {typedName}
            <span className="cursor">|</span>
          </span>
        </div>

        <div className="role">
          Software Developer || Java Developer || MERN Stack Developer
        </div>

        <p className="tagline">
          I build responsive and interactive web applications.
        </p>

        <div className="cta-buttons">
          <a href="/resume.pdf" className="btn" download>
            Download Resume
          </a>

          <a className="btn-outline" onClick={() => setContactOpen(true)}>
            Contact Me
          </a>

          <a href="#Project" className="btn-outline">
            View Projects
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/anshkuamrsingh"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pankaj-kumar-singh-87b272253"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Pankajkuma26060"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/pankajsingh0034"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={profileImg} alt="Profile" />
      </div>

      {/* 🔥 CONTACT MODAL */}
      {contactOpen && (
        <div className="contact-overlay">
          <div className="contact-modal">
            <span className="close-btn" onClick={() => setContactOpen(false)}>
              ✖
            </span>

            <h2>Contact Me</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const name = e.target.name.value;
                const email = e.target.email.value;
                const mobile = e.target.mobile.value;
                const subject = e.target.subject.value;
                const message = e.target.message.value;

                const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=pankajsinghapvns@gmail.com&su${encodeURIComponent(
                  subject,
                )}&body=${encodeURIComponent(
                  `Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}`,
                )}`;

                window.location.href = mailtoLink;
              }}
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                placeholder="Description"
                rows="4"
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
