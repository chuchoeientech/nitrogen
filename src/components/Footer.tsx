import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Nitrogen Agencies Ltd.</h3>
            <p className="text-blue-200 text-lg mb-6">
              Global Nitrogen Fertilizer Marketing, Distribution, and Logistics.
            </p>
            <p className="text-slate-300 leading-relaxed max-w-2xl">
              Established in 2009, we are a UK-based company dedicated to excellence in the
              strategic management, trading, and distribution of nitrogen fertilizers worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@nitrogenagencies.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@nitrogenagencies.com</span>
              </a>

              <a
                href="tel:+441234567890"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+44 (0) 1234 567 890</span>
              </a>

              <a
                href="https://linkedin.com/company/nitrogen-agencies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Nitrogen Agencies Ltd. All rights reserved.</p>
            <p>Registered in England and Wales</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
