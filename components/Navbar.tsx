import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
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
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  useEffect(() => {
    const projectSection: any = document.getElementById('project');
    if (showModal) {
      document.body.classList.add('lock-scrolling');
    } else {
      document.body.classList.remove('lock-scrolling');
    }
  }, [showModal]);
  return (
    <>
      <div
        className={`${
          showNavbar &&
          'w-full h-20 flex items-center text-[#FAF9F6] fixed ease-in duration-500'
        } hide-navbar`}
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
            Project
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
          <button className="mx-4 cursor-pointer border-4 border-[#39FF14] rounded-md p-2 hover:animate-bounce text-glow">
            Resume
          </button>
        </div>
      </div>
      <div
        className={`${
          showNavbar &&
          'w-full h-36 flex items-center text-[#FAF9F6] fixed ease-in duration-500 flex p-6'
        } hide-navbar-mobile`}
      >
        <div className="w-1/2">
          {' '}
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
          <div className="fixed bg-white h-screen top-0 right-0 w-96 text-black flex flex-col z-[100]">
            <div className="flex justify-end w-full p-4 h-16">
              {' '}
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
                  Project
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
                <button className="mx-4 cursor-pointer text-white text-3xl font-extrabold border-4 bg-black rounded-2xl p-4 hover:animate-bounce text-glow">
                  Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
