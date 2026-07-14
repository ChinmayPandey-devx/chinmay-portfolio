import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const headlines = [
  "Building AI Products.",
  "Solving User Problems.",
  "Driving Product Decisions."
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" className="pt-32 pb-section px-6 lg:px-8 max-w-6xl mx-auto min-h-[90vh] flex items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">
        {/* Left Side: Content */}
        <div className="flex-1 text-center md:text-left">
          <span className="font-mono text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Product Management Intern
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance h-auto min-h-[140px] md:min-h-[160px]">
            <span className="block mb-2">Chinmay Pandey</span>
            <div className="relative h-[1.2em] overflow-hidden text-3xl md:text-4xl lg:text-5xl text-gray-400">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 md:left-0 right-0"
                >
                  {headlines[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          <p className="text-xl md:text-2xl text-muted italic mb-10 text-balance max-w-2xl leading-relaxed">
            "Engineering taught me how to build; product management taught me what to build."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href="#portfolio"
              className="flex items-center gap-2 bg-textMain text-white px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors w-full sm:w-auto justify-center"
            >
              View Portfolio <ArrowRight size={18} />
            </a>
            <a 
              href="/chinmay-portfolio/assets/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-transparent border border-gray-300 text-textMain px-6 py-3 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors w-full sm:w-auto justify-center"
            >
              Download Resume <Download size={18} />
            </a>
          </div>
        </div>

        {/* Right Side: Photo */}
        <div className="w-48 h-48 md:w-80 md:h-80 flex-shrink-0">
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
