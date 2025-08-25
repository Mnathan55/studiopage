import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo-transparent.png";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", bg: "#efeae3" },
    { name: "About", path: "/about", bg: "#efeae3" },
    { name: "Services", path: "/services", bg: "#efeae3" },
    { name: "Contact", path: "/contact", bg: "#ff4500" },
  ];

  return (
    <header className="w-full h-[74px] fixed top-0 left-0 z-50 backdrop-blur-3xl">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-black font-bold text-xl">
          <img src={logo} alt="DafliTech" className="h-17 overflow-hidden" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative overflow-hidden border bg-[${
                link.bg
              }] border-gray-400 rounded-full px-6 py-2 font-medium transition-colors z-10 ${
                location.pathname === link.path
                  ? "text-white bg-black"
                  : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-2xl focus:outline-none"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      <>
        {/* Overlay */}
        <div
          className={`fixed md:hidden inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        />
        {/* Sidebar Panel */}
        <div
          className={`fixed top-0 right-0 h-[100dvh] w-[80%] z-50 bg-white p-6 shadow-lg transform transition-transform duration-500 ease-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close Menu"
              className="text-black text-2xl"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-lg font-medium nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`relative overflow-hidden border bg-[${
                  link.bg
                }] border-gray-400 rounded-full px-6 py-2 font-medium transition-colors z-10 ${
                  location.pathname === link.path
                    ? "text-white bg-black"
                    : "text-gray-800 "
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </>
    </header>
  );
}
