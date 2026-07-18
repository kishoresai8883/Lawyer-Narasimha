import { Link } from 'react-router-dom';
import {
  Scale,
  Globe,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { to: '/', label: 'Home Chambers' },
    { to: '/about', label: 'Counsel Profile' },
    { to: '/practice-areas', label: 'Practice Areas' },
    { to: '/scheduler', label: 'Book Consult' },
    { to: '/contact', label: 'Contact Benches' }
  ];

  const serviceLinks = [
    { label: 'Corporate & M&A' },
    { label: 'Criminal Defense' },
    { label: 'Civil Litigation' },
    { label: 'Constitutional Writs' },
    { label: 'Intellectual Property' }
  ];

  const socialLinks = [
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      href: 'https://twitter.com',
      label: 'Twitter'
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      href: 'https://facebook.com',
      label: 'Facebook'
    },
    {
      icon: <Globe className="w-4 h-4" />,
      href: 'https://narasimhalaw.com',
      label: 'Website'
    }
  ];

  return (
    <footer className="bg-brand-navy-dark border-t border-brand-gold/15 pt-20 pb-12 relative text-xs sm:text-sm font-light text-gray-400">
      {/* Background elegant grid lines */}
      <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-16">

        {/* Top Section: Multi-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold duration-300">
                <Scale className="w-4.5 h-4.5 text-brand-gold" />
              </div>
              <div>
                <span className="block serif-title text-base font-bold text-white tracking-wide group-hover:text-brand-gold duration-300">
                  NARASIMHA ASSOCIATES
                </span>
                <span className="block text-[8px] tracking-[0.2em] text-brand-gold font-medium uppercase mt-0.5">
                  Appellate & Corporate Counsel
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Providing rigorous, clinical legal advocacy, cross-border corporate structure mapping, and constitutional defense before State High Courts and the Supreme Court of India.
            </p>
            {/* Premium Social Icons */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-gold/15 border border-white/5 hover:border-brand-gold/40 flex items-center justify-center text-gray-400 hover:text-brand-gold transition-all duration-300 hover:scale-115 hover:shadow-lg cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Chambers Directory */}
          <div className="space-y-6">
            <h3 className="serif-title text-sm sm:text-base font-bold text-white tracking-wider uppercase">
              Chambers Directory
            </h3>
            <ul className="space-y-3.5">
              {exploreLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-brand-gold transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-[1px] bg-brand-gold/40 group-hover:w-3 group-hover:bg-brand-gold transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practices & Jurisdictions */}
          <div className="space-y-6">
            <h3 className="serif-title text-sm sm:text-base font-bold text-white tracking-wider uppercase">
              Practices
            </h3>
            <ul className="space-y-3.5">
              {serviceLinks.map((link, i) => (
                <li key={i} className="flex items-center space-x-2 text-gray-400">
                  <span className="w-1.5 h-[1px] bg-brand-gold/40" />
                  <span>{link.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Chambers Info */}
          <div className="space-y-6">
            <h3 className="serif-title text-sm sm:text-base font-bold text-white tracking-wider uppercase">
              Secure Registry
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 leading-snug">
                  Judicial Enclave, Main Road, Anaparthi - 533264
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 leading-none">
                  +91 11 4567 8901
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 leading-none truncate">
                  counsel@narasimhalaw.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Divider, Disclaimers & Copyrights */}
        <div className="pt-8 border-t border-brand-gold/15 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
          {/* Bar Council Regulatory Disclaimer */}
          <div className="max-w-2xl space-y-2 lg:order-2">
            <span className="block text-[10px] text-gray-500 italic leading-relaxed">
              Regulatory Note: This web portal has been designed strictly in accordance with Bar Council of India guidelines. It functions solely as an informative digital directory for existing and prospective corporate clients, with no promotional advertisements or active counsel solicitation.
            </span>
          </div>

          {/* Copyrights */}
          <div className="flex-shrink-0 lg:order-1 space-y-1">
            <span className="block serif-title text-sm font-semibold text-white tracking-wide">
              NARASIMHA LEGAL CHAMBERS
            </span>
            <span className="block text-[9px] tracking-wider text-gray-500 uppercase">
              © {currentYear} All Rights Reserved. Privileged Counsel.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
