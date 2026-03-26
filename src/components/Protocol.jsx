import React from 'react';

const Protocol = () => (
  <section className="py-40 px-8 md:px-24 bg-graphite/30">
    <div className="max-w-4xl">
      <h2 className="font-serif text-6xl mb-20 italic">Project 120 Protocols.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
        <div className="p-8 border border-chalk/5 bg-obsidian/40 backdrop-blur-md hover:border-chalk/20 transition-colors">
          <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-gray-500">01. AM / Dream Log</h4>
          <p className="text-sm leading-relaxed opacity-70">Capture subconscious output before external input. 1% daily introspection.</p>
        </div>
        <div className="p-8 border border-chalk/5 bg-obsidian/40 backdrop-blur-md hover:border-chalk/20 transition-colors">
          <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-gray-500">02. The 1% Audit</h4>
          <p className="text-sm leading-relaxed opacity-70">Identify one friction point. Subtract it. Improvement by removal.</p>
        </div>
        <div className="p-8 border border-chalk/5 bg-obsidian/40 backdrop-blur-md hover:border-chalk/20 transition-colors">
          <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-gray-500">03. PM / Gratitude</h4>
          <p className="text-sm leading-relaxed opacity-70">Evidence-based reflection. Stacking wins to cement the new identity.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Protocol;
