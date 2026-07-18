import { BookingForm } from '../components/BookingForm';

export function SchedulerPage() {
  return (
    <section className="py-32 bg-brand-dark min-h-screen animate-fade-in relative overflow-hidden">
      {/* Background visual details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-gold/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase block">Schedule Counsel</span>
          <h1 className="serif-title text-4xl sm:text-6xl font-bold text-white">Book Your Consultation</h1>
          <div className="w-24 h-0.5 bg-brand-gold mx-auto mt-4" />
          <p className="text-gray-400 text-base sm:text-lg font-light max-w-2xl mx-auto pt-2">
            Initiate a comprehensive, fully confidential case review. Follow the interactive steps below to reserve Advocate Narasimha's dedicated briefing slot.
          </p>
        </div>

        {/* Scheduler Form Widget */}
        <BookingForm />

      </div>
    </section>
  );
}
