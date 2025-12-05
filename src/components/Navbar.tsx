import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
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
        { name: 'About', id: 'company-overview' },
        { name: 'Operations', id: 'global-operations' },
        { name: 'Logistics', id: 'logistics-supply-chain' },
        { name: 'Clients', id: 'clients' },
        { name: 'Products', id: 'products-services' },
        { name: 'Leadership', id: 'leadership' },
        { name: 'Regional Team', id: 'regional-team' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${activeSection !== 'home'
            ? 'bg-secondary-900/95 backdrop-blur-md shadow-lg border-b border-white/5'
            : 'bg-secondary-900/70 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center gap-3 group focus:outline-none"
                    >
                        <img src="/nitrogen-logo.png" alt="Nitrogen Agencies" className="w-14 h-14 rounded-lg object-fit shadow-lg transition-all duration-300" />
                        <div className="hidden md:block">
                            <h1 className="text-white font-heading font-bold text-base leading-tight">
                                Nitrogen Agencies
                            </h1>
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`text-sm font-medium transition-all duration-200 ${activeSection === link.id
                                        ? 'text-primary-400'
                                        : 'text-secondary-400 hover:text-primary-400'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get in touch
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="lg:hidden pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${activeSection === link.id
                                    ? 'text-primary-400'
                                    : 'text-secondary-400 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="w-full text-left px-4 py-3 rounded-full text-sm font-bold bg-primary-600 text-white hover:bg-primary-700 transition-colors mt-2"
                        >
                            Get in touch
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
