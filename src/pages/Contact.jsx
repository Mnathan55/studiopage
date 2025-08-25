"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    mobile: "",
    company: "",
    service: "",
  });

  const services = [
    "Blockchain Development",
    "AI Development Services",
    "Game Development",
    "Crypto Exchange Development",
    "Web3 Development",
    "Web Design & Development",
    "iOS & Android App Development",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_q02dbtd",
        "template_ieixe8m",
        formData,
        "PFrEH18YugR5WDPtK"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );
    setClicked(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#efeae3] px-4 py-16">
      <div className="max-w-3xl w-full text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
          Let's Talk!
        </h1>

        <form onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              Hi! I am
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-700 focus:border-black transition-colors"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              Reach me at
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="hello@gmail.com"
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-700 focus:border-black transition-colors"
              required
            />
          </div>
          {/* Country & Mobile */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col">
              <label className="text-lg font-semibold text-gray-900 mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="India"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-700 focus:border-black transition-colors"
                required
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label className="text-lg font-semibold text-gray-900 mb-2">
                Mobile No.
              </label>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-semibold">+91</span>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="98765 43210"
                  className="flex-1 border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-700 focus:border-black transition-colors"
                  required
                />
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="eg. Daflitech"
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-700 focus:border-black transition-colors"
              required
            />
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-900 mb-2">
              Services Needed
            </span>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  type="button"
                  key={service}
                  onClick={() => setFormData((prev) => ({ ...prev, service }))}
                  className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                    formData.service === service
                      ? "bg-black text-white"
                      : "border-gray-400 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Send Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className={`px-10 py-3 rounded-full font-semibold text-lg transition-colors duration-300 ${
                clicked
                  ? "bg-black text-white"
                  : "bg-white text-black border border-black hover:bg-black hover:text-white"
              }`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
