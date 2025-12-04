import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 text-white py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-6">
          {/* Company Info */}
          <div className="lg:max-w-md">
            <h3 className="text-2xl font-heading font-bold mb-2 text-white">Nitrogen Agencies Ltd.</h3>
            <p className="text-primary-200 text-base font-light">
              Global Nitrogen Fertilizer Trading, Distribution, and Logistics.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@nitrogenagencies.com"
                className="flex items-center gap-3 text-secondary-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@nitrogenagencies.com</span>
              </a>

              <div className="space-y-2">
                <a
                  href="tel:+441312200321"
                  className="flex items-center gap-3 text-secondary-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-400">Edinburgh</p>
                    <span>+44 131 220 0321</span>
                  </div>
                </a>
                <a
                  href="tel:+442030088888"
                  className="flex items-center gap-3 text-secondary-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-400">London</p>
                    <span>+44 203 008 8888</span>
                  </div>
                </a>
              </div>

              <a
                href="https://linkedin.com/company/nitrogen-agencies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-secondary-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-secondary-400 text-sm">
            <p className="text-white">&copy; {new Date().getFullYear()} Nitrogen Agencies Ltd. All rights reserved.</p>
            <p>Registered in England and Wales</p>
            <p>Developed by <a href="https://eientech.io" className='hover:text-primary-400 transition-colors'>eien</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
