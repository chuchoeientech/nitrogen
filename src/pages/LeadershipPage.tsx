import Layout from '../components/Layout';
import { Quote, Award, History, Globe } from 'lucide-react';

export default function LeadershipPage() {
    return (
        <Layout>
            <div className="pt-24 pb-12 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">Leadership</h1>
                    <p className="text-xl text-blue-200 max-w-3xl">
                        Guided by decades of experience and a vision for global excellence.
                    </p>
                </div>
            </div>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        {/* Profile Image Column */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-24">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-8 bg-slate-200 relative group">
                                    <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h2 className="text-2xl font-bold">David Aitken</h2>
                                        <p className="text-blue-300 font-medium">Founder & Managing Director</p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Award className="w-5 h-5 text-blue-600" />
                                        Key Expertise
                                    </h3>
                                    <ul className="space-y-3 text-slate-600 text-sm">
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            Global Fertilizer Trading
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            Market Intelligence
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            Strategic Management
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            International Logistics
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-8 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">A Legacy of Industry Leadership</h2>
                                <div className="prose prose-lg text-slate-700 leading-relaxed">
                                    <p className="mb-6">
                                        With over <span className="font-bold text-blue-700">40 years of experience</span> in the global fertilizer industry, David Aitken leads Nitrogen Agencies with deep market knowledge and a proven track record of success.
                                    </p>
                                    <p>
                                        His expertise in market intelligence, global sourcing, and structured trading has shaped Nitrogen Agencies into a trusted partner for producers and traders worldwide. Under his leadership, the company has navigated complex market cycles and established itself as a reliable bridge between supply and demand.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 relative overflow-hidden">
                                <Quote className="absolute top-4 right-4 w-24 h-24 text-blue-100 -z-10" />
                                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                                    <History className="w-6 h-6" />
                                    Career Background
                                </h3>
                                <div className="space-y-8">
                                    <div className="relative pl-8 border-l-2 border-blue-200">
                                        <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                                        <h4 className="text-lg font-bold text-slate-900">Director at Fertecon</h4>
                                        <p className="text-sm text-blue-600 font-medium mb-2">Now part of S&P Global</p>
                                        <p className="text-slate-600">
                                            Served as Director for the leading fertilizer market intelligence provider, gaining unparalleled insights into global market trends and data analysis.
                                        </p>
                                    </div>

                                    <div className="relative pl-8 border-l-2 border-blue-200">
                                        <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                                        <h4 className="text-lg font-bold text-slate-900">Senior Executive at Transammonia Inc.</h4>
                                        <p className="text-sm text-blue-600 font-medium mb-2">Previously the world's largest fertilizer trading company</p>
                                        <p className="text-slate-600">
                                            Held a senior executive role in the urea trading division, managing large-scale international transactions and logistics.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Globe className="w-6 h-6 text-blue-600" />
                                    Vision for Nitrogen Agencies
                                </h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    David founded Nitrogen Agencies Ltd. in 2009 with a clear mission: to provide a more personalized, strategic approach to fertilizer trading. By combining the scale and capability of a large trading house with the agility and focus of a specialized agency, he has built an organization that prioritizes long-term value and partnership over short-term gains.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
