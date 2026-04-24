import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
      <AlertCircle size={64} className="text-gray-700 mb-6" />
      
      <h1 className="text-6xl font-bold text-white mb-2">404</h1>
      <h2 className="text-xl text-gray-300 mb-4">Page not found</h2>
      <p className="text-gray-500 max-w-sm mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </button>
    </div>
  );
};

export default NotFoundPage;