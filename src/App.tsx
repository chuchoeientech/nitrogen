import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import GlobalOperations from './components/GlobalOperations';
import ProductsServices from './components/ProductsServices';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <CompanyOverview />
        <GlobalOperations />
        <ProductsServices />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
