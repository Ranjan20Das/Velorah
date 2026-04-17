import { useState, useEffect } from 'react';
import Loader from './components/Loader';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Footer from './components/Footer'
import Expeditions from './components/Expeditions'
import Reviews from './components/Reviews'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Expeditions />
          <Reviews />
          <Gallery />
          <Booking />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;