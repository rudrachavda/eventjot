import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16">
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center space-x-2"
            >
              <FaEnvelope className="text-blue-600 text-2xl" />
              <span className="text-xl font-bold">EventJot</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
              <p className="text-gray-600 mt-2">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <button type="button" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Don't have an account?</span>
              <button className="ml-1 text-blue-600 hover:text-blue-500">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;