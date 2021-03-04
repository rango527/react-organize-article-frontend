import Head from 'next/head';
import { FC, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import { SocketConnector } from '~/components/SocketConnector';

import style from '~/styles/navbarBorder.module.scss';
import { useActivePage } from '~/stores/page';

import { Navbar } from '~/components/organisms/Navbar';
import { Sidebar } from '~/components/organisms/Sidebar';
import { SubnavBar } from '~/components/organisms/SubnavBar';
import { PageModals } from '~/components/PageModals/PageModals';
import { ScrollTopButton } from '~/components/Commons/ScrollTopButton';

export const DashBoardLayout: FC = ({ children }) => {
  const [session] = useSession();
  const router = useRouter;
  const { mutate: mutateActivePage } = useActivePage();

  useEffect(() => {
    mutateActivePage(1);
  }, [router]);

  return (
    <>
      <Head>
        <title>Webev</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Navbar />
      <div className={`webev-nav-border ${style['nav-border']}`} />
      <div className="sticky-top bg-dark d-flex justify-content-evenly d-md-none">
        <SubnavBar />
      </div>
      <main className="d-flex mx-auto pt-lg-4">
        <div className="d-none d-md-block col-lg-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10">{children}</div>
        {session && <PageModals />}
        {session && <SocketConnector />}
        <ScrollTopButton />
      </main>
    </>
  );
};
