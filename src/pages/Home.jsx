import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaWpforms, FaGoogle, FaChartLine, FaUsers, FaShieldAlt } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <span className="text-xl font-bold">EventJot</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <button
                onClick={() => navigate('/login')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Transform Your<br />
            <span className="text-blue-600">JotForm Data</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Seamlessly convert form submissions into targeted email campaigns. Connect JotForm 
            to Gmail and supercharge your B2B marketing efforts.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Start Free Trial <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need for successful campaigns
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed specifically for B2B marketing teams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaWpforms />, title: "JotForm Integration", description: "Connect your JotForm accounts and import form submissions automatically." },
              { icon: <FaGoogle />, title: "Gmail Integration", description: "Send campaigns through Gmail with high deliverability rates." },
              { icon: <FaChartLine />, title: "Campaign Analytics", description: "Track opens, clicks, and conversions with detailed analytics." },
              { icon: <FaEnvelope />, title: "Automated Workflows", description: "Set up automated email sequences based on form submissions." },
              { icon: <FaUsers />, title: "Team Collaboration", description: "Work together with your team on campaigns and analytics." },
              { icon: <FaShieldAlt />, title: "GDPR Compliant", description: "Built-in compliance tools and data protection features." }
            ].map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-[#F8F9FF]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to supercharge your email marketing?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Start your 14-day free trial today. No credit card required.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          © 2024 EventJot. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#F8F9FF] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-blue-600 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;