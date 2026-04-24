export default Sidebar;
import React from 'react';
import { Home, Brain, GitBranch, Folder, Image as ImageIcon, Video, Sparkles, Banana, Clock, Edit3 } from 'lucide-react';
import NavItem from '../Component/Navbar'

function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-800 flex flex-col p-4 bg-[#050505]">
      <div className="mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="font-bold text-white">K</span>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<Brain size={20} />} label="Train Lora" />
        <NavItem icon={<GitBranch size={20} />} label="Node Editor" active />
        <NavItem icon={<Folder size={20} />} label="Assets" />

        <div className="pt-6 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tools</div>
        <NavItem icon={<ImageIcon size={20} />} label="Image" />
        <NavItem icon={<Video size={20} />} label="Video" />
        <NavItem icon={<Sparkles size={20} />} label="Enhancer" />
        <NavItem icon={<Banana size={20} />} label="Nano Banana" />
        <NavItem icon={<Clock size={20} />} label="Realtime" />
        <NavItem icon={<Edit3 size={20} />} label="Edit" />
      </nav>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
        Sign in
      </button>
    </aside>
  );
}



