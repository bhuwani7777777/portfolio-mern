import "./About.css";

function About() {
  return (
    <div className="about-container">

      <section className="about-hero">
        <h1>About <span>Me</span></h1>
        <p>
          I am a passionate Full Stack Developer specializing in MERN stack
          and building scalable applications.
        </p>
      </section>

      <section className="about-cards">
        <div className="about-card">
          <h3>Frontend</h3>
          <p>React, HTML, CSS, JavaScript</p>
        </div>

        <div className="about-card">
          <h3>Backend</h3>
          <p>Node.js, Express, .NET</p>
        </div>

        <div className="about-card">
          <h3>Database</h3>
          <p>MongoDB, MySQL</p>
        </div>
      </section>

    </div>
  );
}

export default About;