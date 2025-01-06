import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] -z-1" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            <span className="block mb-2 animate-slide-up">Transform Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-slide-up-delay">
              JotForm Data
            </span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-8 md:max-w-3xl animate-fade-in-delay">
            Seamlessly convert form submissions into targeted email campaigns. 
            Connect JotForm to Gmail and supercharge your B2B marketing efforts.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 animate-fade-in-delay-2">
            <button className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}