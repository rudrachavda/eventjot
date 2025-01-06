import React from 'react';
import { Mail, Send, BarChart3, Zap, Users, Shield } from 'lucide-react';

const features = [
  {
    name: 'JotForm Integration',
    description: 'Connect your JotForm accounts and import form submissions automatically.',
    icon: Mail,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Gmail Integration',
    description: 'Send campaigns through Gmail with high deliverability rates.',
    icon: Send,
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    name: 'Campaign Analytics',
    description: 'Track opens, clicks, and conversions with detailed analytics.',
    icon: BarChart3,
    color: 'from-violet-500 to-violet-600'
  },
  {
    name: 'Automated Workflows',
    description: 'Set up automated email sequences based on form submissions.',
    icon: Zap,
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Team Collaboration',
    description: 'Work together with your team on campaigns and analytics.',
    icon: Users,
    color: 'from-pink-500 to-pink-600'
  },
  {
    name: 'GDPR Compliant',
    description: 'Built-in compliance tools and data protection features.',
    icon: Shield,
    color: 'from-rose-500 to-rose-600'
  }
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Everything you need for successful campaigns
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Powerful features designed specifically for B2B marketing teams.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              <div className="relative">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.color} transform group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}