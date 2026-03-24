import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    usn: '',
    semester: '',
    section: '',
    hackerrank: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error: supabaseError } = await supabase
        .from('registrations')
        .insert([
          {
            name: formData.name.trim(),
            usn: formData.usn.trim().toUpperCase(),
            semester: parseInt(formData.semester),
            section: formData.section,
            hackerrank: formData.hackerrank.trim(),
          },
        ]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError('This USN is already registered.');
        } else {
          setError(supabaseError.message);
        }
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', usn: '', semester: '', section: '', hackerrank: '' });
      setTimeout(() => setIsSuccess(false), 6000);
    } catch {
      setError('Network error. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError(null);
  };

  return (
    <section id="register" className="relative py-8 md:py-32 bg-[#000000] md:min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255, 100, 0, 1) 1.5px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_80%)]" />
      </div>

      <div className="absolute inset-6 md:inset-10 border-x border-white/5 pointer-events-none z-0 hidden sm:block" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] mb-4 md:mb-6">
             <span className="text-[#FF4C00] font-mono text-[10px] tracking-widest uppercase">Registration Open</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-4">
            Secure Your <span className="italic text-zinc-500">Spot</span>
          </h2>
          <p className="text-zinc-500 font-light max-w-lg mx-auto text-sm md:text-base">
            Enter your details below to register for Opticode 2.0. This is an individual coding competition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#050505] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {isSuccess ? (
             <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-center py-20"
           >
             <div className="w-16 h-16 bg-[#111] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#FF4C00]/20 shadow-[0_0_30px_rgba(255,76,0,0.15)]">
               <CheckCircle2 className="w-8 h-8 text-[#FF4C00]" />
             </div>
             <h3 className="text-2xl font-medium text-white mb-2">Registration Successful</h3>
             <p className="text-zinc-500 font-light text-sm max-w-sm mx-auto">You're registered for Opticode 2.0. See you at the competition!</p>
           </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-3 text-red-400 text-sm font-light">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">Student Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#222] rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:border-[#FF4C00]/50 focus:bg-[#111] transition-all font-light"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">University Seat Number [USN]</label>
                  <input
                    type="text"
                    name="usn"
                    required
                    value={formData.usn}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#222] rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:border-[#FF4C00]/50 focus:bg-[#111] transition-all font-light uppercase"
                    placeholder="4BD21CS000"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-2">Semester</label>
                    <select
                        name="semester"
                        required
                        value={formData.semester}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#222] rounded-xl text-white focus:outline-none focus:border-[#FF4C00]/50 focus:bg-[#111] transition-all appearance-none font-light"
                    >
                        <option value="" disabled className="bg-[#111]">Select</option>
                        {[1,2,3,4,5,6,7,8].map(sem => (
                        <option key={sem} value={sem} className="bg-[#111]">Semester 0{sem}</option>
                        ))}
                    </select>
                    </div>
                    <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-2">Section</label>
                    <input
                        type="text"
                        name="section"
                        required
                        value={formData.section}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#222] rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:border-[#FF4C00]/50 focus:bg-[#111] transition-all font-light uppercase"
                        placeholder="e.g. A"
                    />
                    </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">HackerRank Username</label>
                  <input
                    type="text"
                    name="hackerrank"
                    required
                    value={formData.hackerrank}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#222] rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:border-[#FF4C00]/50 focus:bg-[#111] transition-all font-light"
                    placeholder="@username"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#FF4C00] hover:bg-[#ff5900] text-black font-semibold text-sm rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
