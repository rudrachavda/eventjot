import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaUpload, FaTable, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

function Dashboard() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setIsLoading(true);
      // Here we'll add the file processing logic later
      // For now, just simulate loading
      setTimeout(() => {
        setIsLoading(false);
        setData([
          { name: 'John Doe', email: 'john@example.com' },
          { name: 'Jane Smith', email: 'jane@example.com' },
        ]);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <span className="ml-2 text-xl font-bold">EventJot</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <FaSignOutAlt className="mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <FaUpload className="text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Uploaded Files</p>
                <p className="text-lg font-semibold text-gray-900">23</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <FaTable className="text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Processed Records</p>
                <p className="text-lg font-semibold text-gray-900">1,234</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <FaChartBar className="text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Success Rate</p>
                <p className="text-lg font-semibold text-gray-900">98%</p>
              </div>
            </div>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Data File</h2>
            <div className="flex items-center justify-center w-full">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide uppercase border border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
                <FaUpload className="text-2xl" />
                <span className="mt-2 text-base">Select a file</span>
                <input
                  type="file"
                  className="hidden"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Results Table */}
        {isLoading ? (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Processing your file...</p>
          </div>
        ) : data.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Processed Data</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dashboard;