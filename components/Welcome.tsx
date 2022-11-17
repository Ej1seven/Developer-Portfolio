import React from 'react';

interface WelcomeProps {}

export const Welcome: React.FC<WelcomeProps> = ({}) => {
  return (
    <div className="text-[#FAF9F6] w-full h-screen flex justify-center items-center">
      <div className="w-1/2 pb-16">
        <p className="text-8xl">
          Hi, my
          <br />
          name is <span className="font-extrabold text-[#39FF14]">Erik</span>
        </p>
        <p className="text-4xl mt-7">
          I'm an{' '}
          <span className="font-extrabold text-[#39FF14]">
            frontend developer{' '}
          </span>
          from
          <br />
          Dallas, Texas.
        </p>
      </div>
      <div className="w-1/2">
        <p className="text-5xl">Hi, my name is Erik</p>
      </div>
    </div>
  );
};
