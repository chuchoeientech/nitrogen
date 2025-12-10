import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import OperationsPage from './pages/OperationsPage';
import LogisticsPage from './pages/LogisticsPage';
import ClientsPage from './pages/ClientsPage';
import ProductsPage from './pages/ProductsPage';
import LeadershipPage from './pages/LeadershipPage';
import RegionalTeamPage from './pages/RegionalTeamPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-secondary-50">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/operations" element={<OperationsPage />} />
          <Route path="/logistics" element={<LogisticsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/regional-team" element={<RegionalTeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
