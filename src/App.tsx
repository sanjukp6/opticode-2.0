import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Gallery } from '@/components/Gallery';
import { RegistrationForm } from '@/components/RegistrationForm';
import { Coordinators } from '@/components/Coordinators';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-[#FF4C00] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <RegistrationForm />
        <Coordinators />
        <Footer />
      </main>
      <Analytics />
    </div>
  );
}
