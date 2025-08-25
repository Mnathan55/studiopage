"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const GuitarStringLine = () => {
  const lineRef = useRef(null);
  const damping = 0.1; // smaller = slower damping

  useEffect(() => {
    const line = lineRef.current;
    const setScaleY = gsap.quickSetter(line, "scaleY", "transform");

    let target = 1;
    let current = 1;
    let velocity = 0;

    const animate = () => {
      velocity += (target - current) * 0.2; // spring stiffness
      velocity *= 1 - damping; // damping
      current += velocity;
      setScaleY(current);
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      const rect = line.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const distance = e.clientX - centerX;
      const stretch = Math.max(Math.min(distance / 100, 1), -1);
      target = 1 + stretch; // new target scale
    };

    const handleMouseLeave = () => {
      target = 1; // snap back
    };

    window.addEventListener("mousemove", handleMouseMove);
    line.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      line.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-64">
      <div
        ref={lineRef}
        className="w-1 bg-black origin-top z-10"
        style={{ transform: "scaleY(1)" }}
      ></div>
    </div>
  );
};

export default GuitarStringLine;
