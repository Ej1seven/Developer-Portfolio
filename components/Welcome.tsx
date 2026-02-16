import React from "react";
import Image from "next/image";

interface WelcomeProps {}

export const Welcome: React.FC<WelcomeProps> = ({}) => {
  return (
    <div className="relative text-[#FAF9F6] w-screen h-screen flex justify-center items-center sm:px-16 welcome mb-64">
      <div className="xl:absolute xl:left-0 xl:ml-24 p-16 bg-[#091310]">
        <p className="text-5xl sm:text-8xl welcome-text">
          Hi, my
          <br />
          name is <span className="font-extrabold text-[#39FF14]">Erik</span>
        </p>
        <p className="text-4xl mt-7">
          I&apos;m a{" "}
          <span className="font-extrabold text-[#39FF14]">
            full stack web developer{" "}
          </span>
          from
          <br />
          Austin, Texas.
        </p>
      </div>
      <button
        type="button"
        aria-label="Scroll to About Me section"
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce glow-pulse items-center justify-center w-12 h-12 rounded-full border-2 border-[#39FF14] bg-[#091310]/80 text-[#39FF14] hover:bg-[#39FF14] hover:text-[#091310] transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" />
        </svg>
      </button>
    </div>
  );
};
