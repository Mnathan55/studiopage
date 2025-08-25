"use client";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import video from "../../assets/ropes.mp4";

const MoveForward = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        src={video} // replace with your video path
        autoPlay
        muted
        loop
      />

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-snug mb-6">
          Ready to move your
          <br />
          project forward?
        </h2>

        <p className="text-white text-lg md:text-xl mb-8">
          Step into the future of your brand, product or website. Reach out
          today and let's move forward together.
        </p>

        {/* Get a Quote Button */}
        <Link
          to="/contact"
          className="flex items-center gap-3 bg-[#ff4500] text-black font-semibold px-6 py-3 rounded-full text-lg hover:bg-black hover:text-white transition-all duration-300"
        >
          Get a Quote
          <span className="">
            <FaArrowRight />
          </span>
        </Link>
      </div>

      {/* Optional overlay for darker effect */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
    </section>
  );
};

export default MoveForward;
