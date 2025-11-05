import React from "react";
import Logo1 from "../../assets/BannerImg/logo1.png";
import Button from "../Global/Button";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#1C1E53]">
        <nav className="container mx-auto flex justify-between items-center  py-8">
          <div className="">
            <img src={Logo1} alt="logo" />
          </div>
          <div className="flex gap-12 items-center text-[#BBBBCB]">
            <div className="flex gap-8 items-center text-[#BBBBCB]">
              <ul className=" hover:text-white">
                <li>Home</li>
              </ul>
              <ul className=" hover:text-white">
                <li>About us</li>
              </ul>
              <ul className=" hover:text-white">
                <li>Features</li>
              </ul>
              <ul className=" hover:text-white">
                <li>Pricing</li>
              </ul>
              <ul className=" hover:text-white">
                <li>FAQ</li>
              </ul>
              <ul className=" hover:text-white">
                <li>Blog</li>
              </ul>
            </div>
            <Button>Contact us</Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
