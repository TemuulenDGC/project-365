import React from 'react';

// Hero Section: The Dramatic Entrance
const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center px-8 md:px-24">
    <div className="max-w-6xl">
      <p className="font-sans text-xs tracking-[0.4em] uppercase mb-8 opacity-50">Project 365 / Vol. 01</p>
      <h1 className="font-serif text-[18vw] md:text-[14vw] leading-[0.8] formula-glow tracking-tighter">
        (n)<sup className="italic text-[8vw] md:text-[6vw] ml-2">1.1</sup>
      </h1>
      <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <p className="max-w-md font-sans text-lg font-light leading-relaxed text-gray-400">
          The philosophy of the asymptote. Small, daily variations in input that lead to 
          insurmountable leads in output.
        </p>
        <div className="font-serif italic text-2xl border-b border-chalk/20 pb-2">
          "Stacking bricks for the house you can't see yet."
        </div>
      </div>
    </div>
  </section>
);

// Math Section: The Science of Growth
const MathSection = () => (
  <section className="py-40 px-8 md:px-24 bg-chalk text-obsidian">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <h2 className="font-serif text-6xl md:text-8xl leading-none">
        The Plateau of <br/><i>Latent Potential.</i>
      </h2>
      <div className="space-y-6 font-sans text-lg leading-relaxed max-w-lg">
        <p>
          Most progress is delayed. The <b>n<sup>1.1</sup></b> power-law formula acknowledges that 
          early efforts don't yield immediate visible results.
        </p>
        <p className="text-gray-500">
          You are building a reservoir of proof. By the time the curve turns vertical, 
          the foundation is already unbreakable.
        </p>
      </div>
    </div>
  </section>
);

// The Library: Citing the Sources
const Library = () => {
  const stack = [
    { title: "Atomic Habits", author: "James Clear", role: "Systems" },
    { title: "The Compound Effect", author: "Darren Hardy", role: "Momentum" },
    { title: "Subtraction Rule", author: "Dan Zakaria", role: "Friction" }
  ];

  return (
    <section className="py-40 px-8 md:px-24">
      <h3 className="font-sans text-xs tracking-widest uppercase mb-16 opacity-40">The Intellectual Stack</h3>
      <div className="border-t border-chalk/10">
        {stack.map((item, i) => (
          <div key={i} className="flex justify-between items-center py-10 border-b border-chalk/10 group cursor-default">
            <div className="font-serif text-4xl group-hover:italic transition-all duration-300">
              {item.title}
            </div>
            <div className="text-right">
              <p className="font-sans text-sm font-semibold uppercase tracking-tighter">{item.role}</p>
              <p className="font-sans text-xs opacity-40">{item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Protocol Section: The 120-Day Execution
const Protocol = () => (
  <section className="py-40 px-8 md:px-24 bg-graphite/30">
    <div className="max-w-4xl">
      <h2 className="font-serif text-6xl mb-20 italic">Project 120 Protocols.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
        <div className="p-8 border border-chalk/5 bg-obsidian/40 backdrop-blur-md">
          <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-gray-500">01. AM / Dream Log</h4>
          <p className="text-sm leading-relaxed opacity-70">Capture subconscious output before external input. 1% daily introspection.</p>
        </div>
        <div className="p-8 border border-chalk/5 bg-obsidian/40 backdrop-blur-md">
          <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-gray-500">02. The 1% Audit</h4>
          <p className="text-sm leading-relaxed opacity-70">Identify one friction point. Subtract it. Improvement by removal.</p>
        </div>
        <div className="p-8 border border-chalk/5 bg-obsidian/40 backdrop-blur-md">
          <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-gray-500">03. PM / Gratitude</h4>
          <p className="text-sm leading-relaxed opacity-70">Evidence-based reflection. Stacking wins to cement the new identity.</p>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <main className="bg-obsidian selection:bg-chalk selection:text-obsidian">
      <Hero />
      <MathSection />
      <Library />
      <Protocol />
      <footer className="py-20 text-center border-t border-chalk/5 opacity-30 font-sans text-[10px] tracking-[0.5em] uppercase">
        Continuous Growth // Non-Negotiable
      </footer>
    </main>
  );
}
