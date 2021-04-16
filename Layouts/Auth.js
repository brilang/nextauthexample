import Head from 'next/head';

// components

import Navbar from 'components/Navbars/AuthNavbar.js';
import FooterSmall from 'components/Footers/FooterSmall.js';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <title>Login</title>
      </Head>
      <Navbar transparent />
      <main>
        <section className='relative w-full h-full py-40 min-h-screen'>
          <div
            className='absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full'
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
