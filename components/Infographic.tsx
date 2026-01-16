
import React, { useState } from 'react';
import { GeneratedImage } from '../types';
import { Download, Sparkles, Edit3, Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react';

interface InfographicProps {
  image: GeneratedImage;
  onEdit: (prompt: string) => void;
  isEditing: boolean;
}

const Infographic: React.FC<InfographicProps> = ({ image, onEdit, isEditing }) => {
  const [editPrompt, setEditPrompt] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPrompt.trim()) return;
    onEdit(editPrompt);
    setEditPrompt('');
  };

  return (
    <div className="flex flex-col items-center w-full animate-in fade-in zoom-in duration-700">
      <div className="relative group w-full bg-[#0f0f1b] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <img 
          src={image.data} 
          alt={image.prompt} 
          onClick={() => setIsFullscreen(true)}
          className="w-full h-auto object-contain max-h-[75vh] cursor-zoom-in"
        />
        
        <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => setIsFullscreen(true)} className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 hover:bg-purple-600 transition-all">
            <Maximize2 className="w-5 h-5" />
          </button>
          <a href={image.data} download="boostly-strategy.png" className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 hover:bg-purple-600 transition-all">
            <Download className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="w-full max-w-2xl -mt-8 relative z-20">
        <form onSubmit={handleSubmit} className="bg-[#1a1a2e]/90 backdrop-blur-xl p-2 rounded-2xl border border-white/10 flex items-center shadow-2xl">
          <Edit3 className="w-5 h-5 text-purple-400 ml-4" />
          <input
            value={editPrompt}
            onChange={(e) => setEditPrompt(e.target.value)}
            placeholder="Adjust style, add elements, or change colors..."
            className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-sm text-white placeholder:text-slate-500"
            disabled={isEditing}
          />
          <button type="submit" disabled={isEditing || !editPrompt.trim()} className="btn-primary px-6 py-2.5 rounded-xl font-bold flex items-center gap-2">
            {isEditing ? <div className="w-4 h-4 border-2 border-white/30 border-t-white animate-spin rounded-full"></div> : <Sparkles className="w-4 h-4" />}
            <span>Refine</span>
          </button>
        </form>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-8">
          <button onClick={() => setIsFullscreen(false)} className="absolute top-8 right-8 p-3 bg-white/10 rounded-full hover:bg-white/20">
            <X className="w-6 h-6" />
          </button>
          <img 
            src={image.data} 
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" 
            style={{ transform: `scale(${zoomLevel})` }}
          />
          <div className="absolute bottom-8 flex gap-4 bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/10">
            <button onClick={() => setZoomLevel(z => Math.max(z - 0.2, 0.5))} className="p-2 hover:bg-white/10 rounded-lg"><ZoomOut className="w-5 h-5" /></button>
            <span className="flex items-center px-4 font-bold">{Math.round(zoomLevel * 100)}%</span>
            <button onClick={() => setZoomLevel(z => Math.min(z + 0.2, 3))} className="p-2 hover:bg-white/10 rounded-lg"><ZoomIn className="w-5 h-5" /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Infographic;
