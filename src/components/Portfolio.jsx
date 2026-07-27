import { useState, useEffect } from 'react';
import { CheckCircle2, X, HelpCircle, Target, Award, BarChart, Eye } from 'lucide-react';
import { projects } from '../data/projects';

const filters = [
  'All',
  'Product Design',
  'RCAs',
  'Guesstimates'
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
            onClick={() => setSelectedProject(project)}
            className="group bg-card rounded-2xl overflow-hidden shadow-card border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 flex flex-col justify-between h-full cursor-pointer"
          >
            {/* Header Gradient Banner with Company Logo */}
            <div className={`h-36 w-full bg-gradient-to-br ${project.gradient} p-6 flex items-start justify-between relative`}>
              {/* Company Logo Badge */}
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm border border-white/20">
                <img 
                  src={`https://logo.clearbit.com/${project.logoDomain}`}
                  alt={`${project.company} logo`}
                  onError={(e) => {
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
                <span 
                  title="Click to view interactive case study"
                  className="text-accent bg-indigo-50 p-1.5 rounded-lg text-xs font-semibold flex-shrink-0 flex items-center gap-1"
                >
                  <Eye size={14} />
                  <span>View Case</span>
                </span>
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
              
              {/* Tags */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
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

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 flex flex-col my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 sm:p-8 bg-gradient-to-r ${selectedProject.gradient} text-white relative flex flex-col justify-between`}>
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
                title="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2">
                  <img 
                    src={`https://logo.clearbit.com/${selectedProject.logoDomain}`}
                    alt={`${selectedProject.company} logo`}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${selectedProject.logoDomain}&sz=128`;
                    }}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-xs font-bold text-gray-900">{selectedProject.company}</span>
                </div>
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white pr-10">
                {selectedProject.title}
              </h2>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-8 flex-1">
              {/* Problem Statement Box */}
              <div className="bg-indigo-50/70 border border-indigo-100 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-2">
                  <Target size={18} />
                  <span>Problem Statement</span>
                </div>
                <p className="text-gray-800 text-base leading-relaxed font-medium">
                  {selectedProject.problemStatement}
                </p>
              </div>

              {/* Executive Summary */}
              <div>
                <h3 className="text-lg font-bold text-textMain mb-3 flex items-center gap-2">
                  <Award size={18} className="text-accent" />
                  <span>Executive Summary</span>
                </h3>
                <p className="text-muted text-base leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Clarifying Questions & Constraints */}
              {selectedProject.clarifyingQuestions && (
                <div>
                  <h3 className="text-lg font-bold text-textMain mb-4 flex items-center gap-2">
                    <HelpCircle size={18} className="text-accent" />
                    <span>Clarifying Scope & Constraints</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.clarifyingQuestions.map((cq, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <span className="text-xs font-bold text-accent block mb-1">{cq.q}</span>
                        <span className="text-xs text-gray-700 font-medium leading-normal">{cq.a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Framework Breakdown / RICE Table */}
              {selectedProject.riceTable && (
                <div>
                  <h3 className="text-lg font-bold text-textMain mb-4 flex items-center gap-2">
                    <BarChart size={18} className="text-accent" />
                    <span>Framework Breakdown & Prioritization</span>
                  </h3>
                  <div className="overflow-x-auto border border-gray-200 rounded-xl">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200">
                        <tr>
                          <th className="p-3 sm:p-4">Feature / Step</th>
                          <th className="p-3 sm:p-4">Reach</th>
                          <th className="p-3 sm:p-4">Impact</th>
                          <th className="p-3 sm:p-4">Effort</th>
                          <th className="p-3 sm:p-4">Priority / Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-600">
                        {selectedProject.riceTable.map((row, idx) => (
                          <tr key={idx} className="hover:bg-gray-50 transition-colors">
                            <td className="p-3 sm:p-4 font-semibold text-textMain">{row.feature}</td>
                            <td className="p-3 sm:p-4">{row.reach}</td>
                            <td className="p-3 sm:p-4">{row.impact}</td>
                            <td className="p-3 sm:p-4">{row.effort}</td>
                            <td className="p-3 sm:p-4">
                              <span className="bg-indigo-50 text-accent font-semibold px-2.5 py-1 rounded-md text-xs">
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Metrics */}
              {selectedProject.metrics && (
                <div>
                  <h3 className="text-lg font-bold text-textMain mb-4">Key Metrics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.metrics.map((metric, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                        <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-textMain block uppercase tracking-wider">{metric.name}</span>
                          <span className="text-xs text-muted leading-normal">{metric.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl flex items-center justify-end">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 text-xs font-bold text-white bg-textMain hover:bg-accent rounded-lg transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
