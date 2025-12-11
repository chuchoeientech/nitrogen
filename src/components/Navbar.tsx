import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            // Solo trackear scroll en la home
            if (location.pathname === '/') {
                const sections = ['home', 'company-overview', 'global-operations', 'logistics-supply-chain', 'clients', 'products-services', 'leadership', 'regional-team', 'contact'];
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
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const navLinks = [
        { name: 'About', id: 'company-overview', path: '/about' },
        { name: 'Operations', id: 'global-operations', path: '/operations' },
        { name: 'Logistics', id: 'logistics-supply-chain', path: '/logistics' },
        { name: 'Clients', id: 'clients', path: '/clients' },
        { name: 'Products', id: 'products-services', path: '/products' },
        { name: 'Leadership', id: 'leadership', path: '/leadership' },
        { name: 'Regional Team', id: 'regional-team', path: '/regional-team' },
    ];

    const isLinkActive = (path: string, sectionId: string) => {
        if (location.pathname === '/' && activeSection === sectionId) {
            return true;
        }
        return location.pathname === path;
    };

    const handleLogoClick = () => {
        setIsOpen(false);
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            location.pathname !== '/' || activeSection !== 'home'
            ? 'bg-secondary-900/95 backdrop-blur-md shadow-lg border-b border-white/5'
            : 'bg-secondary-900/70 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        className="flex items-center gap-3 group focus:outline-none"
                    >
                        <img src="/nitrogen-logo.png" alt="Nitrogen Agencies" className="w-40 h-30 pb-4 rounded-lg object-fit transition-all duration-300" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className={`text-sm font-medium transition-all duration-200 ${isLinkActive(link.path, link.id)
                                        ? 'text-primary-400'
                                        : 'text-secondary-400 hover:text-primary-400'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            to="/contact"
                            className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get in touch
                        </Link>
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
                            <Link
                                key={link.id}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 text-sm font-medium transition-colors ${isLinkActive(link.path, link.id)
                                    ? 'text-primary-400'
                                    : 'text-secondary-400 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-left px-4 py-3 rounded-full text-sm font-bold bg-primary-600 text-white hover:bg-primary-700 transition-colors mt-2"
                        >
                            Get in touch
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
