import { motion } from 'framer-motion';

const clients = [
    { name: 'Cargill', file: 'cargill.png' },
    { name: 'ADM', file: 'adm.png' },
    { name: 'Fertipar', file: 'fertipar.png' },
    { name: 'Dreyfus', file: 'dreyfus.png' },
    { name: 'QAFCO', file: 'qafco.png' },
    { name: 'OCI Global', file: 'oci-global.png' },
    { name: 'YPF', file: 'ypf.png' },
    { name: 'Safco', file: 'safco.png' },
    { name: 'Yara', file: 'yara.png' },
    { name: 'CF Industries', file: 'cf-industries.png' },
    { name: 'Kronospan', file: 'kronospan.png' },
    { name: 'BASF', file: 'basf.png' },
];

export default function Clients() {
    return (
        <section id="clients" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-3">
                        Clients, Suppliers & Receivers
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Trusted partners and counterparties across the global supply chain.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {clients.map((c) => (
                        <div
                            key={c.file}
                            className="flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-colors"
                        >
                            <p>{c.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
