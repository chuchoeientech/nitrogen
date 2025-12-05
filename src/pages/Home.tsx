import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Leadership from '../components/Leadership';
import Competencies from '../components/Competencies';
import Clients from '../components/Clients';

export default function Home() {
    return (
        <Layout>
            <Hero />
            <About />
            <Leadership />
            <Competencies />
            <Clients />
        </Layout>
    );
}
