import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { Navbar } from '../components/Navbar';
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
        </>
      )}
    </div>
  );
}
