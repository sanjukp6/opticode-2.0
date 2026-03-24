import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-6 flex justify-center pointer-events-none"
      >
        <div className={`pointer-events-auto flex items-center justify-between w-full max-w-7xl px-2 py-2 rounded-full transition-all duration-500 border ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 pl-4 group">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF4C00] group-hover:scale-110 transition-transform">
              <rect x="1" y="1" width="26" height="26" rx="6" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
              <path d="M10 9L5.5 14L10 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 9L22.5 14L18 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.5 7L12.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
            </svg>
            <span className="text-xl font-bold tracking-tight text-white mt-1">
              Opticode 2.0
            </span>
          </a>

          {/* Desktop Links (Removed since Opticode 2.0 specifically only has Login on navbar) */}
          <div className="hidden md:flex items-center gap-1"></div>

          {/* Login Button */}
          <div className="pr-2">
            <a
              href="#register"
              className="hidden md:flex px-6 py-2 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-zinc-300 hover:text-white text-sm font-medium rounded-full transition-all"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white pr-2"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-zinc-400" /> : <Menu className="w-5 h-5 text-zinc-400" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              className="absolute top-24 left-4 right-4 bg-[#111111]/90 backdrop-blur-2xl border border-white/5 rounded-2xl p-6 md:hidden shadow-2xl pointer-events-auto"
            >
              <div className="flex flex-col gap-4">
                <a
                  href="#register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium text-sm text-center rounded-xl transition-all"
                >
                  Login
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
