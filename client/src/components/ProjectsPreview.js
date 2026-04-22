import "./ProjectsPreview.css";

function ProjectsPreview() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {[1,2,3].map((p) => (
          <div key={p} className="project-card">
            <h3>Project {p}</h3>
            <p>MERN application</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPreview;