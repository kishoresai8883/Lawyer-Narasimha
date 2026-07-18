
export function Stats() {
  const statsList = [
    { value: '2+', label: 'Years of Advocacy' },
    { value: '98%', label: 'Litigation Success' },
    { value: '18+', label: 'Supreme Court Appeals' },
    { value: '20+', label: 'Clients Protected' }
  ];

  return (
    <section id="stats" className="bg-brand-navy-dark border-t border-b border-brand-gold/15 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsList.map((stat, i) => (
          <div key={i} className="space-y-1">
            <span className="block serif-title text-4xl sm:text-5xl font-extrabold text-brand-gold">{stat.value}</span>
            <span className="block text-xs font-semibold tracking-widest text-gray-400 uppercase">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
