import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { About } from '../components/About';
import { Articles } from '../components/Articles';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Project } from '../components/Project';
import { Welcome } from '../components/Welcome';
import styles from '../styles/Home.module.css';

export default function Home() {
  /*Display a spinning loading icon when data is loaded*/
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="overflow-hidden">
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-screen">
          {' '}
          <HashLoader
            color={'#39FF14'}
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Welcome />
          <About />
          <Project />
          <Articles />
          <Contact />
          <Footer />
          <div className="fixed bottom-0 left-0 text-white w-1/2 flex justify-start">
            <div className="flex justify-start pl-2 xsm:pl-8 xl:pl-24">
              {/*  */}
              <div className="flex flex-col items-center w-8">
                <a
                  href="https://github.com/Ej1seven"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/github-white.png"
                    className="w-full h-8 cursor-pointer my-4"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/erik-hunter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <img
                    src="/linkedin.png"
                    className="w-full h-8 cursor-pointer my-4"
                  />
                </a>

                <div className=" border-l-2 border-[#FAF9F6] h-[100px] w-1"></div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 right-0 text-white w-1/2 flex justify-end">
            <div className="flex justify-start pr-2 xsm:pr-8 xl:pr-24">
              <div className="flex flex-col items-center w-8">
                <p className="vertical-text my-4">erikhunter@erikhunter.dev</p>
                <div className=" border-l-2 border-[#FAF9F6] h-[100px] w-1"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
