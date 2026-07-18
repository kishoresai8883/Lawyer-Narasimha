import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  Building,
  Scale,
  Lock,
  ChevronLeft,
  ChevronRight,
  Quote,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { Stats } from '../components/Stats';

export function Home() {
  const previewAreas = [
    {
      title: 'Corporate & Commercial Law',
      description: 'Securing structural excellence, mergers, venture capital compliance, and cross-border advisory.',
      icon: <Building className="w-6 h-6 text-brand-gold" />
    },
    {
      title: 'Criminal Defense & Appeals',
      description: 'Vigorous representation, pre-trial diagnostic mapping, and high court appellate advocacy.',
      icon: <Shield className="w-6 h-6 text-brand-gold" />
    },
    {
      title: 'Civil & Commercial Litigation',
      description: 'Surgical dispute resolution in contract breaches, property title claims, and equity partnerships.',
      icon: <Scale className="w-6 h-6 text-brand-gold" />
    },
    {
      title: 'Constitutional Writ Jurisdictions',
      description: 'Upholding civil liberties, challenging arbitrary administrative actions before the high court benches.',
      icon: <Award className="w-6 h-6 text-brand-gold" />
    }
  ];

  const pillars = [
    {
      title: 'Clinical Precision',
      description: 'Meticulous legal diagnosis, evidence cataloging, and rigorous framing prior to entering court proceedings.',
      icon: <CheckCircle className="w-6 h-6 text-brand-gold" />
    },
    {
      title: 'Appellate Mastery',
      description: 'Decisive, persuasive advocacy developed through years of active engagement before high courts and tribunals.',
      icon: <BookOpen className="w-6 h-6 text-brand-gold" />
    },
    {
      title: 'Absolute Privilege',
      description: 'Strict adherence to professional ethics, ensuring complete statutory attorney-client confidentiality.',
      icon: <Lock className="w-6 h-6 text-brand-gold" />
    },
    {
      title: 'Commercial Acumen',
      description: 'Aligning complex corporate governance structures with fast-moving regulatory and commercial realities.',
      icon: <Briefcase className="w-6 h-6 text-brand-gold" />
    }
  ];

  const testimonials = [
    {
      quote: "Advocate Narasimha's boardroom advisory was pivotal during our multi-jurisdictional acquisition. His grasp of complex regulatory frameworks and risk mitigation is outstanding.",
      author: "K. R. Raghavan",
      role: "CEO, Apex Fintech Solutions"
    },
    {
      quote: "In high-stakes commercial disputes, Advocate Narasimha brings clinical precision. He recovered our disputed commercial assets under extremely tight court timelines.",
      author: "Meera Deshmukh",
      role: "Managing Director, Landmark Infrastructure"
    },
    {
      quote: "Faced with aggressive federal enforcement action, we turned to Narasimha. His swift constitutional writ saved our operations from arbitrary closure.",
      author: "Dr. Aditya Varma",
      role: "Founder, Veda Bio-Tech Labs"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="animate-fade-in">

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}lawyer_office_hero.png`}
            alt="Lawyer Office backdrop"
            className="w-full h-full object-cover object-center scale-105 filter brightness-35 contrast-105 saturate-75 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-transparent to-brand-dark/65" />
          {/* Subtle gold grid effect */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* Top Tagline */}
            <div className="inline-flex items-center space-x-2 border border-brand-gold/30 bg-brand-gold/5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wider text-brand-gold uppercase">
              <Shield className="w-3.5 h-3.5" />
              <span>Uncompromising Legal Excellence & Advocacy</span>
            </div>

            {/* Main Premium Typography */}
            <div className="space-y-4">
              <h1 className="serif-title text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                Dignity. Strategy. <br />
                <span className="gold-gradient">Absolute Defense.</span>
              </h1>
              <p className="max-w-2xl text-gray-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed">
                Specializing in high-stakes Corporate Advisory, Constitutional Writ Litigation, and vigorous Criminal Defense before Appellate Courts and the Supreme Court of India.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/scheduler"
                className="flex items-center justify-center space-x-3 text-xs font-semibold uppercase tracking-widest text-brand-dark bg-brand-gold hover:bg-brand-gold-light hover:shadow-lg transition-all duration-300 px-8 py-4 rounded-sm border border-brand-gold"
              >
                <span>Schedule Confidential Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/practice-areas"
                className="flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-widest text-white border border-white/20 hover:border-brand-gold hover:text-brand-gold hover:bg-white/5 transition-all duration-300 px-8 py-4 rounded-sm"
              >
                <span>Explore Jurisdictions</span>
              </Link>
            </div>
          </div>

          {/* Quick legal credential box on side */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glassmorphism p-8 rounded-lg border border-brand-gold/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/10 duration-300" />
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center border border-brand-gold/25">
                  <Award className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="serif-title text-xl font-bold text-white tracking-wide">Elite Jurisdictional Standing</h3>
                <div className="space-y-4 text-sm text-gray-300 font-light">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span>Enrolled under the Bar Council of India with practicing rights in all states.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span>Specialized representation in Appellate Writs, Corporate Mergers, and Economic Bail hearings.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span>Strict compliance with professional ethics & full Attorney-Client privilege.</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs tracking-wider uppercase text-brand-gold font-medium">Verify Standing</span>
                  <Link to="/about" className="text-white hover:text-brand-gold transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <Stats />

      {/* Intro section */}
      <section className="py-24 bg-brand-dark border-b border-brand-gold/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs tracking-widest text-brand-gold font-semibold uppercase block">Integrity & Diligence</span>
          <h2 className="serif-title text-3xl sm:text-5xl font-bold text-white">Clinical Counsel for High-Stakes Litigation</h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            Advocate Narasimha represents corporate boards, financial leaders, and private citizens facing multi-agency enforcement, constitutional actions, and complex arbitrations. By bringing exhaustive legal planning, rigorous evidentiary assembly, and clinical boardroom strategies, we secure key results under tight timelines.
          </p>
          <div className="pt-4">
            <Link
              to="/practice-areas"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-all duration-300 border-b border-brand-gold/30 pb-1"
            >
              <span>Review Practice Jurisdictions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview Section */}
      <section className="py-28 bg-brand-navy-dark relative overflow-hidden border-b border-brand-gold/10">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase block">Areas of Counsel</span>
            <h2 className="serif-title text-3xl sm:text-5xl font-bold text-white">Jurisdictional Specialization</h2>
            <div className="w-20 h-0.5 bg-brand-gold mx-auto mt-4" />
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed pt-2">
              Delivering clinical advocacy and corporate structural advice across high-stakes legal frontiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewAreas.map((area, i) => (
              <div
                key={i}
                className="glassmorphism p-8 rounded-lg border border-white/5 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-500 flex flex-col justify-between group gold-glow-hover"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/20 group-hover:border-brand-gold/40 transition-colors duration-300">
                    {area.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="serif-title text-lg font-bold text-white tracking-wide">{area.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">{area.description}</p>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    to="/practice-areas"
                    className="text-xs font-semibold uppercase tracking-widest text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300 inline-flex items-center space-x-1.5"
                  >
                    <span>Learn Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Advocacy (Core Strengths) */}
      <section className="py-28 bg-brand-dark relative border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase block">Chamber Standard</span>
            <h2 className="serif-title text-3xl sm:text-5xl font-bold text-white">Our Pillars of Advocacy</h2>
            <div className="w-20 h-0.5 bg-brand-gold mx-auto mt-4" />
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed pt-2">
              Uncompromising standards designed to protect client assets, liberties, and corporate integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="glassmorphism p-8 rounded-lg border border-brand-gold/15 flex items-start space-x-6 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/[0.02] rounded-full blur-2xl group-hover:bg-brand-gold/[0.05] duration-300" />
                <div className="p-4 rounded-lg bg-brand-gold/10 border border-brand-gold/25 mt-1 flex-shrink-0">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="serif-title text-xl font-bold text-white tracking-wide">{pillar.title}</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinguished Precedents (Notable Cases)
      <section className="py-28 bg-brand-navy-dark relative border-b border-brand-gold/10">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase block">Track Record</span>
            <h2 className="serif-title text-3xl sm:text-5xl font-bold text-white">Distinguished Precedents</h2>
            <div className="w-20 h-0.5 bg-brand-gold mx-auto mt-4" />
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed pt-2">
              Sanitized case studies reflecting appellate triumphs and complex boardroom victories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {precedents.map((precedent, i) => (
              <div
                key={i}
                className="glassmorphism p-8 rounded-lg border border-white/5 hover:border-brand-gold/20 flex flex-col justify-between relative group hover:shadow-2xl transition-all duration-500"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-wider uppercase text-brand-gold font-bold px-2.5 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full">
                      {precedent.tag}
                    </span>
                    <span className="text-xs font-mono text-gray-500">{precedent.value}</span>
                  </div>
                  <h3 className="serif-title text-xl font-bold text-white leading-snug tracking-wide">
                    {precedent.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {precedent.details}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center space-x-2 text-brand-gold">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-medium tracking-wide uppercase">{precedent.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      Client Reflections (Interactive Carousel) */}
      <section className="py-28 bg-brand-dark relative border-b border-brand-gold/10">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase block">Testimonials</span>
            <h2 className="serif-title text-3xl sm:text-5xl font-bold text-white">Client Reflections</h2>
            <div className="w-20 h-0.5 bg-brand-gold mx-auto mt-4" />
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed pt-2">
              Confidential feedback from real estate boards, technology executives, and private advisory clients.
            </p>
          </div>

          <div className="relative glassmorphism p-8 sm:p-12 rounded-2xl border border-brand-gold/20 shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

            {/* Top quote icon & slider details */}
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <Quote className="w-10 h-10 text-brand-gold/30" />
                <div className="flex space-x-1">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeTestimonial === idx ? 'bg-brand-gold w-6' : 'bg-white/20'}`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="transition-all duration-500 ease-in-out min-h-[140px] flex items-center">
                <p className="text-white text-base sm:text-xl font-light italic leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="block serif-title text-base sm:text-lg font-bold text-white tracking-wide">
                    {testimonials[activeTestimonial].author}
                  </span>
                  <span className="block text-xs text-brand-gold font-medium uppercase tracking-wider mt-0.5">
                    {testimonials[activeTestimonial].role}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2.5 rounded-full border border-white/10 hover:border-brand-gold hover:text-brand-gold bg-brand-navy-dark/30 hover:bg-brand-navy-dark/70 text-gray-400 transition-all duration-300 cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2.5 rounded-full border border-white/10 hover:border-brand-gold hover:text-brand-gold bg-brand-navy-dark/30 hover:bg-brand-navy-dark/70 text-gray-400 transition-all duration-300 cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidential Consultation CTA Banner */}
      <section className="py-28 bg-brand-navy-dark relative overflow-hidden">
        {/* Elegant overlay lights */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy/10 to-brand-navy-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="glassmorphism p-8 sm:p-16 rounded-2xl border border-brand-gold/30 shadow-2xl relative text-center space-y-8 gold-glow overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase block">Schedule an Appointment</span>
              <h2 className="serif-title text-3xl sm:text-5xl font-bold text-white tracking-wide">
                Initiate a Confidential Briefing
              </h2>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-lg mx-auto">
                Consultations are conducted under strict statutory professional privilege rules. Secure your calendar allocation for a clinical case assessment.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/scheduler"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 text-xs font-semibold uppercase tracking-widest text-brand-dark bg-brand-gold hover:bg-brand-gold-light hover:shadow-lg transition-all duration-300 px-8 py-4 rounded-sm border border-brand-gold"
              >
                <span>Book Chambers Consult</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-widest text-white border border-white/20 hover:border-brand-gold hover:text-brand-gold hover:bg-white/5 transition-all duration-300 px-8 py-4 rounded-sm"
              >
                <span>Registry Channels</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
