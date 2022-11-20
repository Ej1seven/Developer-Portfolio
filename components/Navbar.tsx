import React, { useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="w-full h-20 flex items-center text-[#FAF9F6]">
      <p className="text-bold text-5xl w-1/4 text-glow cursor-pointer ">
        E.DEV
      </p>
      <div className="flex justify-end w-3/4 pr-12 items-center">
        <p className="mx-4 cursor-pointer hover:animate-bounce text-glow">
          About
        </p>
        <p className="mx-4 cursor-pointer hover:animate-bounce text-glow">
          Project
        </p>
        <p className="mx-4 cursor-pointer hover:animate-bounce text-glow">
          Contact
        </p>
        <button className="mx-4 cursor-pointer border-4 border-[#39FF14] rounded-md p-2 hover:animate-bounce text-glow">
          Resume
        </button>
      </div>
    </div>
  );
};
