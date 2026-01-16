
import React, { useEffect, useState } from 'react';
import { TrendingUp, Sparkles, BarChart3, Target, Share2, Award } from 'lucide-react';

interface LoadingProps {
  status: string;
  step: number;
  facts?: string[];
}

const Loading: React.FC<LoadingProps> = ({ status, step, facts = [] }) => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  
  useEffect(() => {
    if (facts.length > 0) {
      const interval = setInterval(() => {
        setCurrentFactIndex((prev) => (prev + 1) % facts.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [facts]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto min-h-[500px] overflow-hidden rounded-3xl bg-[#0f0f1b] border border-white/5 shadow-2xl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="absolute inset-0 border border-purple-500/20 rounded-full animate-ping"
              style={{ animationDelay: `${i * 0.5}s`, animationDuration: '4s' }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mb-12">
        <div className="w-24 h-24 rounded-3xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center relative">
          <TrendingUp className="w-10 h-10 text-purple-400 animate-pulse" />
          <div className="absolute -top-2 -right-2">
            <Sparkles className="w-6 h-6 text-purple-300 animate-bounce" />
          </div>
        </div>
      </div>

      <div className="max-w-lg w-full px-6 text-center space-y-6">
        <div className="space-y-1">
          <h3 className="text-purple-400 font-bold uppercase tracking-widest text-xs">{status}</h3>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 transition-all duration-1000"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="min-h-[100px] flex items-center justify-center">
          {facts.length > 0 ? (
            <p className="text-lg text-slate-300 font-medium italic animate-in fade-in slide-in-from-bottom-2 duration-700">
              "{facts[currentFactIndex]}"
            </p>
          ) : (
            <div className="flex gap-4">
              <BarChart3 className="w-5 h-5 text-slate-600 animate-pulse" />
              <Target className="w-5 h-5 text-slate-600 animate-pulse delay-75" />
              <Share2 className="w-5 h-5 text-slate-600 animate-pulse delay-150" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loading;
