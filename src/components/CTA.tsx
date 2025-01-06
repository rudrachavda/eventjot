import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 transform skew-y-3 -z-10" />
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center transform -skew-y-3">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Ready to supercharge your email marketing?
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="mt-10">
            <button className="group inline-flex items-center px-8 py-4 rounded-xl text-blue-600 bg-white hover:bg-blue-50 transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}