"use client";
import { useEffect } from "react";
import gsap from "gsap";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate all h1 elements inside .loader sequentially
    tl.fromTo(
      ".loader h1",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        stagger: {
          each: 1.25, // 1 second delay between each heading
          yoyo: true,
          repeat: 1, // fade in then fade out
        },
      }
    ).to(".loader h1",
      { opacity: 0 }
    );
  }, []);

  const services = [
    "BLOCKCHAIN DEVELOPMENT",
    "AI Development Services",
    "Game Development",
    "Crypto Exchange Development",
    "Web3 Development",
    "Web Design And Development",
    "iOS & Android App Development",
  ];

  return (
    <div className="loader fixed inset-0 z-50 flex items-center justify-center bg-[#0B0500]">
      {services.map((service, index) => (
        <h1
          key={index}
          style={{ textTransform: "uppercase" }}
          className="absolute text-[4vw] bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text uppercase"
        >
          {service}
        </h1>
      ))}
    </div>
  );
};

export default Loader;
