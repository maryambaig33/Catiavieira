import React, { useState } from 'react';
import { Book, Library, Compass } from 'lucide-react';
import { BOOKSHOPS } from './data';
import ShopCard from './components/ShopCard';
import ChatInterface from './components/ChatInterface';

function App() {
  const [activeShopContext, setActiveShopContext] = useState<string | undefined>(undefined);

  const handleOpenChat = (shopName: string) => {
    setActiveShopContext(shopName);
    // We toggle a small timeout to ensure the chat component registers the change if it's already open
    setTimeout(() => setActiveShopContext(undefined), 1000);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-accent selection:text-white">
      
      {/* Hero Section */}
      <header className="relative bg-stone-900 text-stone-50 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1507842217121-9e9b09e6770b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-900/90" />
        
        <div className="relative max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-700 bg-stone-800/50 backdrop-blur-sm text-xs tracking-widest uppercase text-stone-300">
            <Compass size={12} />
            <span>Curated City Guide</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">
            The Literary <span className="text-accent italic">New York</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Six essential bookshops that define the city's intellectual soul. 
            Enhanced with AI to help you find your perfect story.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Intro Text */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
           <div className="flex-1 space-y-6">
             <h2 className="font-serif text-3xl md:text-4xl text-stone-900">
               More than just stores, these are <span className="text-accent">sanctuaries</span>.
             </h2>
             <p className="text-stone-600 leading-relaxed text-lg">
               New York City is a reader's paradise. From the towering shelves of the Strand to the intimate corners of Three Lives & Company, each shop offers a unique atmosphere. We've curated the six absolute must-visits for any bibliophile.
             </p>
             <div className="flex items-center gap-4 text-sm font-medium text-stone-500">
               <span className="flex items-center gap-2"><Library size={18} /> 6 Locations</span>
               <span className="w-1 h-1 bg-stone-300 rounded-full" />
               <span className="flex items-center gap-2"><Book size={18} /> AI Enhanced Guide</span>
             </div>
           </div>
           <div className="flex-1 w-full h-64 md:h-auto min-h-[300px] bg-stone-200 rounded-2xl overflow-hidden relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=2071&auto=format&fit=crop" 
                alt="Stack of books"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-lg font-serif italic text-xl shadow-lg border border-stone-100">
                  "I have always imagined that Paradise will be a kind of library."
                </span>
              </div>
           </div>
        </div>

        {/* Shop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {BOOKSHOPS.map((shop) => (
            <ShopCard 
              key={shop.id} 
              shop={shop} 
              onOpenChatWithContext={handleOpenChat} 
            />
          ))}
        </div>

        {/* Footer / CTA Area */}
        <div className="bg-stone-900 rounded-3xl p-12 text-center text-stone-300 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
           <h2 className="font-serif text-3xl text-white mb-6">Ready to explore?</h2>
           <p className="max-w-xl mx-auto mb-8 text-lg font-light">
             Use the AI Concierge to generate a custom walking tour connecting these shops with the best coffee spots in between.
           </p>
           <button 
             onClick={() => handleOpenChat("New York City")}
             className="bg-accent hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg hover:shadow-accent/30"
           >
             Start Planning with AI
           </button>
        </div>

      </main>

      <footer className="bg-white border-t border-stone-200 py-12 text-center text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Literary NYC. Enhanced Experience.</p>
        <p className="mt-2">Powered by Gemini & React</p>
      </footer>

      {/* Floating Chat */}
      <ChatInterface initialContext={activeShopContext} />
      
    </div>
  );
}

export default App;