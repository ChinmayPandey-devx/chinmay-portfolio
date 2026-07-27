import { Mail, Globe, Code, FileText } from 'lucide-react';

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
            href="mailto:chinmayworkpandey@gmail.com" 
            className="flex items-center gap-2 text-textMain font-medium hover:text-accent transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/chinmay-pandey-40a7a327b" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-textMain font-medium hover:text-accent transition-colors"
          >
            <Globe size={20} />
            <span>LinkedIn</span>
          </a>

          <a 
            href="https://github.com/ChinmayPandey-devx" 
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

        <div className="text-sm text-gray-400 font-medium">
          &copy; {currentYear > 2026 ? currentYear : 2026} Chinmay Pandey
        </div>
      </div>
    </footer>
  );
}
