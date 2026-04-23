import { useEffect, useState } from "react";
import "./ScrollPlane.css";

function ScrollPlane() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="plane-container">
      <div className="plane-line"></div>

      <div
        className="plane"
        style={{
          transform: `translate(-50%, ${scrollY * 0.4}px)`
        }}
      >
        ✈️
      </div>
    </div>
  );
}

export default ScrollPlane;