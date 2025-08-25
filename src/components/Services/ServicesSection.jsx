
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ServicesCard from "../ServicesCard";
import { servicesData } from "../../assets/services";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/* const ServicesSection = () => {

  return (
    <section className="py-12 bg-[#efeae3]">
        
      <div className="container mx-auto px-4 py-4 space-y-4">
        {servicesData.map((service, index) => (
          <ServicesCard
            id={service.id}
            key={index}
            title={service.title}
            description={service.description}
            subpoints={service.subpoints}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection; */

// Old Services Section
const ServicesSection = () => {
  const serviceRef = useRef([]);
  // Detect if desktop using window.matchMedia
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <div className="min-h-screen bg-efeae3 text-black rounded-t-4xl mx-auto px-4 mb-[80px]">
      {servicesData.map((service, index) => (
        <div
          
          ref={(el) => (serviceRef.current[index] = el)}
          key={index}
          className="sticky px-10 top-[72px] pt-6 pb-5 bg-[#efeae3] border-t-2 border-black/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh)`,
                }
              : { top: `calc(72px)` }
          }
        >
          <div id={service.id} className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-6 tracking-widest lg:text-2xl text-black/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-black/80">
                {service.subpoints.map((item, itemIndex) => (
                  <div key={`item-${item}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg font-bold text-[#ff4500]/80 stroke-1 stroke-black">
                        0{itemIndex + 1}
                      </span>
                      {item}
                    </h3>
                    {itemIndex < service.subpoints.length - 1 && (
                      <div className="w-full h-px my-2 bg-black/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;