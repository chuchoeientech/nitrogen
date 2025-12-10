import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CompanyOverview from '../components/CompanyOverview';
import GlobalOperations from '../components/GlobalOperations';
import LogisticsSupplyChain from '../components/LogisticsSupplyChain';
import ProductsServices from '../components/ProductsServices';
import Leadership from '../components/Leadership';
import RegionalTeam from '../components/RegionalTeam';
import Contact from '../components/Contact';
import Clients from '../components/Clients';

export default function Home() {
    return (
        <Layout>
            <div id="home">
                <Hero />
            </div>
            <div id="company-overview">
                <CompanyOverview />
            </div>
            <div id="global-operations">
                <GlobalOperations />
            </div>
            <div id="logistics-supply-chain">
                <LogisticsSupplyChain />
            </div>
            <div id="clients">
                <Clients />
            </div>
            <div id="products-services">
                <ProductsServices />
            </div>
            <div id="leadership">
                <Leadership />
            </div>
            <div id="regional-team">
                <RegionalTeam />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </Layout>
    );
}
