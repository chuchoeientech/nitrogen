// ============================================================
// MAINTENANCE MODE
// To go back online:
//   1. Comment out the "MAINTENANCE PAGE" block below
//   2. Uncomment the "NORMAL APP" block below
// ============================================================

// ---- MAINTENANCE PAGE (active) ----
function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0c14',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        color: '#fff',
        padding: '2rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}>
        {/* Status badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '1.5rem',
            letterSpacing: '0.15em',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#f97316',
            textTransform: 'uppercase',
          }}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#f97316',
              display: 'inline-block',
            }}
          />
          Under Maintenance
        </div>

        {/* HTTP label */}
        <p
          style={{
            margin: '0 0 0.5rem',
            fontSize: '0.8rem',
            color: '#6b7280',
            letterSpacing: '0.05em',
          }}
        >
          HTTP 503
        </p>

        {/* Main heading */}
        <h1
          style={{
            margin: '0 0 1.25rem',
            fontSize: '3rem',
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#ffffff',
          }}
        >
          Site Under Maintenance
        </h1>

        {/* Description */}
        <p
          style={{
            margin: '0',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#9ca3af',
          }}
        >
          This website is currently undergoing maintenance and is temporarily unavailable.
          We apologize for any inconvenience. We'll be back online as soon as possible.
        </p>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#1f2937',
            margin: '2.5rem 0',
          }}
        />

        {/* Footer */}
        <p
          style={{
            margin: '0',
            fontSize: '0.8rem',
            color: '#4b5563',
            letterSpacing: '0.05em',
          }}
        >
          nitrogens.uk &nbsp;·&nbsp; 2026
        </p>
      </div>
    </div>
  );
}
// ---- END MAINTENANCE PAGE ----


// ---- NORMAL APP (commented out) ----
// import { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Preloader from './components/Preloader';
// import Home from './pages/Home';
// import AboutPage from './pages/AboutPage';
// import OperationsPage from './pages/OperationsPage';
// import LogisticsPage from './pages/LogisticsPage';
// import ClientsPage from './pages/ClientsPage';
// import ProductsPage from './pages/ProductsPage';
// import LeadershipPage from './pages/LeadershipPage';
// import RegionalTeamPage from './pages/RegionalTeamPage';
// import ContactPage from './pages/ContactPage';
//
// function AppContent() {
//   const location = useLocation();
//
//   return (
//     <div className="min-h-screen bg-secondary-50">
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/operations" element={<OperationsPage />} />
//           <Route path="/logistics" element={<LogisticsPage />} />
//           <Route path="/clients" element={<ClientsPage />} />
//           <Route path="/products" element={<ProductsPage />} />
//           <Route path="/leadership" element={<LeadershipPage />} />
//           <Route path="/regional-team" element={<RegionalTeamPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>
//       </AnimatePresence>
//     </div>
//   );
// }
//
// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//
//   return (
//     <Router>
//       <div>
//         <AnimatePresence mode="wait">
//           {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
//         </AnimatePresence>
//         <AppContent />
//       </div>
//     </Router>
//   );
// }
// ---- END NORMAL APP ----

export default App;
