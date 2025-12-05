import React, { useState } from 'react';
import { MapPin, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { Bookshop } from '../types';
import { generateShopTip } from '../services/geminiService';

interface ShopCardProps {
  shop: Bookshop;
  onOpenChatWithContext: (shopName: string) => void;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop, onOpenChatWithContext }) => {
  const [tip, setTip] = useState<string | null>(null);
  const [loadingTip, setLoadingTip] = useState(false);

  const handleGetTip = async () => {
    if (tip) return;
    setLoadingTip(true);
    const newTip = await generateShopTip(shop);
    setTip(newTip);
    setLoadingTip(false);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <img 
          src={shop.imageUrl} 
          alt={shop.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-stone-800 rounded-sm shadow-sm">
            {shop.neighborhood}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-2 group-hover:text-accent transition-colors">
          {shop.name}
        </h3>
        
        <div className="flex items-start gap-2 text-stone-500 text-sm mb-4">
          <MapPin size={16} className="mt-0.5 shrink-0" />
          <span className="leading-tight">{shop.address}</span>
        </div>

        <p className="text-stone-600 mb-6 leading-relaxed flex-1">
          {shop.description}
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {shop.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded border border-stone-200">
                #{tag}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
             <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500">
                <Clock size={14} />
                {shop.hours}
             </div>
             
             <div className="flex gap-2">
                <button 
                  onClick={handleGetTip}
                  disabled={loadingTip}
                  className="p-2 text-accent hover:bg-amber-50 rounded-full transition-colors relative group/tip"
                  title="Get AI Tip"
                >
                  <Sparkles size={18} className={loadingTip ? "animate-spin" : ""} />
                </button>
                <button 
                  onClick={() => onOpenChatWithContext(shop.name)}
                  className="flex items-center gap-1 text-sm font-medium text-stone-900 hover:text-accent transition-colors"
                >
                  Plan Visit <ArrowRight size={16} />
                </button>
             </div>
          </div>
          
          {/* AI Tip Reveal */}
          <div className={`overflow-hidden transition-all duration-500 ${tip ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
             <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 text-sm text-amber-900 italic">
                "{tip}"
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopCard;