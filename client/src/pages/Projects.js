import "./Projects.css";

function Projects() {

  const projects = [
    {
      title: "Vehicle Rental System",
      desc: "Full-stack MERN application for renting vehicles with authentication and booking system.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/bhuwani7777777",
      live: "#"
    },
    {
      title: "AI Chatbot",
      desc: "AI-powered chatbot using API integration and NLP for smart responses.",
      tech: ["React", "API", "AI"],
      github: "https://github.com/bhuwani7777777",
      live: "#"
    },
    {
      title: "Portfolio Website",
      desc: "Modern developer portfolio with animations and GitHub integration.",
      tech: ["React", "CSS", "JavaScript"],
      github: "https://github.com/bhuwani7777777",
      live: "#"
    },
    {
      title: "E-commerce Website",
      desc: "Online shopping platform with cart, payment, and admin dashboard.",
      tech: ["MERN", "Stripe", "Redux"],
      github: "https://github.com/bhuwani7777777",
      live: "#"
    },
    {
      title: "Blog Platform",
      desc: "Full blog system with CRUD operations and authentication.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/bhuwani7777777",
      live: "#"
    },
    {
      title: "Task Manager App",
      desc: "Productivity app to manage daily tasks with drag & drop features.",
      tech: ["React", "Firebase"],
      github: "https://github.com/bhuwani7777777",
      live: "#"
    }
  ];

  return (
    <div className="projects-container">

      <h1 className="projects-title">My Projects</h1>
      <p className="projects-subtitle">
        Here are some of my recent works and real-world applications
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            {/* IMAGE */}
            <div className="project-image">
              <span>Project Image</span>
            </div>

            {/* CONTENT */}
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              {/* TECH STACK */}
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;