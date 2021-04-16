import Head from 'next/head';
import Navbar from '../components/Navbars/AuthNavbar';
import FooterSmall from '../components/Footers/FooterSmall';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <title>Next Auth Example App with Notus Theme</title>
      </Head>
      <div class='main'>
        <Navbar transparent />
        <main>{children}</main>
        <FooterSmall absolute />
      </div>
    </>
  );
}
