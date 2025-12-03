import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.id);
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Company Overview', id: 'company-overview' },
        { name: 'Global Operations', id: 'global-operations' },
        { name: 'Products & Services', id: 'products-services' },
        { name: 'Leadership', id: 'leadership' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between">
                    <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                            N
                        </div>
                        <span className="text-white font-bold text-xl tracking-tight group-hover:text-blue-200 transition-colors">
                            Nitrogen Agencies
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === link.id ? 'text-blue-400' : 'text-slate-300'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-600/50 hover:-translate-y-0.5"
                        >
                            Get in Touch
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-6 py-8 space-y-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors ${activeSection === link.id
                                        ? 'bg-blue-600/20 text-blue-400'
                                        : 'text-slate-300 hover:bg-white/5'
                                    }`}
                            >
                                <span className="font-medium">{link.name}</span>
                                <ChevronRight className="w-5 h-5 opacity-50" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
