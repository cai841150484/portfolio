import React, {useState, useEffect} from "react";
import "./MouseTrail.scss";

export default function MouseTrail() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF"];

    const handleMouseMove = e => {
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5
      };

      setTrails(prev => [...prev.slice(-10), newTrail]);

      setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== newTrail.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="mouse-trails">
      {trails.map(trail => (
        <div
          key={trail.id}
          className="trail-dot"
          style={{
            left: trail.x,
            top: trail.y,
            backgroundColor: trail.color,
            width: trail.size,
            height: trail.size,
            opacity: 0.7
          }}
        />
      ))}
    </div>
  );
}
