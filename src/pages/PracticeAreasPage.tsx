import React, { useState } from 'react';
import { 
  Building, 
  Shield, 
  Scale, 
  Award, 
  Lock, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';

interface PracticeArea {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  specialties: string[];
  keyWin: string;
}

export function PracticeAreasPage() {
  const [selectedArea, setSelectedArea] = useState('corporate');

  const practiceAreas: PracticeArea[] = [
    {
      id: 'corporate',
      title: 'Corporate & Commercial Law',
      icon: <Building className="w-6 h-6 text-brand-gold" />,
      tagline: 'Securing structural excellence and commercial compliance.',
      description: 'Comprehensive legal frameworks for corporate entities, multinational operations, venture mergers, and cross-border transactions. Our counsel protects enterprise integrity while ensuring scalable commercial strategies.',
      specialties: ['Mergers & Acquisitions', 'Venture Capital & Structuring', 'Intellectual Property Protection', 'Corporate Governance', 'Regulatory Compliance'],
      keyWin: 'Successfully steered a $42M international tech acquisition, navigating complex multi-jurisdictional compliance and corporate restructures.'
    },
    {
      id: 'criminal',
      title: 'Criminal Defense & Appeals',
      icon: <Shield className="w-6 h-6 text-brand-gold" />,
      tagline: 'Vigorous representation protecting your fundamental rights.',
      description: 'White-collar defense, complex economic prosecutions, appellate advocacy, and constitutional rights. We prepare relentlessly and defend client liberties in state and high courts with surgical precision.',
      specialties: ['White-Collar Crime Defense', 'Economic & Fraud Cases', 'Constitutional Appeals', 'Quashing Proceedings', 'Anticipatory & Regular Bail'],
      keyWin: 'Obtained a complete acquittal for a prominent business executive facing complex multi-agency financial litigation in the High Court.'
    },
    {
      id: 'civil',
      title: 'Civil & Commercial Litigation',
      icon: <Scale className="w-6 h-6 text-brand-gold" />,
      tagline: 'Surgical advocacy in high-stakes legal disputes.',
      description: 'Resolution of property conflicts, contract violations, partnership dissolutions, and corporate liability. We advocate strategically to secure asset integrity, breach recoveries, and critical injunctions.',
      specialties: ['Contract Disputes', 'Property & Real Estate Litigation', 'Arbitration & ADR', 'Shareholder Disputes', 'Injunctions & Writs'],
      keyWin: 'Recovered full damages and secured land title rights in a long-standing $8.5M commercial real estate partnership dispute.'
    },
    {
      id: 'constitutional',
      title: 'Constitutional & Writ Jurisdiction',
      icon: <Award className="w-6 h-6 text-brand-gold" />,
      tagline: 'Championing civil liberties and public law remedies.',
      description: 'Upholding fundamental constitutional guarantees. We represent entities and citizens before appellate tribunals and High Courts, challenging arbitrary administrative actions and defending civil liberties.',
      specialties: ['Writ Petitions', 'Public Interest Litigation (PIL)', 'Administrative Law Challenges', 'Service Matters', 'Fundamental Rights Enforcement'],
      keyWin: 'Successfully challenged an unconstitutional regulatory state notification, restoring business operating licenses for thousands of retail entities.'
    },
    {
      id: 'ip',
      title: 'Intellectual Property & Technology',
      icon: <Lock className="w-6 h-6 text-brand-gold" />,
      tagline: 'Defending ideas and technological boundaries.',
      description: 'Strategic IP litigation, tech patent conflicts, trade secret enforcement, copyright protection, and complex digital compliance in an increasingly globalized, software-driven landscape.',
      specialties: ['Patent Prosecution & Defense', 'Trademark Infringement Disputes', 'Trade Secret Enforcement', 'Software licensing counsel', 'Data Protection & Cyber Law'],
      keyWin: 'Protected key artificial intelligence proprietary algorithms for a major fintech startup in a high-profile copyright violation battle.'
    }
  ];

  const currentArea = practiceAreas.find(area => area.id === selectedArea) || practiceAreas[0];

  return (
    <section className="py-32 bg-brand-dark min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase block">Jurisdictional Depth</span>
          <h1 className="serif-title text-4xl sm:text-6xl font-bold text-white">Areas of Specialized Counsel</h1>
          <div className="w-24 h-0.5 bg-brand-gold mx-auto mt-4" />
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed pt-2">
            Our chambers deliver clinical legal solutions tailored for high-stakes commercial conflicts, corporate structuring, bail defense, and constitutional protections.
          </p>
        </div>

        {/* Interactive tabs layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs List */}
          <div className="lg:col-span-5 space-y-3">
            {practiceAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area.id)}
                className={`w-full text-left p-5 rounded-lg flex items-center space-x-4 transition-all duration-300 border ${selectedArea === area.id ? 'glassmorphism border-brand-gold/40 shadow-xl bg-brand-navy/35 scale-[1.02]' : 'border-white/5 hover:border-brand-gold/25 hover:bg-white/5'}`}
              >
                <div className={`p-3 rounded-lg border ${selectedArea === area.id ? 'bg-brand-gold/15 border-brand-gold/30' : 'bg-white/5 border-transparent'}`}>
                  {area.icon}
                </div>
                <div className="flex-1">
                  <span className="block font-semibold text-sm sm:text-base text-white tracking-wide">{area.title}</span>
                  <span className={`block text-xs font-light tracking-wide truncate ${selectedArea === area.id ? 'text-brand-gold' : 'text-gray-400'}`}>{area.tagline}</span>
                </div>
                <ArrowRight className={`w-4 h-4 transition-all duration-300 ${selectedArea === area.id ? 'text-brand-gold translate-x-1' : 'text-gray-500 opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>

          {/* Selected Panel Detail */}
          <div className="lg:col-span-7 glassmorphism p-8 sm:p-10 rounded-xl border border-brand-gold/20 shadow-2xl relative overflow-hidden min-h-[460px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-lg bg-brand-gold/15 border border-brand-gold/30">
                  {currentArea.icon}
                </div>
                <div>
                  <span className="text-xs text-brand-gold tracking-widest uppercase font-semibold">Specialized Practice</span>
                  <h2 className="serif-title text-2xl sm:text-3xl font-bold text-white">{currentArea.title}</h2>
                </div>
              </div>

              <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
                {currentArea.description}
              </p>

              {/* Specialties Sub-list */}
              <div className="space-y-3 pt-2">
                <span className="text-xs tracking-wider uppercase text-brand-gold font-bold block">Key Domains of Expertise:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentArea.specialties.map((spec, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Win Spotlight */}
            <div className="mt-8 border-t border-brand-gold/15 pt-6 bg-brand-gold/5 -mx-8 sm:-mx-10 px-8 sm:px-10 pb-6 rounded-b-xl">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs font-semibold tracking-wider text-brand-gold uppercase block">Precedent / Legal Win Spotlight:</span>
                  <p className="text-sm text-gray-200 italic font-light leading-relaxed mt-1">
                    "{currentArea.keyWin}"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
