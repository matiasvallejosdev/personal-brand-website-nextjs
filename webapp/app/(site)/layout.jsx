import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

export default function SiteLayout({ children }) {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
