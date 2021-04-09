import Header from '../components/Headers/Header';
import Footer from '../components/Footers/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
