import "./Skills.css";

function Skills() {
  const skills = ["React","Node","MongoDB","Express","C#",".NET"];

  return (
    <section className="skills">
      <h2>Tech Stack</h2>

      <div className="skills-grid">
        {skills.map((s,i) => (
          <div key={i} className="skill-card">{s}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;