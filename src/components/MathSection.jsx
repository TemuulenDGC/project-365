import React from 'react';

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
        <p className="text-gray-500 italic">
          You are building a reservoir of proof. By the time the curve turns vertical, 
          the foundation is already unbreakable.
        </p>
      </div>
    </div>
  </section>
);

export default MathSection;
