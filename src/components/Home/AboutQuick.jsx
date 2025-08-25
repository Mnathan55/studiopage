import React from "react";

const AboutQuick = () => {
  return (
    <section className="relative z-1 -mt-10 bg-[#161616] h-[110vh]  rounded-t-[50px]">
      <div className="flex flex-col lg:flex-row justify-between px-[6vw] py-[4vw] overflow-hidden gap-8 pt-20">
        {/* Left side text */}
        <div className="relative flex items-end w-full lg:w-1/2">
          <h2 className="w-full lg:w-[80%] text-[clamp(1.25rem,2.5vw,2.5rem)] leading-snug font-bold text-white">
            We are a group of design-driven, goal-focused creators, producers,
            and designers who believe that the details make all the difference.
          </h2>
        </div>

        {/* Right side image + text */}
        <div className="relative w-full lg:w-[30%] mb-12">
          <img
            src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg"
            alt="about"
            className="h-[180px] w-full object-cover rounded-xl"
          />
          <p className="w-full pt-6 lg:pt-[3.5vw] text-white text-base leading-relaxed">
            We love to create, we love to solve, we love to collaborate, and we
            love to turn amazing ideas into reality. We’re here to partner with
            you through every step of the process and know that relationships
            are the most important things we build.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-12 md:h-20 bg-[#efeae3] rounded-t-[50px]" />
    </section>
  );
};

export default AboutQuick;
