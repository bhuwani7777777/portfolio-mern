import "./Hero.css";
import ScrollPlane from "../components/ScrollPlane";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow"></div>

      <h1>Hi, I'm <span>Bhuwani</span> 👋</h1>
      <p>Full Stack Developer | MERN | AI Enthusiast</p>

      <div className="hero-buttons">
        <button className="primary">Projects</button>
        <button className="outline">Contact</button>
      </div>
    </section>
  );
}

export default Hero;