import { useState } from 'react';
import { ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

const filters = [
  'All',
  'Product Design',
  'RCAs',
  'Guesstimates'
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter((project) => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-section px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">
            Deep-Dive Case Studies & Case Frameworks
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Product Portfolio</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeFilter === filter 
                  ? 'bg-accent text-white shadow-sm' 
                  : 'bg-white text-muted border border-gray-200 hover:bg-gray-100 hover:text-textMain'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-card rounded-2xl overflow-hidden shadow-card border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between h-full"
          >
            {/* Header Header Gradient Banner with Company Logo */}
            <div className={`h-36 w-full bg-gradient-to-br ${project.gradient} p-6 flex items-start justify-between relative`}>
              {/* Company Logo Badge */}
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm border border-white/20">
                <img 
                  src={`https://logo.clearbit.com/${project.logoDomain}`}
                  alt={`${project.company} logo`}
                  onError={(e) => {
                    // Fallback to Google favicon service if clearbit fails
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${project.logoDomain}&sz=128`;
                  }}
                  className="w-5 h-5 object-contain rounded-sm"
                />
                <span className="text-xs font-bold text-gray-800">{project.company}</span>
              </div>

              {/* Category Pill */}
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            
            {/* Content Body */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-3 gap-3">
                <h3 className="text-xl font-bold text-textMain leading-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  title="View Full PDF Document"
                  className="text-muted hover:text-accent p-1.5 rounded-lg hover:bg-indigo-50 transition-colors flex-shrink-0"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              {/* Summary */}
              <p className="text-muted text-sm mb-5 leading-relaxed">
                {project.summary}
              </p>

              {/* Key Highlights */}
              <div className="mb-6 bg-gray-50/80 p-4 rounded-xl border border-gray-100 flex-1">
                <span className="text-xs font-bold text-textMain uppercase tracking-wider block mb-2.5">
                  Key Findings & Frameworks
                </span>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 leading-normal">
                      <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags & Action Button */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((tool, i) => (
                    <span 
                      key={i}
                      className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-indigo-700 transition-colors cursor-pointer"
                >
                  <FileText size={14} />
                  <span>Full PDF</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-muted">
          No projects found in this category.
        </div>
      )}
    </section>
  );
}
