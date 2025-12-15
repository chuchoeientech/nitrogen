import { Quote, Award, History, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Leadership
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Guided by decades of experience and a vision for global excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-12 gap-12 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Profile Image Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-8 bg-slate-200 relative group">
                <img
                  src={"/david-aitken.jpg"}
                  alt="David Aitken, Founder & Managing Director"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold text-white">David Aitken</h3>
                  <p className="text-blue-200 font-medium">Founder & Managing Director</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Key Expertise
                </h4>
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
              <h3 className="text-3xl font-bold text-slate-900 mb-6">A Legacy of Industry Leadership</h3>
              <div className="prose prose-lg text-slate-700 leading-relaxed">
                <p className="mb-6">
                  With over <span className="font-bold text-blue-700">40 years of experience</span> in the global fertilizer industry, David Aitken leads Nitrogens with deep market knowledge and a proven track record of success.
                </p>
                <p>
                  His expertise in market intelligence, global sourcing, and structured trading has shaped Nitrogens into a trusted partner for producers and traders worldwide. Under his leadership, the company has navigated complex market cycles and established itself as a reliable bridge between supply and demand.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-blue-100 relative overflow-hidden shadow-sm">
              <Quote className="absolute top-4 right-4 w-24 h-24 text-blue-50 -z-10" />
              <h4 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <History className="w-6 h-6" />
                Career Background
              </h4>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                  <h5 className="text-lg font-bold text-slate-900">Director at Fertecon</h5>
                  <p className="text-sm text-blue-600 font-medium mb-2">Now part of S&P Global</p>
                  <p className="text-slate-600">
                    Served as Director for the leading fertilizer market intelligence provider, gaining unparalleled insights into global market trends and data analysis.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                  <h5 className="text-lg font-bold text-slate-900">Senior Executive at Transammonia Inc.</h5>
                  <p className="text-sm text-blue-600 font-medium mb-2">Previously the world's largest fertilizer trading company</p>
                  <p className="text-slate-600">
                    Held a senior executive role in the urea trading division, managing large-scale international transactions and logistics.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-600" />
                Vision for Nitrogens
              </h4>
              <p className="text-lg text-slate-700 leading-relaxed">
                David founded Nitrogens in 2009 with a clear mission: to provide a more personalized, strategic approach to fertilizer trading by combining the scale and capability of a large trading house with the agility and focus of a specialized agency, he has built an organization that prioritizes long-term value and partnership over short-term gains.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
