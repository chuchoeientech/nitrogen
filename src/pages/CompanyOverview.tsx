import Layout from '../components/Layout';
import { Calendar, Globe, Award, TrendingUp } from 'lucide-react';

export default function CompanyOverview() {
    const timeline = [
        {
            year: '2009',
            title: 'Establishment',
            description: 'Nitrogens was founded in the UK with a vision to bridge the gap between producers and industrial consumers in the nitrogen market.',
        },
        {
            year: '2012',
            title: 'Global Expansion',
            description: 'Expanded operations to serve over 10 countries, establishing key partnerships in Europe and South America.',
        },
        {
            year: '2015',
            title: 'Volume Milestone',
            description: 'Surpassed 5 million tonnes of urea traded cumulatively, solidifying our position as a reliable market player.',
        },
        {
            year: '2018',
            title: 'Strategic Partnerships',
            description: 'Formed long-term supply agreements with major global producers, ensuring consistent availability for our partners.',
        },
        {
            year: '2021',
            title: 'Digital Transformation',
            description: 'Implemented advanced logistics tracking and market intelligence systems to enhance service delivery.',
        },
        {
            year: 'Present',
            title: 'Industry Leader',
            description: 'Trading over 20 million tonnes cumulatively across 20+ countries, led by a team with deep industry expertise.',
        },
    ];

    return (
        <Layout>
            <div className="pt-24 pb-12 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">Company Overview</h1>
                    <p className="text-xl text-blue-200 max-w-3xl">
                        A legacy of trust, expertise, and strategic growth in the global nitrogen fertilizer market.
                    </p>
                </div>
            </div>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 mb-24">
                        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
                            <p>
                                Nitrogens is a UK-based company specializing in the marketing, trading, and strategic management of nitrogen fertilizers, with a primary focus on urea.
                            </p>
                            <p>
                                Since our establishment in 2009, we have partnered with producers, distributors, and industrial consumers across the globe—providing reliable market access, tailored commercial strategies, and efficient execution across the entire supply chain.
                            </p>
                            <p>
                                We are headquartered in Edinburgh, Scotland, and operate with an international mindset, delivering value-driven solutions to long-term partners worldwide.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                                <Globe className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                <div className="text-3xl font-bold text-slate-900 mb-1">2 0+</div>
                                <div className="text-sm text-slate-600">Countries Served</div>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                                <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                <div className="text-3xl font-bold text-slate-900 mb-1">20M+</div>
                                <div className="text-sm text-slate-600">Tonnes Traded</div>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                                <Calendar className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                <div className="text-3xl font-bold text-slate-900 mb-1">2009</div>
                                <div className="text-sm text-slate-600">Established</div>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                                <Award className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                <div className="text-3xl font-bold text-slate-900 mb-1">40+</div>
                                <div className="text-sm text-slate-600">Years Leadership Exp.</div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Journey</h2>
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 hidden md:block"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="flex-1 w-full md:w-auto">
                                        <div className={`bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-blue-300 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-slate-600">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>

                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
