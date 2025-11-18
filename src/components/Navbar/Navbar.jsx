import React, { useState } from "react";
import Logo1 from "../../assets/BannerImg/logo1.png";
import Button from "../Global/Button";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1C1E53]">
      <nav className="container mx-auto flex justify-between items-center py-8 px-4 md:px-0">
        {/* Logo */}
        <div>
         <Link to={"/"}> <img src={Logo1} alt="logo" className="h-10" /></Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center text-[#BBBBCB]">
          <ul className="flex gap-8">
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="/"> Home</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="/AboutUs"> About us</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="/Features"> Features</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="/Pricing"> Pricing</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="/FAQ">FAQ</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="/Blog"> Blog</Link>
            </li>
          </ul>
          <Link to="/Connect"><Button>Contact us</Button></Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#BBBBCB] focus:outline-none transition-transform duration-300"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 rotate-90 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Smooth Animation) */}
      <div
        className={`md:hidden bg-[#1C1E53] text-[#BBBBCB] px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="/"> Home</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="/AboutUs"> About us</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="#"> Features</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="/Pricing"> Pricing</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="/FAQ">FAQ</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              <Link to="/Blog">Blog</Link>
            </li>
        </ul>
        <div
          className={`mt-4 flex justify-center transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
        </div>
      </div>
    </div>
  );
};

export default Navbar;
