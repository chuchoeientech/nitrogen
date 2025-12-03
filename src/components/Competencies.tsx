import { Globe2, Repeat, LineChart, Target } from 'lucide-react';

export default function Competencies() {
  const competencies = [
    {
      icon: Globe2,
      title: 'Global Sourcing',
      description: 'Connecting supply and demand across international borders.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Repeat,
      title: 'Structured Trading',
      description: 'Executing complex trade deals with efficiency.',
      color: 'from-cyan-600 to-cyan-700',
    },
    {
      icon: LineChart,
      title: 'Market Intelligence',
      description: 'Leveraging deep industry data to inform decisions.',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: Target,
      title: 'Strategic Management',
      description: 'Tailored commercial strategies for the Nitrogen and Urea sectors.',
      color: 'from-slate-700 to-slate-800',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive solutions across the nitrogen fertilizer value chain
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 hover:border-blue-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${competency.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {competency.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {competency.description}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${competency.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
