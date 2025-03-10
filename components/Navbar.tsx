import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Link2 from "next/link";

interface NavbarProps {
  updateNavbarStatus: any;
}

export const Navbar: React.FC<NavbarProps> = ({ updateNavbarStatus }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showModal, setShowModal]: any = useState(false);
  let theEnd = 0;
  const controlNavbar = () => {
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > theEnd) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    theEnd = scrollTop;
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  useEffect(() => {
    const projectSection: any = document.getElementById("project");
    if (showModal) {
      updateNavbarStatus(true);
      document.body.classList.add("lock-scrolling");
    } else {
      updateNavbarStatus(false);
      document.body.classList.remove("lock-scrolling");
    }
  }, [showModal]);
  return (
    <>
      <div
        className={`${showNavbar &&
          "w-full h-20 flex items-center text-[#FAF9F6] fixed ease-in duration-500"} hide-navbar z-[100]`}
      >
        <Link
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-bold text-5xl w-1/4 text-glow cursor-pointer pl-12"
        >
          E.DEV
        </Link>
        <div className="flex justify-end w-3/4 pr-12 items-center">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="mx-4 cursor-pointer hover:animate-bounce text-glow"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="mx-4 cursor-pointer hover:animate-bounce text-glow"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="freelance"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="mx-4 cursor-pointer hover:animate-bounce text-glow"
          >
            Freelance
          </Link>
          <Link
            activeClass="active"
            to="feedback"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="mx-4 cursor-pointer hover:animate-bounce text-glow"
          >
            Reviews
          </Link>
          <Link
            activeClass="active"
            to="articles"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="mx-4 cursor-pointer hover:animate-bounce text-glow"
          >
            Articles
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="mx-4 cursor-pointer hover:animate-bounce text-glow"
          >
            Contact
          </Link>
          <Link2
            href="/Erik_Hunter_Resume.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mx-4 cursor-pointer border-4 border-[#39FF14] rounded-md p-2 hover:animate-bounce text-glow">
              Resume
            </button>
          </Link2>
        </div>
      </div>
      <div
        className={`${showNavbar &&
          "w-full h-36 flex items-center text-[#FAF9F6] fixed ease-in duration-500 flex p-6 z-50"} hide-navbar-mobile`}
      >
        <div className="w-1/2">
          {" "}
          <Link
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-bold text-3xl sm:text-5xl h-full text-glow cursor-pointer"
          >
            E.DEV
          </Link>
        </div>
        <div
          className="w-1/2 flex justify-end"
          onClick={() => setShowModal(!showModal)}
        >
          <img src="/hamburger.png" className="h-10 sm:h-full cursor-pointer" />
        </div>
        {showModal && (
          <div className="fixed bg-white h-screen top-0 right-0 w-96 text-black flex flex-col">
            <div className="flex justify-end w-full p-4 h-16">
              {" "}
              <img
                src="/close.png"
                className=" h-full cursor-pointer"
                onClick={() => setShowModal(!showModal)}
              />
            </div>
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-col items-center justify-around h-1/3">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="mx-4 cursor-pointer text-3xl font-extrabold hover:animate-bounce text-glow"
                  onClick={() => setShowModal(false)}
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="mx-4 cursor-pointer text-3xl font-extrabold hover:animate-bounce text-glow"
                  onClick={() => setShowModal(false)}
                >
                  Projects
                </Link>
                <Link
                  activeClass="active"
                  to="freelance"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="mx-4 cursor-pointer text-3xl font-extrabold hover:animate-bounce text-glow"
                  onClick={() => setShowModal(false)}
                >
                  Freelance
                </Link>
                <Link
                  activeClass="active"
                  to="feedback"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="mx-4 cursor-pointer text-3xl font-extrabold hover:animate-bounce text-glow"
                  onClick={() => setShowModal(false)}
                >
                  Reviews
                </Link>
                <Link
                  activeClass="active"
                  to="articles"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="mx-4 cursor-pointer text-3xl font-extrabold hover:animate-bounce text-glow"
                  onClick={() => setShowModal(false)}
                >
                  Articles
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="mx-4 cursor-pointer text-3xl font-extrabold hover:animate-bounce text-glow"
                  onClick={() => setShowModal(false)}
                >
                  Contact
                </Link>
                <Link2
                  href="/Erik_Hunter_Resume.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mx-4 cursor-pointer text-white text-3xl font-extrabold border-4 bg-black rounded-2xl p-4 hover:animate-bounce text-glow">
                    Resume
                  </button>
                </Link2>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
