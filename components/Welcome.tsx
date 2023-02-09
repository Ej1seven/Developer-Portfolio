import React from 'react';
import Image from 'next/image';

interface WelcomeProps {}

export const Welcome: React.FC<WelcomeProps> = ({}) => {
  return (
    <div className="text-[#FAF9F6] w-screen h-screen flex justify-center items-center sm:px-16 welcome mb-64">
      <div className="w-3/4 pb-16">
        <p className="text-5xl sm:text-8xl welcome-text">
          Hi, my
          <br />
          name is <span className="font-extrabold text-[#39FF14]">Erik</span>
        </p>
        <p className="text-4xl mt-7">
          I&apos;m a{' '}
          <span className="font-extrabold text-[#39FF14]">
            full stack developer{' '}
          </span>
          from
          <br />
          Dallas, Texas.
        </p>
      </div>
    </div>
  );
};
