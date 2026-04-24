import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6">
      
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
          }}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      
      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 shadow-xl mb-6">
        <h2 className="text-xl font-semibold mb-2">Welcome 👋</h2>
        <p className="text-gray-400">
          You have successfully logged in to your dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-medium mb-2">Users</h3>
          <p className="text-3xl font-bold">120</p>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-medium mb-2">Orders</h3>
          <p className="text-3xl font-bold">56</p>
        </div>

        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-medium mb-2">Revenue</h3>
          <p className="text-3xl font-bold">₹25,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;