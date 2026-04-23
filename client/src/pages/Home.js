import "./Home.css";
import Navbar from "../components/Navbar";
import ScrollPlane from "../components/ScrollPlane";
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <ScrollPlane />

      <div className="home-container">

        {/* 🔥 HERO */}
        <section className="hero-section">
          <div className="hero-glow"></div>

          <div className="profile-container">
            <img src={profile} alt="profile" className="profile-img" />
          </div>

          <h1 className="hero-title">
            Hi, I'm <span>Bhuwani</span> 👋
          </h1>

          <p className="hero-subtitle">
            Full Stack Developer (MERN) | AI Enthusiast <br />
            I build modern, scalable web applications.
          </p>

          <div className="hero-buttons">
            <button className="btn-main">View Projects</button>
            <button className="btn-outline">Download CV</button>
          </div>

          {/* 🌐 SOCIAL */}
          <div className="social-icons">
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </section>

        {/* 📊 STATS */}
        <section className="stats-section">
          <div className="stat-card">
            <h2>10+</h2>
            <p>Projects</p>
          </div>
          <div className="stat-card">
            <h2>2+</h2>
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
            {["React","Node.js","MongoDB","Express","C#",".NET","MySQL"].map((s,i) => (
              <div key={i} className="skill-card">{s}</div>
            ))}
          </div>
        </section>

        {/* 💼 SERVICES */}
        <section className="services-section">
          <h2 className="section-title">Services</h2>

          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>Full-stack MERN applications</p>
            </div>

            <div className="service-card">
              <h3>UI/UX Design</h3>
              <p>Modern, user-friendly interfaces</p>
            </div>

            <div className="service-card">
              <h3>API Development</h3>
              <p>Secure backend & REST APIs</p>
            </div>
          </div>
        </section>

        {/* 💼 PROJECTS */}
        <section className="projects-section">
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {["Vehicle Rental","AI Chatbot","Portfolio"].map((p,i) => (
              <div key={i} className="project-card">
                <h3>{p}</h3>
                <p>Modern full-stack application</p>
                <button className="btn-main small-btn">View</button>
              </div>
            ))}
          </div>
        </section>

        {/* 📞 CTA */}
        <section className="cta-section">
          <h2>Let’s Build Something Amazing 🚀</h2>
          <p>I’m open for freelance & full-time roles</p>
          <button className="btn-main">Contact Me</button>
        </section>

        {/* 🔻 FOOTER */}
        <footer className="footer">
          © 2026 Bhuwani — Full Stack Developer
        </footer>

      </div>
    </>
  );
}

export default Home;