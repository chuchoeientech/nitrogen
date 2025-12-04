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

function App() {
  return (
    <div className="min-h-screen bg-secondary-50">
      <Navbar />
      <main>
        <Hero />
        <CompanyOverview />
        <GlobalOperations />
        <LogisticsSupplyChain />
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
