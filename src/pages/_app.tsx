import Head from 'next/head';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { AppProps } from 'next/app';

import '~/styles/global.scss';

import style from '~/styles/navbarBorder.module.scss';
import { Navbar } from '~/components/organisms/Navbar';
import { Sidebar } from '~/components/organisms/Sidebar';
import { PageModals } from '~/components/PageModals/PageModals';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = ({ Component, pageProps }: AppProps) => {
  const [socket] = useState(() => io(process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'));

  useEffect(() => {
    socket.on('connect', () => {
      console.log('socket connected!!');
    });
    socket.on('disconnect', () => {
      console.log('socket disconnected!!');
    });
    socket.on('update-page', () => {
      console.log('Get Updated Data');
      // setNewChat(newData);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Webev</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Navbar />
      <div className={`sticky-top ${style['nav-border']}`} />
      <main className="d-flex mx-auto pt-lg-4">
        <div className="d-none d-lg-block col-lg-2">
          <Sidebar />
        </div>
        <div className="col-12 col-lg-10">
          <Component {...pageProps} />
        </div>
        <PageModals />
      </main>
    </>
  );
};

export default App;
