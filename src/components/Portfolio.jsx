import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const filters = [
  'All',
  'Product Teardowns',
  'Product Design',
  'PRDs',
  'RCAs',
  'Guesstimates',
  'Growth Experiments'
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter((project) => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-section px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Product Portfolio</h2>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter 
                ? 'bg-accent text-white' 
                : 'bg-transparent text-muted hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-card rounded-lg overflow-hidden shadow-card border border-gray-100 hover:-translate-y-1 transition-transform duration-200 flex flex-col h-full"
          >
            {/* Thumbnail */}
            <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-end`}>
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded w-max mb-2">
                {project.category}
              </span>
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2 gap-4">
                <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted hover:text-accent flex-shrink-0"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-muted text-sm mb-6 flex-1">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tools.map((tool, i) => (
                  <span 
                    key={i}
                    className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
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
