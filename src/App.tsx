import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionsSection from './components/SolutionsSection';
import ProofSection from './components/ProofSection';
import ClutchReviews from './components/ClutchReviews';
import CloudSecurity from './components/CloudSecurity';
import ObjectionsSection from './components/ObjectionsSection';
import Process from './components/Process';
import FAQ from './components/FAQ';
// import TrustStrip from './components/TrustStrip';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar onBookingClick={openModal} />
      <Hero onBookingClick={openModal} />
      <ProblemSection />
      <SolutionsSection onBookingClick={openModal} />
      <ProofSection />
      <ClutchReviews />
      <CloudSecurity />
      <ObjectionsSection />
      <Process />
      <FAQ />
      {/* <TrustStrip /> */}
      <FinalCTA />
      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
