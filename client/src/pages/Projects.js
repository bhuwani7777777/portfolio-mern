import "./Projects.css";

function Projects() {
  const projects = ["Vehicle Rental", "AI Chatbot", "Portfolio"];

  return (
    <div className="projects-container">

      <h1 className="title">My Projects</h1>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p}</h3>
            <p>Modern full-stack application</p>
            <button>View</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;