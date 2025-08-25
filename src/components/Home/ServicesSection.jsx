import React from "react";
import blockChain from "../../assets/images/BlockChain-Devlop.png";
import aiDev from "../../assets/images/Ai-Dvelopment-service.png";
import gameDev from "../../assets/images/Game-Develop.png";
import crypto from "../../assets/images/Crypto-Exchange.png";
import web3 from "../../assets/images/WEB3.png";
import webDev from "../../assets/images/web desgine.png";
import appDev from "../../assets/images/ios and android.png";

const servicesData = [
  {
    id: "Blockchain_Development",
    title: "Blockchain Development",
    description:
      "Secure, scalable, and efficient blockchain solutions for businesses.",
    imageSrc: blockChain,
  },
  {
    id: "AI_Development",
    title: "AI Development Services",
    description:
      "Harness the power of AI to automate tasks and boost efficiency.",
    imageSrc: aiDev,
  },
  {
    id: "Game_Development",
    title: "Game Development",
    description:
      "Create interactive, fun, and engaging games for all platforms.",
    imageSrc: gameDev,
  },
  {
    id: "Crypto_Exchange",
    title: "Crypto Exchange Development",
    description: "Reliable and secure platforms for cryptocurrency trading.",
    imageSrc: crypto,
  },
  {
    id: "Web3_Development",
    title: "Web3 Development",
    description:
      "Develop decentralized applications with greater security and privacy.",
    imageSrc: web3,
  },
  {
    id: "Web_Design",
    title: "Web Design And Development",
    description: "AI-powered websites to meet your unique business needs.",
    imageSrc: webDev,
  },
  {
    id: "Mobile_App_Development",
    title: "iOS & Android App Development",
    description: "Build robust and efficient mobile apps for all devices.",
    imageSrc: appDev,
  },
];

const ServicesSection = () => {
  const servicesInOrder = [
    servicesData[0],
    servicesData[1],
    servicesData[2],
    servicesData[3],
  ];

  return (
    <section className="py-4 md:py-10 bg-[#efeae3] ">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-4 text-gray-900">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-center md:text-left mb-12 text-gray-600 max-w-2xl">
          From motion design to AI-powered products – we design and build
          interfaces for the future.
        </p>

        {/* Grid wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="p-6 md:p-10 rounded-3xl">
              <div className="p-3 bg-gray-400 rounded-2xl mb-6">
                <img
                  src={servicesInOrder[0].imageSrc}
                  alt={servicesInOrder[0].title}
                  className="w-full h-auto object-cover mb-6 md:mb-10 rounded-2xl"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                {servicesInOrder[0].title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {servicesInOrder[0].description}
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 md:p-10  rounded-3xl">
              <div className="p-3 bg-gray-400 rounded-2xl mb-6">
                <img
                  src={servicesInOrder[2].imageSrc}
                  alt={servicesInOrder[2].title}
                  className="w-full h-auto object-cover mb-6 md:mb-10 rounded-2xl"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                {servicesInOrder[2].title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {servicesInOrder[2].description}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-0 md:gap-8 relative">
            {/* Card 2 with offset */}
            <div className="mt-6 md:mt-24 p-6 md:p-10 rounded-3xl">
              <div className="p-3 bg-gray-400 rounded-2xl mb-6">
                <img
                  src={servicesInOrder[1].imageSrc}
                  alt={servicesInOrder[1].title}
                  className="w-full h-auto object-cover mb-6 md:mb-10 rounded-2xl"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                {servicesInOrder[1].title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {servicesInOrder[1].description}
              </p>
            </div>

            {/* Card 4 with same offset */}
            <div className="mt-6 md:mt-12 p-6 md:p-10 rounded-3xl">
              <div className="p-3 bg-gray-400 rounded-2xl mb-6">
                <img
                  src={servicesInOrder[3].imageSrc}
                  alt={servicesInOrder[3].title}
                  className="w-full h-auto object-cover mb-6 md:mb-10 rounded-2xl"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                {servicesInOrder[3].title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {servicesInOrder[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-links flex justify-center mt-8">
        <a
          href="/services"
          className="relative overflow-hidden border bg-[#efeae3] border-gray-400 rounded-full px-15 py-4 text-xl font-medium text-gray-800 transition-colors duration-300"
        >
          View All Services
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
