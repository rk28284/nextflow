import { GitBranch, ArrowRight } from 'lucide-react';

const Mainpage = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center relative p-8 bg-[#050505]">
      <div className="max-w-lg text-center space-y-6 text-white">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
            <GitBranch size={24} />
          </div>
        </div>
        <h1 className="text-5xl font-bold tracking-tight">Node Editor</h1>
        <p className="text-gray-400 text-lg">
          Nodes is the most powerful way to operate Krea. Connect every tool and model into complex automated pipelines.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-gray-200 transition-colors">
          New Workflow <ArrowRight size={18} />
        </button>
      </div>

      <div className="absolute bottom-8 flex gap-8 text-gray-400">
        {['Projects', 'Apps', 'Examples', 'Templates'].map((item) => (
          <button key={item} className="hover:text-white transition-colors">{item}</button>
        ))}
      </div>
    </main>
  );
};

export default Mainpage;