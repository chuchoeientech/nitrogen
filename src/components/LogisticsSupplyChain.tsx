import { Ship, Anchor, Truck, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LogisticsSupplyChain() {
    const partners = [
        {
            icon: Ship,
            title: 'Shipowners and chartering partners',
        },
        {
            icon: Anchor,
            title: 'River barge operators',
        },
        {
            icon: Truck,
            title: 'Trucking and inland logistics companies',
        },
    ];

    return (
        <section id="logistics-supply-chain" className="py-24 bg-slate-50 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                        Logistics & Supply Chain
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-2 gap-16 items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Efficient logistics are fundamental to competitive commodity trading.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Nitrogen Agencies maintains strong relationships with:
                        </p>

                        <div className="space-y-4 pl-6">
                            {partners.map((partner, index) => {
                                const Icon = partner.icon;
                                return (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <p className="text-slate-800 font-medium">{partner.title}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed pt-4">
                            These partnerships enable the company to provide <span className="font-bold text-blue-700">cost-effective, timely, and reliable delivery solutions</span> from origin to destination.
                        </p>
                    </div>

                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.dnv.com/contentassets/5a26489ae236476f80e2063cc9454f00/ct_bulk_542_bulk_carrier_at_sea.jpg')] bg-cover bg-center"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <Package className="w-6 h-6 text-blue-400" />
                                <span className="font-semibold">Integrated Logistics</span>
                            </div>
                            <p className="text-sm text-slate-200">End-to-end supply chain management</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
