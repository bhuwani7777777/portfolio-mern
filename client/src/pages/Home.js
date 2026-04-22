import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-glow"></div>

        <h1 className="hero-title fade-up">
          Hi, I'm <span className="highlight">Bhuwani</span> 👋
        </h1>

        <p className="hero-subtitle fade-up">
          Full Stack Developer (MERN) | AI Enthusiast  
          Building modern, scalable web applications.
        </p>

        <div className="hero-buttons fade-up">
          <button className="btn-main">View Projects</button>
          <button className="btn-outline">Hire Me</button>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section fade-up">
        <h2 className="section-title">Tech Stack</h2>

        <div className="skills-grid">
          {[
            "React", "Node.js", "MongoDB", "Express",
            "JavaScript", "C#", ".NET", "MySQL"
          ].map((skill, i) => (
            <div key={i} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-section fade-up">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {["Vehicle Rental", "AI Chatbot", "Portfolio"].map((p, i) => (
            <div key={i} className="project-card">
              <h3>{p}</h3>
              <p>Modern full-stack application with clean UI</p>

              <button className="btn-main small-btn">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-glow"></div>

        <h2 className="cta-title">
          Let’s Build Something Amazing 🚀
        </h2>

        <p className="cta-text">
          I'm available for freelance & full-time roles.
        </p>

        <button className="btn-main">Contact Me</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Bhuwani Bikram Nembang — Full Stack Developer
      </footer>

    </div>
  );
}

export default Home;