import { useEffect, useState } from "react";
import "./ScrollPlane.css";

function ScrollPlane() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="plane-container">
      {/* ✨ Vertical Progress Line */}
      <div className="plane-line">
        <div
          className="plane-progress"
          style={{ height: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* ✈️ Plane */}
      <div
        className="plane"
        style={{
          top: `${scrollProgress * 100}%`
        }}
      >
        ✈️
      </div>
    </div>
  );
}

export default ScrollPlane;