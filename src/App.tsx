import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import GlobalOperations from './components/GlobalOperations';
import LogisticsSupplyChain from './components/LogisticsSupplyChain';
import ProductsServices from './components/ProductsServices';
import Leadership from './components/Leadership';
import RegionalTeam from './components/RegionalTeam';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-secondary-50">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <CompanyOverview />
        <GlobalOperations />
        <LogisticsSupplyChain />
        <Clients />
        <ProductsServices />
        <Leadership />
        <RegionalTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
