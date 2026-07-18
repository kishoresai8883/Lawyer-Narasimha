import { Award, BookOpen, Briefcase, Shield } from 'lucide-react';

export function AboutPage() {
  return (
    <section className="py-32 bg-brand-navy-dark min-h-screen animate-fade-in relative overflow-hidden">
      {/* Decorative layout background lights */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Professional Headshot Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Behind absolute decorative borders */}
              <div className="absolute -inset-3 rounded-lg border border-brand-gold/20 scale-[0.98] group-hover:scale-100 group-hover:border-brand-gold/45 duration-500 pointer-events-none" />
              <div className="absolute -inset-1 border border-brand-gold/30 rounded-lg pointer-events-none" />

              {/* Visual profile image */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl gold-glow bg-brand-dark max-w-sm">
                <img
                  src={`${import.meta.env.BASE_URL}narasimha_profile.png`}
                  alt="Advocate Narasimha Portrait"
                  className="w-full h-auto object-cover object-center filter grayscale-[25%] contrast-105 hover:grayscale-0 duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-dark/95 via-brand-dark/50 to-transparent p-6 text-center">
                  <span className="block serif-title text-xl font-bold text-white tracking-wide">NARASIMHA REDDY</span>
                  <span className="block text-xs text-brand-gold font-medium uppercase tracking-wider mt-1">Senior Appellate & Corporate Counsel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Bio Section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase block">Counsel Profile</span>
              <h1 className="serif-title text-4xl sm:text-5xl font-bold text-white">Laying Foundations of Strategic Advocacy</h1>
              <div className="w-20 h-0.5 bg-brand-gold mt-2" />
            </div>

            <div className="space-y-6 text-gray-300 font-light text-base sm:text-lg leading-relaxed">
              <p>
                With an illustrious career spanning over two decades of practice in Appellate courts, tribunals, and the Supreme Court of India, Advocate Narasimha has established a repute of clinical precision and surgical courtroom strategies.
              </p>
              <p>
                Our counsel focuses on complex corporate governance challenges, cross-border M&A regulatory compliance, economic crime defense, and appellate constitutional review. The core operational standard centers around meticulous analysis, absolute integrity, and a relentless devotion to securing critical client mandates.
              </p>
            </div>

            {/* Grid of Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-brand-gold/10 border border-brand-gold/30 mt-0.5">
                  <Award className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white uppercase tracking-wider">Education & Credentials</span>
                  <span className="block text-sm text-gray-400 font-light mt-0.5 leading-snug">
                    LL.M. in Corporate Law, National Law School. Active member of Appellate Bar Associations.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-brand-gold/10 border border-brand-gold/30 mt-0.5">
                  <BookOpen className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white uppercase tracking-wider">Appellate Milestones</span>
                  <span className="block text-sm text-gray-400 font-light mt-0.5 leading-snug">
                    Successfully argued 180+ Constitutional writ appeals and complex corporate asset recoveries.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-brand-gold/10 border border-brand-gold/30 mt-0.5">
                  <Briefcase className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white uppercase tracking-wider">Corporate Advisory</span>
                  <span className="block text-sm text-gray-400 font-light mt-0.5 leading-snug">
                    Serves as key strategic legal strategist for 50+ technology and real estate boards.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-brand-gold/10 border border-brand-gold/30 mt-0.5">
                  <Shield className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white uppercase tracking-wider">Uncompromising Code</span>
                  <span className="block text-sm text-gray-400 font-light mt-0.5 leading-snug">
                    Advocating under the highest threshold of professional ethics and attorney confidentiality.
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
