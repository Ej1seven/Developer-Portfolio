import React from 'react';

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <div
      className="text-[#FAF9F6] w-3/4 xl:w-1/2 flex flex-row justify-center mx-auto mb-64 max-w-screen-md"
      id="contact"
    >
      <div className="flex flex-col w-full justify-center mb-8">
        <div className="w-full flex ">
          {' '}
          <div className="flex-grow border-t border-[#FAF9F6] w-1/3 my-auto opacity-25"></div>
          <h1 className="text-3xl lg:text-3xl font-extrabold  w-1/3 text-center mb-4">
            Contact
          </h1>
          <div className="flex-grow border-t border-[#FAF9F6] w-1/3 my-auto px-2 lg:px-8 opacity-25"></div>
        </div>

        <p className="text-5xl text-center text-[#39FF14] mb-4">
          Lets Get In Touch
        </p>
        <p className="text-center max-w-[550px] mx-auto mb-14">
          I&apos;m currently open for collaboration, job opportunites, and any
          questions you may have. Even you if you just want say hi, my inbox is
          always open!{' '}
        </p>
        <div className="z-50 w-full flex justify-center">
          <a href="mailto:erikhunter@erikhunter.dev">
            <button className="lg:mx-4 cursor-pointer border-4 border-[#39FF14] rounded-md p-1 lg:p-2 hover:animate-bounce text-glow w-28">
              Details
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
