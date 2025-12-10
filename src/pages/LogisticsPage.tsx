import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import LogisticsSupplyChain from '../components/LogisticsSupplyChain';
import { useScrollToTop } from '../hooks/useScrollToTop';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
};

export default function LogisticsPage() {
    useScrollToTop();
    return (
        <Layout>
            <motion.div
                className="pt-24"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeOut' }}
            >
                <LogisticsSupplyChain />
            </motion.div>
        </Layout>
    );
}
