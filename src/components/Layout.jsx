import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Contact } from './Contact';

export function Layout({ children }) {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Contact />
      <Footer />
    </>
  );
}
