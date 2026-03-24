import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const coordinators = [
  { name: 'Dr. Nirmala C R', role: 'Head of the Department', dept: 'CSE' },
  { name: 'Vinutha H P', role: 'Head of SWC', dept: 'ISE' },
  { name: 'Vishwanath V K', role: 'Club Coordinator', dept: 'CSE' },
  { name: 'Radhika Priya', role: 'Club President', dept: 'EC' },
];

export function Coordinators() {
  return (
    <section className="py-8 md:py-32 bg-[#000000] relative border-t border-white/5">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] mb-4 md:mb-6">
             <span className="text-[#FF4C00] font-mono text-[10px] tracking-widest uppercase">The Organizers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Meet the <span className="italic text-zinc-500">Board</span>
          </h2>
          <p className="text-zinc-500 font-light max-w-lg text-sm md:text-base">
            Faculty and student coordinators behind Opticode 2.0.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-2 md:px-0">
          {coordinators.map((coordinator, index) => (
            <motion.div
              key={coordinator.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#050505] border border-white/5 rounded-2xl p-5 md:p-8 hover:bg-[#0a0a0a] hover:border-white/10 transition-all duration-300"
            >
              <div className="mb-6 md:mb-8">
                <span className="bg-white/5 text-zinc-400 text-[9px] md:text-[10px] font-mono px-2 py-1 rounded tracking-wide uppercase">{coordinator.dept}</span>
              </div>
              <h3 className="text-[13px] sm:text-base md:text-xl font-medium text-white mb-1 leading-tight whitespace-nowrap">{coordinator.name}</h3>
              <p className="text-zinc-500 text-[10px] md:text-xs tracking-wide leading-snug">{coordinator.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Support Contact */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="mt-12 md:mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/10 bg-[#050505] shadow-[0_0_20px_rgba(255,76,0,0.05)] hover:border-[#FF4C00]/50 hover:shadow-[0_0_30px_rgba(255,76,0,0.15)] transition-all duration-300 whitespace-nowrap">
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF4C00]" />
            <span className="text-zinc-400 text-xs sm:text-sm">Have Questions?</span>
            <a href="tel:+918277257286" className="text-white font-medium tracking-wide text-xs sm:text-sm hover:text-[#FF4C00] transition-colors">+91 82772 57286</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
