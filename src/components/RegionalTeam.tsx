import { MapPin, Award, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RegionalTeam() {
    const regions = [
        {
            region: 'North America',
            name: 'Chip Ramsay',
            description: 'An industry veteran with unrivalled experience in nitrogen fertilizer trading.',
            background: [
                'Has run trading offices in London, Singapore and New Orleans',
                'Set up the marketing division of Brunei Fertiliser Industries\'s 1.5 million tonnes per annum urea factory',
                'Joined Nitrogen Agencies in 2023, focusing on the United States distribution system in the Mississippi River'
            ],
            icon: MapPin,
        },
        {
            region: 'North Europe',
            name: 'Walter Stumpf',
            description: 'Our focus is on Germany and distribution of imported urea through the Rhine barge system.',
            background: [
                'Founder of Belor, a pioneer of fertilizer trading in the Baltic region post-1990',
                'Specializes in the industrial market as raw material for Urea Formaldehyde Resin to the Multi Density Fibre board industry (MDF)',
                'Expert in DEF (AdBlue®) for the road haulage truck market for Catalytic Reduction control systems used in diesel engines',
                'Quality control on logistics is our USP in this high-quality sector of the urea market'
            ],
            icon: Building2,
        },
    ];

    return (
        <section id="regional-team" className="py-24 bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                        Regional Operations
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Our regional experts bring decades of experience and deep market knowledge to serve clients across key markets.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {regions.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                className={`grid lg:grid-cols-12 gap-8 items-start ${
                                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                                }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className={`lg:col-span-5 ${index % 2 === 0 ? '' : 'lg:col-start-8'}`}>
                                    <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-blue-100 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900">{item.region}</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                            <h4 className="text-xl font-bold text-slate-800">{item.name}</h4>
                                        </div>
                                        <p className="text-lg text-slate-700 italic mb-4">{item.description}</p>
                                    </div>
                                </div>

                                <div className={`lg:col-span-7 ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                                        <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                            <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                                            Background & Expertise
                                        </h4>
                                        <ul className="space-y-4">
                                            {item.background.map((point, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-slate-700 leading-relaxed">{point}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
