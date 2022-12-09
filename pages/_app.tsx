import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import HashLoader from 'react-spinners/HashLoader';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  /*Display a spinning loading icon when data is loaded*/
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {' '}
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand:300,500"
          rel="stylesheet"
        />
      </Head>
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
          {' '}
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
