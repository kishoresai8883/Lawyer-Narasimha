import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Scale, ArrowRight, Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/practice-areas', label: 'Practice Areas' },
    { to: '/about', label: 'Counsel Profile' },
    { to: '/scheduler', label: 'Schedule Consultation' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">

        {/* Logo Brand */}
        <Link to="/" className="flex items-center space-x-3 group" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-brand-gold/40 bg-brand-navy/60 group-hover:border-brand-gold duration-300">
            <Scale className="w-5 h-5 text-brand-gold" />
          </div>
          <div>
            <span className="block serif-title text-xl font-bold tracking-wide text-white group-hover:text-brand-gold transition-colors duration-300">NARASIMHA ASSOCIATES</span>
            <span className="block text-[10px] tracking-[0.25em] text-brand-gold font-medium uppercase">Supreme Court & High Court Counsel</span>
          </div>
        </Link>

        {/* Navigation links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-1 uppercase text-xs tracking-wider transition-colors duration-300 ${isActive ? 'text-brand-gold' : 'text-gray-400 hover:text-white'}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-gold animate-draw-line" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Header Button */}
        <Link
          to="/scheduler"
          className="hidden lg:flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-dark bg-brand-gold hover:bg-brand-gold-light transition-all duration-300 px-5 py-2.5 rounded-sm border border-brand-gold shadow-md"
        >
          <span>Book Counsel</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-brand-dark/95 backdrop-blur-lg z-30 transition-all duration-300">
          <nav className="flex flex-col space-y-6 p-8 text-lg font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-base uppercase tracking-wider ${isActive ? 'text-brand-gold font-bold' : 'text-gray-300 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/scheduler"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-dark bg-brand-gold hover:bg-brand-gold-light transition-all duration-300 px-6 py-4.5 rounded shadow-lg"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
