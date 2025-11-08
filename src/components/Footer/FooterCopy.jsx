import React from "react";

const FooterCopy = () => {
  return (
    <>
      <div className="container py-8">
        <div className="flex flex-col md:flex md:flex-row justify-between items-center">
          <div className="">
            <ul className="flex gap-4 md:gap-8 text-[16px] leading-7 text-[#282938]">
              <li className="hover:text-black active:text-black  cursor-pointer">Home</li>
              <li className="hover:text-black active:text-black cursor-pointer">About us</li>
              <li className="hover:text-black active:text-black cursor-pointer">Features</li>
              <li className="hover:text-black active:text-black cursor-pointer">Pricing</li>
              <li className="hover:text-black active:text-black cursor-pointer">FAQ</li>
              <li className="hover:text-black active:text-black cursor-pointer">Blog</li>
            </ul>
          </div>
          <div className="mt-5 md:mt-0">&copy; Copyright 2025, Finsweet.com</div>
        </div>
      </div>
    </>
  );
};

export default FooterCopy;
