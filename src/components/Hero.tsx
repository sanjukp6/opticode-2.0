import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative md:min-h-screen flex items-start md:items-center justify-center overflow-hidden bg-[#000000] pb-12 md:pb-0"
    >
      {/* Opticode 2.0 Premium Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255, 100, 0, 1) 1.5px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Radial Mask to fade edges into pure black */}
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_80%)]" />
      </div>

      {/* Dynamic Animated Ambient Glows */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF4C00]/10 rounded-full blur-[120px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00F0FF]/5 rounded-full blur-[120px] pointer-events-none z-0" 
      />

      {/* Decorative Grid Frame matching Opticode 2.0 */}
      <div className="absolute inset-6 md:inset-10 border border-white/5 pointer-events-none z-0 hidden sm:block">
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#FF4C00]/20 to-transparent" />
        
        {/* Corner Crosshairs */}
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 flex items-center justify-center text-[#FF4C00]/80 select-none text-[10px] font-mono">+</div>
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 flex items-center justify-center text-[#FF4C00]/80 select-none text-[10px] font-mono">+</div>
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 flex items-center justify-center text-white/30 select-none text-[10px] font-mono">+</div>
        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 flex items-center justify-center text-white/30 select-none text-[10px] font-mono">+</div>
      </div>

      <div
        className="relative z-10 text-center px-4 w-full pt-20 md:pt-32 flex flex-col items-center"
      >
        {/* Top Header Logos */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-row items-center justify-center gap-4 md:gap-12 mb-3 md:mb-6 lg:mb-10 w-full shrink-0"
        >
          <img src="/ISTE.png" alt="ISTE Logo" className="h-10 md:h-20 lg:h-24 w-auto object-contain" />
          <img src="/biet-logo.png" alt="BIET Logo" className="h-12 md:h-24 lg:h-28 w-auto object-contain drop-shadow-2xl" />
          <img src="/technical_club-removebg-preview.png" alt="Technical Club Logo" className="h-10 md:h-20 lg:h-24 w-auto object-contain" />
        </motion.div>

        {/* College Name - Large and Prominent */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide uppercase text-white text-center mb-1 md:mb-4 leading-tight px-2"
        >
          Bapuji Institute of Engineering and Technology
        </motion.h2>

        {/* OPTICODE Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center gap-3 mb-2 md:mb-8"
        >
          <span className="flex items-center gap-2 text-[#FF4C00] text-xs md:text-sm font-medium tracking-wide uppercase">
            OPTICODE
            <span className="bg-[#FF4C00] text-black px-1.5 py-0.5 rounded-sm text-[9px] font-bold">2.0</span>
          </span>
        </motion.div>

        {/* Glow pill "24-Hour Hackathon" style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center justify-center px-4 py-1 md:px-5 md:py-1.5 rounded-full border border-[#FF4C00]/20 bg-[#FF4C00]/[0.02] backdrop-blur-xl shadow-[0_0_30px_rgba(255,76,0,0.1)] mb-3 md:mb-8 transition-colors hover:border-[#FF4C00]/40"
        >
          <span className="text-[#FF4C00] text-xs font-mono tracking-widest uppercase">Coding Competition Registration</span>
        </motion.div>

        {/* Main Title - Opticode 2.0 Serif Style */}
        <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="text-4xl sm:text-7xl md:text-[6.5rem] lg:text-[8.5rem] leading-[1.05] font-medium mb-3 md:mb-10 tracking-tight text-white w-full max-w-5xl mx-auto"
        >
           Absolute Code <br className="hidden md:block" /> <span className="italic text-zinc-400">Minimization</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-4 md:mb-8 px-4"
        >
          <p className="text-sm md:text-lg text-zinc-400 leading-relaxed font-light">
            Opticode 2.0 is the arena for engineers ready to deploy scalable, functional logic under extreme velocity. The only metric that matters is: does it work?
          </p>
        </motion.div>

        {/* Event Date & Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-4 md:mb-10 px-4"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="text-[#FF4C00] text-xs font-mono tracking-wider">📅</span>
            <span className="text-zinc-300 text-xs md:text-sm font-medium tracking-wide">1st April 2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="text-[#FF4C00] text-xs font-mono tracking-wider">⏰</span>
            <span className="text-zinc-300 text-xs md:text-sm font-medium tracking-wide">2:00 PM — 5:00 PM</span>
          </div>
        </motion.div>

        {/* Opticode 2.0 Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-row items-center justify-center gap-4"
        >
          <a 
            href="#register" 
            className="group flex items-center justify-center gap-3 bg-zinc-200 text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-white transition-all w-40"
          >
            Showcase
            <span className="bg-black text-white rounded-full p-1 transform group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>
          <a 
            href="#gallery" 
            className="flex items-center justify-center bg-[#111111] text-zinc-300 px-6 py-3 rounded-full font-medium text-sm border border-white/5 hover:bg-[#222222] hover:text-white transition-all w-40"
          >
            Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
