import About from './components/About';
import Booking from './components/Booking';
import CertificationsSection from './components/CertificationsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
       <CertificationsSection /> 
      <Services />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;