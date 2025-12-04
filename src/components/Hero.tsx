import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image (external) - consider switching to a local asset for better control */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center bg-no-repeat filter brightness-[0.6] saturate-100"></div>

      {/* Dark overlay to ensure legible text */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-secondary-900/30"></div>

      {/* Decorative accent shape */}
      <svg className="absolute -right-32 -bottom-20 w-96 opacity-30 pointer-events-none transform rotate-12 blur-2xl" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="600" height="600" rx="300" fill="url(#g1)" />
      </svg>

      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-24 sm:py-32 text-center">
        <motion.div
          className="mx-auto max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-heading font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide mb-4 text-secondary-200">A UK-Based Leader in</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-primary-200 tracking-tight drop-shadow-sm pb-2 leading-[1.15]">
              Global Nitrogen Fertilizer Marketing &amp; Logistics
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-secondary-200 leading-relaxed max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            A UK-based leader in global nitrogen fertilizer marketing, distribution, and logistics since 2009.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
