import Head from 'next/head';
import { FC, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Footer } from '../organisms/Footer';
import { SocketConnector } from '~/components/SocketConnector';

import { useActivePage, usePageStatus } from '~/stores/page';

import { Navbar } from '~/components/organisms/Navbar';
import { Sidebar } from '~/components/organisms/Sidebar';
import { SubnavBar } from '~/components/organisms/SubnavBar';
import { PageModals } from '~/components/PageModals/PageModals';
import { ScrollTopButton } from '~/components/Commons/ScrollTopButton';

import { BootstrapBreakpoints } from '~/interfaces/variables';
import { PageStatus } from '~/interfaces/page';

export const DashBoardLayout: FC = ({ children }) => {
  const [session] = useSession();
  const router = useRouter();
  const { mutate: mutateActivePage } = useActivePage();

  const { mutate: mutatePageStatus } = usePageStatus();

  if (typeof window === 'undefined') {
    return null;
  }

  useEffect(() => {
    mutatePageStatus(router.pathname === '/archived' ? PageStatus.PAGE_STATUS_ARCHIVE : PageStatus.PAGE_STATUS_STOCK);
    mutateActivePage(1);
  }, [router]);

  return (
    <>
      <Head>
        <title>Webev</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Navbar />
      <StyledBorder />
      <SubnavBar />
      <StyledDiv className="d-flex mx-auto">
        <div className="d-none d-md-block col-lg-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10">{children}</div>
        {session && <PageModals />}
        {session && <SocketConnector />}
        <ScrollTopButton />
      </StyledDiv>
      <Footer />
    </>
  );
};

const StyledDiv = styled.div`
  max-width: 1240px;
  /* 画面全体からNavbarとFooterの高さを引く */
  min-height: calc(100vh - 100px - 100px);
`;

const StyledBorder = styled.div`
  height: 4px;
  background: linear-gradient(90deg, #f6d02e 0, #f87c00 47%, #f6d02e);
  @media (min-width: ${BootstrapBreakpoints.md}px) {
    position: sticky;
    top: 0;
    z-index: 980;
  }
`;
