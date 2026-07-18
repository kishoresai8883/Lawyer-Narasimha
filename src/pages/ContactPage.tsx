import { MapPin, Phone, Mail, Lock, ArrowRight } from 'lucide-react';
import { FAQ } from '../components/FAQ';

export function ContactPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-32 bg-brand-dark min-h-screen relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase block">Chambers Address</span>
            <h1 className="serif-title text-4xl sm:text-6xl font-bold text-white">Connect with Our Chambers</h1>
            <div className="w-24 h-0.5 bg-brand-gold mx-auto mt-4" />
            <p className="text-gray-400 text-base sm:text-lg font-light max-w-lg mx-auto pt-2">
              Our professional legal chambers are strategically located adjacent to key appellate courts for logistical efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

            {/* Left: Contact Info details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h2 className="serif-title text-2xl font-bold text-white">Chamber Information</h2>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  For formal summon services, writ documents, or specialized economic briefs, please refer to our certified channels below. Prior scheduled booking is mandatory for chamber consults.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-6 flex-1 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-lg bg-brand-gold/10 border border-brand-gold/25 mt-0.5 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Chambers Address</span>
                    <span className="block text-base text-white font-medium mt-1 leading-normal">
                      District Court, Judicial Enclave, <br />
                      Main Road, Anaparthi - 533264
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-lg bg-brand-gold/10 border border-brand-gold/25 mt-0.5 flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Direct Chambers line</span>
                    <a href="tel:+91114567890" className="block text-base text-white font-medium mt-1 hover:text-brand-gold duration-300">
                      +91 11 4567 8901 / +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-lg bg-brand-gold/10 border border-brand-gold/25 mt-0.5 flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Secure Registry Email</span>
                    <a href="mailto:counsel@narasimhalaw.com" className="block text-base text-white font-medium mt-1 hover:text-brand-gold duration-300">
                      counsel@narasimhalaw.com / registry@narasimhalaw.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Secure Notice */}
              <div className="glassmorphism p-5 rounded-lg border border-brand-gold/15 flex items-start space-x-3.5 bg-brand-navy/15">
                <Lock className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-white uppercase tracking-wider">Attorney-Client Privilege</span>
                  <p className="text-xs text-gray-400 font-light mt-0.5 leading-relaxed">
                    All communications, briefs, and telephone consultations made via chambers channels are governed by absolute statutory client confidentiality privileges under Section 126 of the Indian Evidence Act.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Mock Premium Map with elegant design */}
            <div className="lg:col-span-7">
              <div className="glassmorphism rounded-2xl border border-brand-gold/20 shadow-2xl overflow-hidden h-full min-h-[400px] relative group">
                {/* Background visual map element */}
                <div className="absolute inset-0 opacity-[0.25] bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                <div className="absolute inset-0 bg-brand-navy/20 pointer-events-none" />

                {/* Elegant central card detailing map marker */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div className="glassmorphism border border-brand-gold/30 p-8 rounded-xl max-w-sm shadow-2xl relative">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/15 border border-brand-gold/45 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 duration-300">
                      <MapPin className="w-6 h-6 text-brand-gold" />
                    </div>
                    <span className="block text-[10px] tracking-wider uppercase text-brand-gold font-bold mb-1">Chambers Location Map</span>
                    <h4 className="serif-title text-lg font-bold text-white mb-2">High Court & Supreme Court Enclave</h4>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                      Strategically positioned less than 500 meters from the Appellate Benches for instant summon filings, administrative writs, and judicial filings.
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-bold text-brand-dark bg-brand-gold hover:bg-brand-gold-light transition-all duration-300 px-4 py-2 rounded shadow-md uppercase tracking-wider"
                    >
                      <span>Navigate via GPS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Corner details */}
                <div className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest text-brand-gold/40">
                  LAT: 28.6139° N / LONG: 77.2090° E
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embed FAQ section inside Contact/General enquiries page for thoroughness */}
      <FAQ />
    </div>
  );
}
