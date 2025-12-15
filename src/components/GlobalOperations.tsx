import { Globe2, Ship, Anchor, Briefcase, Map } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GlobalOperations() {
    const services = [
        {
            icon: Globe2,
            title: 'International Sourcing',
            description: 'Identifying and securing high-quality nitrogen products from reliable producers worldwide.',
        },
        {
            icon: Briefcase,
            title: 'Market Development',
            description: 'Opening new markets and establishing long-term commercial relationships.',
        },
        {
            icon: Anchor,
            title: 'Long-term Supply Programs',
            description: 'Structuring sustainable supply chains for industrial consumers.',
        },
        {
            icon: Ship,
            title: 'Logistics Coordination',
            description: 'Managing the complex logistics of global fertilizer movement.',
        },
    ];

    return (
        <section id="global-operations" className="py-24 bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                        Global Operations
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Connecting producers and consumers across more than 30 countries with efficiency and expertise.
                    </p>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-2 gap-16 items-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-6">Operational Excellence</h3>
                        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                            <p>
                                Headquartered in Edinburgh, Scotland, Nitrogens has built a team of seasoned professionals with extensive commercial and operational expertise.
                            </p>
                            <p>
                                The group has successfully traded over <span className="font-bold text-blue-700">20 million tonnes</span> of urea across more than <span className="font-bold text-blue-700">30 countries</span>, consistently supporting long-term supply programs, spot opportunities, and strategic market placements.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.pexels.com/photos/2899736/pexels-photo-2899736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Global Shipping and Logistics"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <Map className="w-6 h-6 text-blue-400" />
                                <span className="font-semibold">Global Reach</span>
                            </div>
                            <p className="text-sm text-slate-200">Operating across major global trade routes</p>
                        </div>
                    </div>
                </motion.div>

                <motion.h3
                    className="text-3xl font-bold text-slate-900 mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >What We Do</motion.h3>
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 transition-all hover:-translate-y-1 hover:shadow-lg group">
                                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                                <p className="text-slate-600">{service.description}</p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
