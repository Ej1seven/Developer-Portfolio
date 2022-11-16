import React, { useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  /*Display a spinning loading icon when data is loaded*/
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="w-full h-20 bg-red-500 flex items-center text-[#FAF9F6]">
      <p className="text-bold text-5xl ml-4 w-1/4">E.DEV</p>
      <div className="flex justify-end w-3/4 pr-12">
        <p className="mx-4">About</p>
        <p className="mx-4">Project</p>
        <p className="mx-4">Contact</p>
        <button className="mx-4">Resume</button>
      </div>
    </div>
  );
};
