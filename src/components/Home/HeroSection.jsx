import ClientSection from "../ClientSection";
import InfiniteRoll from "../InfiniteRoll";
import DafliTechLogo from "./DafliTechLogo";

export default function HeroSection() {
  return (
    <section className="relative hero min-h-[60vh] md:min-h-[100vh] flex flex-col items-end border-b border-gray-300/30 overflow-hidden pb-10 md:pb-0">
      {/* Wrapper for left + right */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between px-4 sm:px-10 lg:px-16">
        {/* Left: Intro Text */}
        <div
          id="animation"
          className="z-10 w-full md:w-1/2 flex items-center justify-center"
        >
          <DafliTechLogo />
        </div>

        {/* Right: Hero Content */}
        <div className="w-full md:w-1/2 flex flex-col items-end gap-6 z-10 mt-10 md:mt-[30vh]">
          <div className="hero space-y-3 sm:space-y-4">
            <h1 className="text-[clamp(4rem,9vw,6rem)] text-right leading-[0.85] font-[neuM] tracking-[-3px] text-[#0b0500] pr-[2vw]">
              Design
            </h1>
            <h1 className="text-[clamp(4rem,9vw,6rem)] text-right leading-[0.85] font-[neuM] tracking-[-3px] text-[#0b0500] pr-[2vw]">
              Transform
            </h1>
            <h1 className="text-[clamp(4rem,9vw,6rem)] text-right leading-[0.85] font-[neuM] tracking-[-3px] text-[#0b0500] pr-[2vw]">
              Accelerate
            </h1>
          </div>
        </div>
      </div>

      {/* Floating Shapes (adjusted so they don’t push content on mobile) */}
      <div className="absolute bottom-0 right-[10%] w-[40vw] sm:w-[35vw] h-[40vw] sm:h-[35vw] rounded-full blur-[35px] bg-[#ff4500]/60 animate-[goofy1_2s_linear_infinite_alternate]" />
      <div className="absolute bottom-[-5%] right-[0%] w-[65vw] sm:w-[35vw] h-[65vw] sm:h-[35vw] rounded-full blur-[35px] bg-[#ff4500]/60 animate-[goofy2_2s_linear_infinite_alternate]" />
      <div className="absolute bottom-[0%] right-[-15%] w-[65vw] sm:w-[35vw] h-[65vw] sm:h-[35vw] rounded-full blur-[40px] bg-[#ff4500]/60 animate-[goofy3_2s_linear_infinite_alternate]" />

      <InfiniteRoll />
    </section>
  );
}
