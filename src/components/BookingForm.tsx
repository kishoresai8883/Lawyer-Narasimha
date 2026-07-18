import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  CheckCircle, 
  Shield, 
  ArrowRight 
} from 'lucide-react';

export function BookingForm() {
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingService, setBookingService] = useState('General Consultation');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDesc, setBookingDesc] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Custom Toast/Notification trigger
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  // Booking scheduler dates generator
  const getUpcomingDays = () => {
    const days = [];
    const dateNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    let added = 0;
    let i = 1; // Start from tomorrow
    while (added < 5) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      // Skip Sundays
      if (d.getDay() !== 0) {
        days.push({
          raw: d.toISOString().split('T')[0],
          dayName: dateNames[d.getDay()],
          dateNum: d.getDate(),
          month: monthNames[d.getMonth()]
        });
        added++;
      }
      i++;
    }
    return days;
  };

  const upcomingDays = getUpcomingDays();

  // Booking time slots
  const timeSlots = [
    '10:00 AM - 11:00 AM (Morning)',
    '11:30 AM - 12:30 PM (Morning)',
    '02:00 PM - 03:00 PM (Afternoon)',
    '03:30 PM - 04:30 PM (Afternoon)',
    '05:00 PM - 06:00 PM (Evening)'
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail || !bookingPhone) {
      triggerToast('Please complete all contact details.');
      return;
    }

    setIsSubmitting(true);
    // Simulate premium transaction loading
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmed(true);
      triggerToast('Consultation appointment successfully booked!');
    }, 2000);
  };

  const resetBooking = () => {
    setBookingStep(1);
    setBookingDate('');
    setBookingTime('');
    setBookingName('');
    setBookingEmail('');
    setBookingPhone('');
    setBookingDesc('');
    setBookingConfirmed(false);
  };

  return (
    <div className="relative">
      
      {/* Toast Notification inside form boundary or relative viewport */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="glassmorphism border border-brand-gold/30 px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-brand-gold" />
          <span className="text-gray-200 text-sm font-medium">{toastMessage}</span>
        </div>
      </div>

      {/* Interactive Multi-step card */}
      <div className="glassmorphism rounded-2xl border border-brand-gold/25 shadow-2xl p-6 sm:p-10 relative">
        
        {/* Step Indicators */}
        {!bookingConfirmed && (
          <div className="flex justify-between items-center border-b border-brand-gold/15 pb-8 mb-8 text-xs sm:text-sm">
            {[
              { step: 1, label: 'Choose Consultation' },
              { step: 2, label: 'Date & Time' },
              { step: 3, label: 'Briefing Details' }
            ].map((s) => (
              <div key={s.step} className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border transition-all duration-300 ${bookingStep === s.step ? 'bg-brand-gold text-brand-dark border-brand-gold' : bookingStep > s.step ? 'bg-brand-gold/20 text-brand-gold border-brand-gold/45' : 'bg-transparent text-gray-500 border-white/10'}`}>
                  {bookingStep > s.step ? '✓' : s.step}
                </div>
                <span className={`hidden sm:inline font-medium uppercase tracking-wider ${bookingStep === s.step ? 'text-white' : 'text-gray-500'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Select service type */}
        {!bookingConfirmed && bookingStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="serif-title text-xl font-bold text-white">Select Legal Service Domain</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'General Legal Consultation', time: '45 Mins', desc: 'Diagnostic risk-mapping for general litigation and civil claims.' },
                { title: 'Corporate Counsel & Strategy', time: '60 Mins', desc: 'Boardroom restructurings, M&A guidance, and venture licensing.' },
                { title: 'Criminal Case Diagnostic', time: '60 Mins', desc: 'Immediate evaluation of bails, economic defenses, and enforcement notices.' },
                { title: 'Constitutional & Appellate Writ Review', time: '45 Mins', desc: 'Evaluating writ jurisdiction options and high court appeals.' }
              ].map((srv, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setBookingService(srv.title);
                    setBookingStep(2);
                    triggerToast(`Selected service: ${srv.title}`);
                  }}
                  className={`text-left p-5 rounded-lg border transition-all duration-300 ${bookingService === srv.title ? 'bg-brand-gold/10 border-brand-gold shadow-lg' : 'border-white/5 hover:border-brand-gold/30 hover:bg-white/5'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white text-sm sm:text-base">{srv.title}</span>
                    <span className="text-[10px] bg-brand-gold/15 text-brand-gold px-2 py-0.5 rounded font-mono font-semibold">{srv.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{srv.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date and Time selection */}
        {!bookingConfirmed && bookingStep === 2 && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <h3 className="serif-title text-xl font-bold text-white">Reserve Session Slot</h3>
              <span className="text-xs text-brand-gold font-medium uppercase tracking-wider">{bookingService}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Calendar Column */}
              <div className="space-y-4">
                <span className="text-xs tracking-wider uppercase text-gray-400 font-bold block flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-brand-gold" />
                  <span>Select Available Day:</span>
                </span>
                <div className="grid grid-cols-5 gap-2.5">
                  {upcomingDays.map((day) => (
                    <button
                      key={day.raw}
                      onClick={() => setBookingDate(day.raw)}
                      className={`p-3 rounded-lg border flex flex-col items-center justify-center transition-all duration-300 ${bookingDate === day.raw ? 'bg-brand-gold text-brand-dark border-brand-gold font-bold shadow-md scale-105' : 'border-white/5 hover:border-brand-gold/25 hover:bg-white/5 text-gray-300'}`}
                    >
                      <span className="text-[10px] uppercase font-bold opacity-75">{day.dayName}</span>
                      <span className="text-lg font-bold my-1">{day.dateNum}</span>
                      <span className="text-[10px] uppercase font-semibold">{day.month}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots Column */}
              <div className="space-y-4">
                <span className="text-xs tracking-wider uppercase text-gray-400 font-bold block flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>Available Time Slots:</span>
                </span>
                <div className="space-y-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      disabled={!bookingDate}
                      onClick={() => setBookingTime(slot)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-between ${!bookingDate ? 'opacity-40 cursor-not-allowed border-white/5' : bookingTime === slot ? 'bg-brand-gold/15 border-brand-gold text-white font-bold' : 'border-white/5 hover:border-brand-gold/30 hover:bg-white/5 text-gray-300'}`}
                    >
                      <span>{slot}</span>
                      {bookingTime === slot && <CheckCircle className="w-4 h-4 text-brand-gold" />}
                    </button>
                  ))}
                </div>
                {!bookingDate && (
                  <p className="text-[10px] text-brand-gold italic">Please select an available day first.</p>
                )}
              </div>
            </div>

            {/* Back / Next actions */}
            <div className="flex justify-between items-center pt-4 border-t border-brand-gold/15">
              <button 
                onClick={() => setBookingStep(1)} 
                className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300"
              >
                Back to service
              </button>
              <button 
                disabled={!bookingDate || !bookingTime}
                onClick={() => setBookingStep(3)}
                className={`flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-sm border ${(!bookingDate || !bookingTime) ? 'opacity-40 cursor-not-allowed border-white/10 text-gray-500' : 'bg-brand-gold text-brand-dark border-brand-gold hover:bg-brand-gold-light transition-all duration-300'}`}
              >
                <span>Proceed to Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Briefing form details */}
        {!bookingConfirmed && bookingStep === 3 && (
          <form onSubmit={handleBookingSubmit} className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h3 className="serif-title text-xl font-bold text-white">Client Briefing & Contact Information</h3>
              <div className="text-right">
                <span className="block text-[10px] uppercase font-bold text-brand-gold">{bookingService}</span>
                <span className="block text-[10px] text-gray-400 font-mono mt-0.5">{bookingDate} @ {bookingTime.split(' (')[0]}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">Full Client Name *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-brand-gold/60" />
                  <input 
                    type="text" 
                    required
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    placeholder="e.g. Director Narasimhan"
                    className="w-full bg-brand-dark-card border border-brand-gold/15 focus:border-brand-gold focus:outline-none rounded-lg py-3 pl-11 pr-4 text-sm text-white transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">Secure Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-brand-gold/60" />
                  <input 
                    type="email" 
                    required
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    placeholder="e.g. client@enterprise.com"
                    className="w-full bg-brand-dark-card border border-brand-gold/15 focus:border-brand-gold focus:outline-none rounded-lg py-3 pl-11 pr-4 text-sm text-white transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">Confidential Contact Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-brand-gold/60" />
                  <input 
                    type="tel" 
                    required
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-brand-dark-card border border-brand-gold/15 focus:border-brand-gold focus:outline-none rounded-lg py-3 pl-11 pr-4 text-sm text-white transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">Related Legal Dossier / Documents</label>
                <div className="border border-dashed border-brand-gold/25 bg-brand-dark-card rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer hover:border-brand-gold/50 duration-300">
                  <span className="text-xs text-gray-400">Select PDF briefs (Max 15MB)</span>
                  <span className="text-[10px] bg-brand-gold/10 text-brand-gold border border-brand-gold/30 px-2 py-1 rounded font-bold uppercase">Browse</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">Confidential Summary of Legal Issue</label>
              <textarea 
                value={bookingDesc}
                onChange={(e) => setBookingDesc(e.target.value)}
                rows={4}
                placeholder="Provide a succinct summary of key dates, opposing parties, or specific notices served. (All entries protected by Attorney privilege)"
                className="w-full bg-brand-dark-card border border-brand-gold/15 focus:border-brand-gold focus:outline-none rounded-lg p-4 text-sm text-white transition-all duration-300"
              />
            </div>

            {/* Back / Book actions */}
            <div className="flex justify-between items-center pt-4 border-t border-brand-gold/15">
              <button 
                type="button"
                onClick={() => setBookingStep(2)} 
                className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300"
              >
                Back to scheduler
              </button>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center space-x-3 text-xs font-bold uppercase tracking-widest text-brand-dark bg-brand-gold hover:bg-brand-gold-light transition-all duration-300 px-8 py-4 rounded-sm border border-brand-gold shadow-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
                    <span>Securing Slot...</span>
                  </div>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    <span>Confirm Consultation Appointment</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Confirmed / Ticket State */}
        {bookingConfirmed && (
          <div className="text-center py-8 px-4 space-y-8 animate-fade-in">
            <div className="w-20 h-20 bg-brand-gold/10 border border-brand-gold/40 rounded-full flex items-center justify-center mx-auto relative">
              <CheckCircle className="w-10 h-10 text-brand-gold" />
              <div className="absolute inset-0 rounded-full border border-brand-gold animate-ping opacity-25" />
            </div>

            <div className="space-y-3">
              <h3 className="serif-title text-2xl sm:text-4xl font-bold text-white">Consultation Fully Secured</h3>
              <p className="text-gray-400 text-sm max-w-lg mx-auto font-light leading-relaxed">
                Your appointment has been registered under the secure client log. A formal briefing guide and secure digital link has been dispatched to <span className="text-white font-medium">{bookingEmail}</span>.
              </p>
            </div>

            {/* Print/Share Card Ticket */}
            <div className="max-w-md mx-auto text-left glassmorphism border border-brand-gold/30 rounded-xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/5 rounded-full blur-xl" />
              
              {/* Decorative cutouts for ticket look */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-brand-dark rounded-full border-r border-brand-gold/20" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-brand-dark rounded-full border-l border-brand-gold/20" />

              <div className="space-y-4 pb-4 border-b border-dashed border-brand-gold/20">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] tracking-wider uppercase text-brand-gold font-bold">Appointment Dossier</span>
                  <span className="text-[9px] bg-brand-gold/15 text-brand-gold px-2 py-0.5 rounded font-mono">CONFIDENTIAL</span>
                </div>
                <h4 className="serif-title text-lg font-bold text-white">{bookingService}</h4>
              </div>

              <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-light text-gray-300">
                <div>
                  <span className="block text-[9px] tracking-wider uppercase text-gray-500 font-bold">Counsel Lead</span>
                  <span className="block text-white font-medium mt-0.5">Advocate Narasimha</span>
                </div>
                <div>
                  <span className="block text-[9px] tracking-wider uppercase text-gray-500 font-bold">Client Nominee</span>
                  <span className="block text-white font-medium mt-0.5">{bookingName}</span>
                </div>
                <div>
                  <span className="block text-[9px] tracking-wider uppercase text-gray-500 font-bold">Confirmed Date</span>
                  <span className="block text-white font-medium mt-0.5">{bookingDate}</span>
                </div>
                <div>
                  <span className="block text-[9px] tracking-wider uppercase text-gray-500 font-bold">Scheduled Time</span>
                  <span className="block text-white font-medium mt-0.5">{bookingTime.split(' (')[0]}</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={resetBooking}
                className="text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-gold-light transition-colors duration-300"
              >
                Schedule Another Consultation
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
