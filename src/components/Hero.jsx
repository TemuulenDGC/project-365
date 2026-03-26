import React from 'react';

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

export default Hero;
