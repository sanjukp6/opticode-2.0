import { motion } from 'framer-motion';
import { useState } from 'react';

const images = [
  '/gallery/opticode-1.jpg',
  '/gallery/opticode-2.jpg',
  '/gallery/opticode-3.jpg',
  '/gallery/opticode-4.jpg',
  '/gallery/opticode-5.jpg',
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-8 md:py-32 bg-[#000000] relative border-t border-[#111] overflow-hidden">
      {/* Zenith Premium Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255, 100, 0, 1) 1.5px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Radial Mask to fade edges into pure black */}
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]" />
      </div>

      <div className="max-w-[85rem] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col items-center mb-6 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-white/5 bg-white/[0.02] mb-6 md:mb-8 shadow-[0_0_20px_rgba(255,76,0,0.05)]">
             <span className="text-zinc-400 font-mono text-[10px] tracking-widest uppercase font-bold">THE LEGACY</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 md:mb-6 text-center tracking-tight">
            Opticode <span className="italic text-zinc-500">1.0</span> Archive
          </h2>
          <p className="text-zinc-500 font-light max-w-2xl text-center text-sm md:text-base mb-8 md:mb-12 leading-relaxed px-4">
            A visual record of the algorithmic battles from the inaugural season. Operational data and execution environments from Opticode 1.0.
          </p>
        </motion.div>

        {/* Zenith Style Masonry / Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
           {images.map((src, idx) => {
             const isActive = activeIndex === idx;
             return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onTouchStart={() => setActiveIndex(idx)}
                onTouchEnd={() => setActiveIndex(null)}
                className={`relative overflow-hidden group rounded-2xl border bg-[#050505] shadow-xl cursor-pointer ${
                  idx === 0 ? 'col-span-2 aspect-video lg:aspect-[21/9]' : 'col-span-1 aspect-video'
                } ${isActive ? 'border-[#FF4C00]/60' : 'border-white/5'} transition-colors duration-300`}
              >
                {/* Grayscale by default, vibrant on hover (desktop) or touch-hold (mobile) */}
                <img 
                  src={src} 
                  alt={`Opticode 1.0 Archive ${idx + 1}`} 
                  className={`w-full h-full object-cover transition-all duration-700 ease-out transform ${
                    isActive
                      ? 'grayscale-0 opacity-100 scale-105'
                      : 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'
                  }`}
                />
                <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-colors duration-500 ${
                  isActive
                    ? 'border-2 border-[#FF4C00]/60'
                    : 'border border-white/10 group-hover:border-[#FF4C00]/30'
                }`} />
                
              </motion.div>
             );
           })}
        </div>
      </div>
    </section>
  );
}
