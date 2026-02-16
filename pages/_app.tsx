import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import HashLoader from 'react-spinners/HashLoader';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  /*Display a spinning loading icon when data is loaded*/
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    const HOME_SCROLL_KEY = 'homeScrollY';
    const HOME_RESTORE_FLAG = 'restoreHomeScroll';

    const handleRouteChangeStart = () => {
      if (router.pathname === '/' && typeof window !== 'undefined') {
        sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
        sessionStorage.setItem(HOME_RESTORE_FLAG, 'true');
      }
    };

    const handleRouteChangeComplete = (url: string) => {
      if (typeof window === 'undefined') return;

      const pathname = url.split('?')[0];
      const shouldRestore =
        pathname === '/' && sessionStorage.getItem(HOME_RESTORE_FLAG) === 'true';

      if (!shouldRestore) return;

      const savedScrollY = Number(sessionStorage.getItem(HOME_SCROLL_KEY) || '0');
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollY, behavior: 'auto' });
      });

      sessionStorage.removeItem(HOME_RESTORE_FLAG);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      {' '}
      <Head>
        <title>E.DEV</title>
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
