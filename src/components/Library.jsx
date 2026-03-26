import React from 'react';

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
          <div key={i} className="flex justify-between items-center py-10 border-b border-chalk/10 group cursor-pointer overflow-hidden">
            <div className="font-serif text-4xl group-hover:italic group-hover:translate-x-4 transition-all duration-500">
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

export default Library;
