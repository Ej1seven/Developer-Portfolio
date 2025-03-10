import Link from "next/link";
import React from "react";

interface ProjectProps {}

export const Project: React.FC<ProjectProps> = ({}) => {
  return (
    <>
      <div
        className="text-[#FAF9F6] w-3/4 flex flex-col justify-center mx-auto md:relative max-w-screen-lg mb-8"
        id="project"
      >
        <div className="flex md:w-3/5 lg:w-1/2 justify-center mb-8">
          {" "}
          <h1 className="text-3xl lg:text-3xl font-extrabold mr-2">
            Professional Project
          </h1>
          <div className="flex-grow border-t border-[#FAF9F6] my-auto px-2 lg:px-8 opacity-25"></div>
        </div>
        <div className="w-full flex flex-col md:flex-row border-1 border-[#39ff14] rounded-md p-2 md:p-8 project-background h-full md:h-[400px] lg:h-[475px] xl:h-[500px]">
          <Link
            href="/uta_libraries"
            className="z-30 md:w-3/5 order-1 md:order-first mt-4 md:mt-0 flex justify-center"
          >
            <img
              src="/UTA Mobile Logo.png"
              className="rounded-md glow-on-hover cursor-pointer"
            />
          </Link>
          <div className="md:w-2/5">
            <p className="text-center text-5xl lg:text-7xl md:absolute md:top-12 lg:top-8 my-4 md:my-0 md:w-[100%] md:left-1">
              UTA Libraries
            </p>
            <div className="z-30 md:absolute md:right-0 md:w-3/5 lg:w-1/2 sm:top-24 lg:top-28">
              <p className="bg-[#091310] rounded-md p-8 text-center md:text-left">
                As a web developer in the Marketing and Communications
                department at the University of Texas at Arlington, my goal was
                to create an app that connects students and faculty, providing
                them with easy access to important information and services
                offered by our esteemed library.
              </p>
            </div>
            <div className="flex flex-col justify-end md:absolute md:w-3/4 lg:w-1/2 md:right-0 md:top-60 mt-6 lg:mt-8 md:max-w-md">
              <div className="flex flex-col justify-around h-1/3 md:my-16">
                <div className="flex justify-end flex-wrap  w-full z-30">
                  <p className="mx-2">React Native</p>
                  <p className="mx-2">Javascript</p>
                  <p className="mx-2">Drupal Headless CMS</p>
                  <p className="mx-2">Expo</p>
                </div>
                <div className="z-30 flex justify-end w-full mt-4 md:mt-2">
                  <a
                    href="https://github.com/Ej1seven/library_mobile_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/github.png"
                      className="w-6 h-6 cursor-pointer mr-4"
                    />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/15AVkuXx2weRmH4EQQcS9E8-xt9l3Mne3/view?pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/resize.png"
                      className="w-6 h-6 cursor-pointer md:mr-4"
                    />
                  </a>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="z-30 lg:mx-4 cursor-pointer border-4 border-[#39FF14] rounded-md p-1 lg:p-2 text-glow w-28 mt-4 md:mt-0">
                  <Link href="/uta_libraries"> Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-[#FAF9F6] w-3/4 flex flex-col justify-center mx-auto md:relative max-w-screen-lg mb-8"
        id="project"
      >
        <div className="flex md:w-3/5 lg:w-1/2 justify-center mb-8">
          {" "}
          <h1 className="text-3xl lg:text-3xl font-extrabold mr-2">
            Group Project
          </h1>
          <div className="flex-grow border-t border-[#FAF9F6] my-auto px-2 lg:px-8 opacity-25"></div>
        </div>
        <div className="w-full flex flex-col md:flex-row border-1 border-[#39ff14] rounded-md p-2 md:p-8 project-background h-full md:h-[400px] lg:h-[475px] xl:h-[500px]">
          <Link
            href="/orderly"
            className="z-30 md:w-3/5 order-1 md:order-first mt-4 md:mt-0"
          >
            <img
              src="/orderlyWelcomePage.png"
              className="rounded-md glow-on-hover cursor-pointer"
            />
          </Link>
          <div className="md:w-2/5">
            <p className="text-center text-5xl lg:text-7xl md:absolute md:top-8 my-4 md:my-0 ">
              Orderly
            </p>
            <div className="z-30 md:absolute md:right-0 md:w-3/5 lg:w-1/2 md:top-36 lg:top-40">
              <p className="bg-[#091310] rounded-md p-8 text-center md:text-left">
                Orderly is an automated inventory management application,
                designed to allow store owners the ability to place orders
                automatically as their stock levels approach a designated
                percentage of maximum capacity.
              </p>
            </div>
            <div className="flex flex-col justify-end md:absolute md:w-3/4 lg:w-1/2 md:right-0 md:top-60 mt-6 lg:mt-8 md:max-w-md">
              <div className="flex flex-col justify-around h-1/3 md:my-16">
                <div className="flex justify-end flex-wrap  w-full z-30">
                  <p className="mx-2">React.js</p>
                  <p className="mx-2">Javascript</p>
                  <p className="mx-2">Postgres</p>
                  <p className="mx-2">Node.js</p>
                  <p className="mx-2">Vercel</p>
                  <p className="mx-2">Prisma 2</p>
                  <p className="mx-2">Railway</p>
                </div>
                <div className="z-30 flex justify-end w-full mt-4 md:mt-2">
                  <a
                    href="https://github.com/Ej1seven/Orderly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/github.png"
                      className="w-6 h-6 cursor-pointer mr-4"
                    />
                  </a>
                  <a
                    href="https://orderly.pro/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/resize.png"
                      className="w-6 h-6 cursor-pointer md:mr-4"
                    />
                  </a>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="z-30 lg:mx-4 cursor-pointer border-4 border-[#39FF14] rounded-md p-1 lg:p-2 text-glow w-28 mt-4 md:mt-0">
                  <Link href="/orderly"> Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-[#FAF9F6] w-3/4 flex flex-col justify-center mx-auto md:relative max-w-screen-lg mb-64"
        id="project"
      >
        <div className="flex md:w-3/5 lg:w-1/2 justify-center mb-8">
          {" "}
          <h1 className="text-3xl lg:text-3xl font-extrabold mr-2">
            Personal Project
          </h1>
          <div className="flex-grow border-t border-[#FAF9F6] my-auto px-2 lg:px-8 opacity-25"></div>
        </div>
        <div className="w-full flex flex-col md:flex-row border-1 border-[#39ff14] rounded-md p-2 md:p-8 project-background h-full md:h-[400px] lg:h-[475px] xl:h-[500px]">
          <Link
            href="/details"
            className="z-30 md:w-3/5 order-1 md:order-first mt-4 md:mt-0"
          >
            <img
              src="/kryptoturfHomepage.png"
              className="rounded-md glow-on-hover cursor-pointer"
            />
          </Link>
          <div className="md:w-2/5">
            <p className="text-center text-5xl lg:text-7xl md:absolute md:top-8 my-4 md:my-0 ">
              Kryptoturf
            </p>
            <div className="z-30 md:absolute md:right-0 md:w-3/5 lg:w-1/2 md:top-36 lg:top-40">
              <p className="bg-[#091310] rounded-md p-8 text-center md:text-left">
                Kryptoturf is a NFT marketplace built on the Goerli testnet,
                where users have the ability to create, list, and buy NFTs.
              </p>
            </div>
            <div className="flex flex-col justify-end md:absolute md:w-3/4 lg:w-1/2 md:right-0 md:top-60 mt-6 lg:mt-8 md:max-w-md">
              <div className="flex flex-col justify-around h-1/3 md:my-8 lg:my-6">
                <div className="flex justify-end flex-wrap  w-full z-30">
                  <p className="mx-2">React.js</p>
                  <p className="mx-2">Typescript</p>
                  <p className="mx-2">Solidity</p>
                  <p className="mx-2">Vercel</p>
                  <p className="mx-2">Node.js</p>
                  <p className="mx-2">ThirdWeb</p>
                  <p className="mx-2">Prisma 2</p>
                </div>
                <div className="z-30 flex justify-end w-full mt-4 md:mt-2">
                  <a
                    href="https://github.com/Ej1seven/Kryptoturf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/github.png"
                      className="w-6 h-6 cursor-pointer mr-4"
                    />
                  </a>
                  <a
                    href="https://kryptoturf.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/resize.png"
                      className="w-6 h-6 cursor-pointer md:mr-4"
                    />
                  </a>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="z-30 lg:mx-4 cursor-pointer border-4 border-[#39FF14] rounded-md p-1 lg:p-2 text-glow w-28 mt-4 md:mt-0">
                  <Link href="/details"> Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
