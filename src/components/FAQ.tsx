import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What happens during the initial consultation with Advocate Narasimha?',
      answer: 'During the initial consultation, we conduct an exhaustive diagnostic review of your legal matter. Advocate Narasimha will review your documents, map key legal risks, outline viable strategies (litigation, mediation, or structural changes), and provide a direct assessment of prospective timelines and outcomes.'
    },
    {
      question: 'How are the legal fees and representation models structured?',
      answer: 'Our billing frameworks conform to absolute transparency. Depending on the complexity and type of legal issue, we offer fixed-retainers (for corporate advisory), flat fees (for specific writ or bail proceedings), and hourly corporate rates. Complete fee structures and billing parameters are formalized prior to representation.'
    },
    {
      question: 'Can Advocate Narasimha represent clients in the Supreme Court and other High Courts?',
      answer: 'Yes. Advocate Narasimha is fully authorized to appear, plead, and practice before the Supreme Court of India, as well as multiple State High Courts and specialized appellate tribunals (like NCLAT, NGT, and DRAT) across the country.'
    },
    {
      question: 'What is your operational philosophy regarding complex economic and white-collar defense?',
      answer: 'We believe that white-collar cases are won in pre-trial investigations and meticulous regulatory mapping. We proactively coordinate with financial specialists, audit trails, and data forensics to secure critical evidence, challenge procedural arbitrariness, and prevent unconstitutional enforcement actions.'
    },
    {
      question: 'How do we submit documents for evaluation prior to our consultation?',
      answer: 'You can securely upload files directly in our interactive scheduler module, or email secure PDF dossiers to counsel@narasimhalaw.com. All shared documentation is instantly protected by absolute Attorney-Client privilege.'
    }
  ];

  return (
    <section id="faqs" className="py-24 bg-brand-navy-dark relative overflow-hidden">
      {/* Decorative layout line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase block">Legal FAQs</span>
          <h2 className="serif-title text-3xl sm:text-5xl font-bold text-white">Inquiries & Clarifications</h2>
          <div className="w-24 h-0.5 bg-brand-gold mx-auto mt-4" />
          <p className="text-gray-400 text-base font-light max-w-lg mx-auto">
            Addressing crucial regulatory questions, representation scopes, and pre-litigation consultation parameters.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className={`glassmorphism rounded-xl border transition-all duration-500 overflow-hidden ${isOpen ? 'border-brand-gold/45 shadow-xl bg-brand-navy/20' : 'border-white/5'}`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                >
                  <h3 className={`font-semibold text-sm sm:text-lg tracking-wide transition-colors duration-300 ${isOpen ? 'text-brand-gold' : 'text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className={`p-2 rounded-full border transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-brand-gold/15 border-brand-gold text-brand-gold' : 'bg-white/5 border-transparent text-gray-400'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] border-t border-brand-gold/15' : 'max-h-0'}`}>
                  <div className="p-6 sm:p-8 text-gray-300 font-light text-sm sm:text-base leading-relaxed bg-brand-dark/40">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
