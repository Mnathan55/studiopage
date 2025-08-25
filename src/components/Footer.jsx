"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const goofy8 = useRef(null);
  const goofy9 = useRef(null);
  const goofy10 = useRef(null);

  useEffect(() => {
    gsap.to(goofy8.current, { x: "10%", y: "-10%", duration: 5, repeat: -1, yoyo: true, ease: "linear" });
    gsap.to(goofy9.current, { x: "10%", y: "-10%", duration: 5, repeat: -1, yoyo: true, ease: "linear" });
    gsap.to(goofy10.current, { x: "-10%", y: "10%", duration: 10, repeat: -1, yoyo: true, ease: "linear" });
  }, []);

  return (
    <footer className="relative w-full overflow-hidden z-0">
      <div className="footers relative w-full bg-[#111] overflow-hidden flex flex-col">
        {/* Footer Top */}
        <div className="footer-top flex flex-col md:flex-row justify-between px-[6vw] py-[4vw] gap-6">
          <div className="left flex flex-col gap-4">
            <a href="/about" className="text-[clamp(1.5rem,2.3vw,2.5rem)] font-semibold font-[neuM] text-white">
              About Us
            </a>
            <a href="/services" className="text-[clamp(1.5rem,2.3vw,2.5rem)] font-semibold font-[neuM] text-white">
              Services
            </a>
            <a href="/contact" className="text-[clamp(1.5rem,2.3vw,2.5rem)] font-semibold font-[neuM] text-white">
              Contact
            </a>
          </div>

          <div className="nav-links flex flex-col gap-3">
            <a
              href="mailto:your-email@example.com"
              className="relative overflow-hidden border bg-[#efeae3] border-gray-400 rounded-full px-6 py-2 font-medium text-gray-800 transition-colors duration-300 hover:text-white hover:bg-black"
            >
              your-email@example.com
            </a>
            <a
              href="tel:+1234567890"
              className="relative overflow-hidden border bg-[#efeae3] border-gray-400 rounded-full px-6 py-2 font-medium text-gray-800 transition-colors duration-300 hover:text-white hover:bg-black"
            >
              +1 234 567 890
            </a>
          </div>
        </div>

        {/* Footer Middle */}
        <div className="footer-middle flex justify-center px-[2vw] my-4">
          <h1 className="text-[23vw] font-[neuM] leading-[1] text-white border-b border-white">
            DafliTech
          </h1>
        </div>

        {/* Footer Last */}
        <div className="footer-last flex flex-wrap justify-between items-center px-[3vw] py-[1.5vw] gap-3">
          <h5 className="text-[clamp(0.8rem,1.2vw,1rem)] font-thin text-white">
            © {new Date().getFullYear()} DafliTech
          </h5>
          <h5 className="text-[clamp(0.8rem,1.2vw,1rem)] font-thin text-white">🌐 Pune, MH</h5>
          <h5 className="text-[clamp(0.8rem,1.2vw,1rem)] font-thin text-white">Instagram</h5>
          <h5 className="text-[clamp(0.8rem,1.2vw,1rem)] font-thin text-white">LinkedIn</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
