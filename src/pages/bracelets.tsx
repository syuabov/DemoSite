import React from 'react';

const Bracelets: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white py-20 sm:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Stunning Bracelets
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Adorn your wrist with our elegant collection of bracelets, from classic tennis bracelets to modern cuffs
          </p>
        </div>
      </section>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Bracelets Collection</h2>
        <p className="text-slate-600">Coming soon with full product catalog</p>
      </section>
    </div>
  );
};

export default Bracelets;
