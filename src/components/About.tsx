import { motion } from 'framer-motion';
import { Zap, Users, Award, Code } from 'lucide-react';

export function About() {
  const features = [
    {
      num: "01",
      title: "Extreme Velocity",
      desc: "Engineered to test your ability to synthesize logic under severe time constraints. Speed is survival.",
      icon: <Zap className="w-6 h-6 text-[#FF4C00]" />,
      color: "#FF4C00"
    },
    {
      num: "02",
      title: "Elite Cohort",
      desc: "Battle-test your skills against the most distinguished computational minds at BIET and establish absolute dominance.",
      icon: <Users className="w-6 h-6 text-[#00F0FF]" />,
      color: "#00F0FF"
    },
    {
      num: "03",
      title: "Language-Agnostic",
      desc: "Deploy logic in your weapon of choice. Full execution support for completely unrestricted multi-language environments.",
      icon: <Code className="w-6 h-6 text-zinc-300" />,
      color: "#e4e4e7"
    },
    {
      num: "04",
      title: "Verified Credentials",
      desc: "Secure official certificates validating your participation and recognizing your elite computational achievements.",
      icon: <Award className="w-6 h-6 text-[#FF4C00]" />,
      color: "#FF4C00"
    }
  ];

  return (
    <section id="about" className="py-8 md:py-32 bg-[#000000] relative border-t border-[#111] overflow-hidden">
      
      {/* Opticode 2.0 Premium Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255, 100, 0, 0.5) 1.5px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Radial Mask to fade edges into pure black */}
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]" />
      </div>

      <div className="w-full relative z-10">
        
        {/* Core Description */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col items-center mb-6 md:mb-16 px-4 sm:px-6 md:px-12 max-w-[85rem] mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-white/5 bg-white/[0.02] mb-6 md:mb-8 shadow-[0_0_20px_rgba(255,76,0,0.05)]">
             <span className="text-[#FF4C00] font-mono text-[10px] tracking-widest uppercase font-bold">THE PROTOCOL</span>
          </div>

          <p className="text-2xl md:text-4xl lg:text-5xl text-white font-medium text-center max-w-5xl mx-auto leading-tight md:leading-[1.15] tracking-tight">
            The ultimate test of logic architecture. Solve complex computational challenges using the strict minimum syntactical footprint. <span className="text-zinc-500 italic font-serif tracking-normal">Every character counts.</span>
          </p>
        </motion.div>

        {/* Responsive Formula Pill */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex justify-center mb-6 md:mb-24 w-full px-4 sm:px-6 md:px-12 max-w-[85rem] mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs tracking-widest font-mono text-zinc-500 border border-white/10 rounded-3xl sm:rounded-full px-6 sm:px-8 py-3 sm:py-4 bg-[#0a0a0a]/50 backdrop-blur-md shadow-[0_0_40px_rgba(255,76,0,0.05)] w-full sm:w-auto">
            <span className="text-xs">MINIMAL SYNTAX</span>
            <span className="text-[#00F0FF] text-base">+</span>
            <span className="text-xs">MAXIMAL EFFICIENCY</span>
            <span className="text-[#FF4C00] text-base">=</span>
            <span className="text-white font-medium text-xs">ELITE RANKING</span>
          </div>
        </motion.div>

        {/* Premium High-End Editorial List (Unique Layout) */}
        <div className="w-full border-t border-white/5">
          {features.map((feature, idx) => (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={feature.num}
              className="group relative border-b border-white/5 bg-[#000000] hover:bg-[#050505] transition-colors duration-500 cursor-crosshair overflow-hidden"
            >
               {/* Massive Ambient Background Glow on Hover */}
               <div 
                 className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none mix-blend-screen" 
                 style={{ background: `radial-gradient(circle at 30% 50%, ${feature.color}, transparent 60%)` }} 
               />

               <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row items-start md:items-center py-8 md:py-16 px-6 md:px-12 relative z-10 gap-4 md:gap-12">
                 
                 {/* Editorial Number - Absolute on Mobile to act as a watermark */}
                 <div className="absolute top-2 right-4 md:relative md:top-auto md:right-auto md:w-[15%] flex items-center md:items-start md:shrink-0 text-white/5 group-hover:text-white/20 transition-colors duration-700 pointer-events-none">
                   <span className="text-[6rem] md:text-[8rem] leading-none font-serif tracking-tighter select-none font-bold">
                     {feature.num}
                   </span>
                 </div>

                 {/* Title & Icon Group */}
                 <div className="w-full md:w-[40%] flex items-center gap-4 md:gap-6 relative z-10 mt-2 md:mt-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-white/10 flex items-center justify-center bg-[#0a0a0a] group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl md:text-5xl font-medium text-white group-hover:translate-x-3 transition-transform duration-500 tracking-tight leading-tight">
                      {feature.title}
                    </h3>
                 </div>

                 {/* Description */}
                 <div className="w-full md:w-[45%] relative z-10 pl-16 md:pl-0">
                    <p className="text-sm md:text-xl text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                      {feature.desc}
                    </p>
                 </div>

               </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
