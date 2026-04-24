import "./Home.css";
import Navbar from "../components/Navbar";
import ScrollPlane from "../components/ScrollPlane";
import profile from "../assets/profile.jpg";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Home() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <>
      <Navbar />
      <ScrollPlane />

      {/* 🌌 PARTICLE BACKGROUND */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0f172a" },
          particles: {
            number: { value: 30 },
            size: { value: 2 },
            move: { speed: 1 },
            links: {
              enable: true,
              color: "#3b82f6",
              opacity: 0.2,
            },
          },
        }}
      />

      <div className="home-container">

        {/* 🔥 HERO */}
        <section className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={profile} alt="profile" className="profile-img" />

            <h1 className="hero-title">
              Hi, I'm <span>Bhuwani Bikram Nembang</span> 👋
            </h1>

            <p className="hero-subtitle">
              Full-Stack Developer | React • Node.js • MySQL <br />
              Building scalable & modern web applications.
            </p>

            <div className="hero-buttons">
              <motion.button whileHover={{ scale: 1.1 }} className="btn-main">
                🚀 View Projects
              </motion.button>

              <motion.button whileHover={{ scale: 1.1 }} className="btn-outline">
                📄 Download CV
              </motion.button>
            </div>

            <div className="social-icons">
              <i className="fab fa-github"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </motion.div>
        </section>

        {/* 📊 STATS */}
        <section className="stats-section">
          <div className="stat-card">
            <h2><CountUp end={10} duration={2} />+</h2>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h2><CountUp end={2} duration={2} />+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h2>100%</h2>
            <p>Client Satisfaction</p>
          </div>
        </section>

        {/* 🧠 SKILLS */}
        <section className="skills-section">
          <h2 className="section-title">Tech Stack</h2>

          <div className="skills-grid">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MySQL",
              "MongoDB",
              "C#",
              ".NET",
              "REST APIs",
            ].map((skill, i) => (
              <div key={i} className="skill-card">{skill}</div>
            ))}
          </div>
        </section>

        {/* 💼 PROJECTS */}
        <section className="projects-section">
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {[
              {
                name: "Vehicle Rental System",
                desc: "Booking, billing & admin dashboard",
              },
              {
                name: "AI Chatbot",
                desc: "Smart chatbot using AI APIs",
              },
              {
                name: "Portfolio Website",
                desc: "Modern personal branding site",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="project-card"
              >
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <button className="btn-main small-btn">View</button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 📞 CTA */}
        <section className="cta-section">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Let’s Build Something Amazing 🚀
          </motion.h2>

          <p>I’m open for freelance & full-time opportunities</p>

          <button className="btn-main">Contact Me</button>
        </section>

        {/* 🔻 FOOTER */}
        <footer className="footer">
          © 2026 Bhuwani Bikram Nembang
        </footer>

      </div>
    </>
  );
}

export default Home;