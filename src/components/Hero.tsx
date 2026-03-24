import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative md:min-h-screen flex items-start md:items-center justify-center overflow-hidden bg-[#000000] pb-12 md:pb-0"
    >
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 100, 0, 0.4) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
        />
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_75%)]" />
      </div>

      {/* Ambient Glow — subtle, single */}
      <motion.div 
        animate={{ scale: [1, 1.03, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF4C00]/8 rounded-full blur-[150px] pointer-events-none z-0" 
      />

      <div
        className="relative z-10 text-center px-4 w-full pt-8 md:pt-16 flex flex-col items-center"
      >
        {/* Opticode 2.0 Top Branding */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 md:mb-10 self-start pl-2 md:pl-8"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF4C00]">
            <rect x="1" y="1" width="26" height="26" rx="6" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
            <path d="M10 9L5.5 14L10 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 9L22.5 14L18 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.5 7L12.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          </svg>
          <span className="text-xl md:text-2xl font-semibold tracking-tight text-white">
            Opticode <span className="text-[#FF4C00]">2.0</span>
          </span>
        </motion.div>

        {/* College & Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-row items-center justify-center gap-4 md:gap-12 mb-3 md:mb-6 lg:mb-8 w-full shrink-0"
        >
          <img src="/ISTE.png" alt="ISTE Logo" className="h-10 md:h-20 lg:h-24 w-auto object-contain" />
          <img src="/biet-logo.png" alt="BIET Logo" className="h-12 md:h-24 lg:h-28 w-auto object-contain" />
          <img src="/technical_club-removebg-preview.png" alt="Technical Club Logo" className="h-10 md:h-20 lg:h-24 w-auto object-contain" />
        </motion.div>

        {/* College Name */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide uppercase text-white text-center mb-2 md:mb-6 leading-tight px-2"
        >
          Bapuji Institute of Engineering and Technology
        </motion.h2>

        {/* Event Type Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-4 md:mb-8"
        >
          <span className="text-zinc-400 text-xs font-mono tracking-widest uppercase">Coding Competition</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.25 }}
           className="text-4xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] leading-[1.05] font-medium mb-4 md:mb-8 tracking-tight text-white w-full max-w-5xl mx-auto"
        >
           Absolute Code <br className="hidden md:block" /> <span className="italic text-zinc-500">Minimization</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-xl mx-auto mb-5 md:mb-8 px-4"
        >
          <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
            Write clean, functional code with the fewest characters possible. Solve problems, optimize your logic, and compete for the top spot.
          </p>
        </motion.div>

        {/* Event Date & Time */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-5 md:mb-10 px-4"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/[0.02]">
            <span className="text-xs">📅</span>
            <span className="text-zinc-300 text-xs md:text-sm font-medium">1st April 2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/[0.02]">
            <span className="text-xs">⏰</span>
            <span className="text-zinc-300 text-xs md:text-sm font-medium">2:00 PM — 5:00 PM</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-row items-center justify-center gap-3"
        >
          <a 
            href="#register" 
            className="group flex items-center justify-center gap-2 bg-[#FF4C00] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#ff5a15] transition-all"
          >
            Register
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a 
            href="#gallery" 
            className="flex items-center justify-center bg-white/5 text-zinc-300 px-6 py-3 rounded-full font-medium text-sm border border-white/8 hover:bg-white/10 hover:text-white transition-all"
          >
            Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
