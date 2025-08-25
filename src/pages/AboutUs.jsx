import React from "react";
import ourTeam from "../assets/images/our_team.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-[#efeae3] text-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
          Welcome to{" "}
          <span className="text-[#ff4500]">Daflitech Technologies</span>
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          At Daflitech Technologies, we are dedicated to delivering a wide range
          of innovative and tailored software solutions to help businesses
          thrive in the digital age. As the best software company, we specialize
          in Website Design, ensuring your online presence is both visually
          appealing and highly functional.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-6">
          Our unique offerings span the technological spectrum—from cutting-edge
          software development to transformative digital strategies. We don’t
          just follow industry trends; we set them.
        </p>
      </div>

      {/* Who We Are */}
      <div className="container mx-auto px-4 py-16 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#ff4500] pl-3">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A lot has changed since we began, but our purpose has not. Daflitech
            Technologies is more than a company; it's a dynamic force that
            propels businesses toward success.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-semibold text-[#ff4500]">Innovation:</span>{" "}
              Passionate about leading-edge technology and transformation.
            </li>
            <li>
              <span className="font-semibold text-[#ff4500]">People First:</span>{" "}
              We care about our employees, clients, and society at large.
            </li>
            <li>
              <span className="font-semibold text-[#ff4500]">Inclusive:</span>{" "}
              Regardless of who you are – you are welcomed, respected, and
              supported.
            </li>
          </ul>
        </div>

        <img
          src={ourTeam}
          alt="Our Team at Daflitech"
          className="rounded-2xl shadow-xl object-cover w-full h-72 md:h-96"
        />
      </div>

      {/* Goals: Mission, Vision, Plans */}
      <div className="py-20 bg-[#efeae3]">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 border-t-4 border-[#ff4500]">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Customer satisfaction drives us. We deliver expert guidance,
              timely solutions, and cutting-edge technology to build lasting
              brand loyalty.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 border-t-4 border-[#ff4500]">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leader in the digital space, empowering businesses,
              students, and entrepreneurs to achieve new heights in a
              tech-driven world.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 border-t-4 border-[#ff4500]">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Our Plans
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We offer tailored consulting and outsourcing services, forging
              strategic partnerships to help clients grow and succeed in
              today’s ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 px-4 nav-links flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Join hands with Daflitech Technologies and let’s build the future,
          together. Whether you’re a startup or an enterprise, we’ve got the
          tools and expertise to elevate your digital journey.
        </p>
        <Link
          to="/contact"
          className="flex w-[280px] overflow-hidden justify-center items-center gap-3 bg-[#ff4500] text-black font-semibold px-6 py-3 rounded-full text-lg hover:bg-black hover:text-white transition-all duration-300"
        >
          Get in Touch
          <span className="">
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
