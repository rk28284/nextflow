import React from 'react';

function Navbar({ icon, label, active = false }) {
  return (
   <button 
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      active ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-900 hover:text-white'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
  );
}

export default Navbar;