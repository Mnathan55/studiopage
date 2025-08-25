"use client";
import { FaClock, FaMagic, FaHandshake, FaLayerGroup } from "react-icons/fa";

const benefits = [
  {
    icon: <FaClock size={28} className="text-orange-500" />,
    title: "Time zones ain’t no thing",
    desc: "Wherever you are in the world, you’ll feel like we’re right around the corner. With 12 years of experience, our business processes are seamless and time differences don’t matter.",
  },
  {
    icon: <FaMagic size={28} className="text-orange-500" />,
    title: "Impossible? We’re on it",
    desc: "“Impossible” simply does not exist in our vocabulary. We develop products exactly as they were at the design stage, no simplifications, no shortcuts, no BS.",
  },
  {
    icon: <FaHandshake size={28} className="text-orange-500" />,
    title: "Flexible work terms",
    desc: "Just like we stick to a fixed budget, we stay within a set Time and Materials framework. Whatever terms we agree to will depend on your project needs.",
  },
  {
    icon: <FaLayerGroup size={28} className="text-orange-500" />,
    title: "Full spectrum of services",
    desc: "Any solution your business needs, we’re on it: UI/UX design, logo creation, mobile app design, frontend and backend development, technical support.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefits of <br /> Working With Us
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            Here’s why clients love working with us and keep coming back.
          </p>
        </div>

        {/* Benefits List */}
        <div className="flex flex-col">
          {benefits.map((item, index) => (
            <div key={index}>
                {index < benefits.length && (
                <hr className="border-gray-900" />
              )}
              <div className="flex flex-col md:flex-row items-start gap-4 py-6 mb-10">
                <div className="flex-shrink-0 w-1/4">{item.icon}</div>
                <h3 style={{ textTransform: "uppercase" }} className=" text-sm md:text-sm font-semibold text-gray-900 md:w-1/3">
                  {item.title}
                </h3>
                  <p className="text-gray-900 text-xl font-semibold md:w-2/3">
                    {item.desc}
                  </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
