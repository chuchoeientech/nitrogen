import Layout from '../components/Layout';
import { Globe2, Ship, Anchor, Briefcase, Map } from 'lucide-react';

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
        <Layout>
            <div className="pt-24 pb-12 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">Global Operations</h1>
                    <p className="text-xl text-blue-200 max-w-3xl">
                        Connecting producers and consumers across more than 30 countries with efficiency and expertise.
                    </p>
                </div>
            </div>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Operational Excellence</h2>
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
                            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2899736/pexels-photo-2899736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <Map className="w-6 h-6 text-blue-400" />
                                    <span className="font-semibold">Global Reach</span>
                                </div>
                                <p className="text-sm text-slate-200">Operating across major global trade routes</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What We Do</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-blue-300 transition-all hover:-translate-y-1 hover:shadow-lg group">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                    <p className="text-slate-600">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
