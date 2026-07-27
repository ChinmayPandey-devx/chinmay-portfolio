import { Mail, Globe, Code, FileText, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-gray-200 py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Let's build something great.</h2>
        <p className="text-lg text-muted mb-12 text-balance max-w-2xl mx-auto">
          Open to PM internships and full-time roles. Currently available — let's talk.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          <a 
            href="mailto:chinmay.pandey.work@gmail.com" 
            className="flex items-center gap-2 text-textMain font-medium hover:text-accent transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>

          <a 
            href="https://linkedin.com/in/chinmaypandey" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-textMain font-medium hover:text-accent transition-colors"
          >
            <Globe size={20} />
            <span>LinkedIn</span>
          </a>

          <a 
            href="https://github.com/chinmaypandey-devx" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-textMain font-medium hover:text-accent transition-colors"
          >
            <Code size={20} />
            <span>GitHub</span>
          </a>

          <a 
            href="/chinmay-portfolio/assets/resume.pdf" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-textMain font-medium hover:text-accent transition-colors"
          >
            <FileText size={20} />
            <span>Resume</span>
          </a>
        </div>

        {/* GitHub & Prototype Build Note */}
        <div className="inline-flex items-center gap-2 bg-indigo-50/60 border border-indigo-100 text-gray-700 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium mb-12">
          <Sparkles size={16} className="text-accent flex-shrink-0" />
          <span>AI-based prototypes built using <strong>Antigravity</strong>, <strong>Claude</strong>, <strong>Codex</strong>, and <strong>Figma</strong>.</span>
        </div>

        <div className="text-sm text-gray-400 font-medium">
          &copy; {currentYear > 2026 ? currentYear : 2026} Chinmay Pandey
        </div>
      </div>
    </footer>
  );
}
