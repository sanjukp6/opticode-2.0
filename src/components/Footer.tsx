import { motion } from 'framer-motion';
import { Instagram, Linkedin, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 font-sans">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF4C00]">
            <rect x="1" y="1" width="26" height="26" rx="6" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
            <path d="M10 9L5.5 14L10 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 9L22.5 14L18 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.5 7L12.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          </svg>
          <span className="text-xl font-bold tracking-tight text-white mb-0.5">
            Opticode 2.0
          </span>
        </motion.div>

        {/* Center: Built By */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-zinc-500 text-sm"
        >
          Built by <span className="text-white font-medium tracking-wide">Pixel Pioneers</span>
        </motion.div>

        {/* Right Side: Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <a 
            href="https://www.bietdvg.edu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-[#FF4C00] transition-all duration-300"
            title="College Website"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/school/bapuji-institute-of-engineering-&-technology-davanagere" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-[#0077B5] transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://www.instagram.com/biet__cse?igsh=YjRsNmM3OGZrdnA4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-[#E4405F] transition-all duration-300"
            title="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </footer>
  );
}
