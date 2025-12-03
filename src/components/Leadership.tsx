import { Award, BarChart3, Building2 } from 'lucide-react';

export default function Leadership() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Decades of Industry Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <p className="text-xl text-slate-700 leading-relaxed">
                Our strategic vision is driven by{' '}
                <span className="font-semibold text-slate-900">David Aitken</span>,
                Founder and Managing Director, who brings more than{' '}
                <span className="font-semibold text-blue-600">40 years of experience</span>{' '}
                in the global fertilizer industry.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Market Intelligence</h3>
                    <p className="text-slate-600">
                      Former Director at Fertecon (now S&P Global), a leading fertilizer market
                      intelligence provider.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Global Trading</h3>
                    <p className="text-slate-600">
                      Former Senior Executive in the urea trading division of Transammonia Inc.,
                      previously the world's largest fertilizer trading company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10 text-center p-8">
                  <Award className="w-20 h-20 text-white mx-auto mb-4" />
                  <p className="text-white text-2xl font-bold">David Aitken</p>
                  <p className="text-blue-200 text-lg mt-2">Founder & Managing Director</p>
                  <div className="mt-6 pt-6 border-t border-blue-400">
                    <p className="text-4xl font-bold text-white">40+</p>
                    <p className="text-blue-200 text-sm uppercase tracking-wide mt-1">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-cyan-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
