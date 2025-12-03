import { Globe, TrendingUp, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              About Nitrogen Agencies Ltd.
            </h2>
            <div className="w-24 h-1 bg-blue-600"></div>
            <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
              <p>
                Nitrogen Agencies Ltd. is a British company specialized in the marketing, trading,
                and strategic management of nitrogen fertilizers, with a primary focus on urea.
              </p>
              <p>
                Since our establishment in 2009, we have partnered with producers, distributors,
                and industrial consumers across the world. We are dedicated to providing reliable
                market access and delivering tailored commercial strategies that drive value for
                our partners.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Global Reach</h3>
                <p className="text-slate-600">
                  Connecting markets across continents with seamless logistics and distribution networks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Market Leadership</h3>
                <p className="text-slate-600">
                  Over a decade of proven excellence in nitrogen fertilizer trading and management.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Trusted Partners</h3>
                <p className="text-slate-600">
                  Building lasting relationships with producers and consumers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
