import Head from 'next/head';
import { AppProps } from 'next/app';

import '~/styles/global.scss';

import { Navbar } from '~/components/organisms/Navbar';
import { Sidebar } from '~/components/organisms/Sidebar';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Webev</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <Navbar />
    <div className="d-flex h-100 margin-wide-display mx-auto pt-lg-4">
      <div className="d-none d-lg-block col-lg-2">
        <Sidebar />
      </div>
      <div className="col-12 col-lg-10">
        <Component {...pageProps} />
      </div>
    </div>
  </>
);

export default App;
