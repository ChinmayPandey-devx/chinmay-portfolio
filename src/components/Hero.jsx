import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Award } from 'lucide-react';

const animatedPhrases = [
  "From founders to VPs to CPOs",
  "Product leaders at MediBuddy, Delhivery, Leap & Unstop",
  "Engaged with work I built before anyone asked me to."
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % animatedPhrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" className="pt-28 md:pt-32 pb-section px-6 lg:px-8 max-w-6xl mx-auto min-h-[85vh] flex items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">
        {/* Left Side: Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Credibility Badge */}
          <motion.a 
            href="#leadership-engagement"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-50/80 border border-indigo-100 text-accent px-3.5 py-1.5 rounded-full text-xs font-bold hover:bg-accent hover:text-white transition-all duration-200 mb-5 cursor-pointer shadow-xs"
          >
            <Award size={14} />
            <span>Reached VPs, CPOs & Founders — unprompted</span>
          </motion.a>

          <span className="font-mono text-xs md:text-sm font-semibold text-muted uppercase tracking-wider mb-2 block">
            STILL THINKING · ALREADY BUILDING
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="block mb-2 text-textMain">Chinmay Pandey</span>
          </h1>

          {/* Animated Headline Statement */}
          <div className="mb-8 max-w-2xl bg-white/80 p-5 rounded-2xl border border-gray-200 shadow-sm text-left">
            <p className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-3">
              "From the leaders I've actually interacted with — the good ones didn't open with 'what's the impact.' They opened with 'what's the thinking,' and let the impact question wait its turn."
            </p>

            <div className="relative h-7 overflow-hidden border-t border-gray-100 pt-2 text-xs md:text-sm font-semibold text-accent flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0"
                >
                  ⚡ {animatedPhrases[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-base md:text-lg text-muted italic mb-8 max-w-2xl leading-relaxed">
            "Engineering taught me how to build; product management taught me what to build."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href="#leadership-engagement"
              className="flex items-center gap-2 bg-textMain text-white px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors w-full sm:w-auto justify-center"
            >
              Leadership Engagement <ArrowRight size={18} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1kbarcKrs1S8VzsdSAZM1I4b-duYUOLpO/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-transparent border border-gray-300 text-textMain px-6 py-3 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors w-full sm:w-auto justify-center"
            >
              Download Resume <Download size={18} />
            </a>
          </div>
        </div>

        {/* Right Side: Photo */}
        <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 flex-shrink-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-card relative"
          >
            <img 
              src="/chinmay-portfolio/assets/chinmay.jpg" 
              alt="Chinmay Pandey" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
