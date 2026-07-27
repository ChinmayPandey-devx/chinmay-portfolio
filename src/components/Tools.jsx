import { 
  BookOpen, 
  Sparkles, 
  Code2, 
  Bot, 
  BarChart2, 
  Activity,
  Wrench,
  Palette
} from 'lucide-react';
import { tools } from '../data/tools';

const FigmaIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 38 57" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0zM0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0zM0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5zM0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5zM19 0h9.5a9.5 9.5 0 1 1 0 19H19V0z"/>
  </svg>
);

const iconMap = {
  BookOpen,
  Sparkles,
  Figma: FigmaIcon,
  Code2,
  Bot,
  BarChart2,
  Activity
};

export default function Tools() {
  return (
    <section id="tools" className="py-section px-6 lg:px-8 max-w-6xl mx-auto border-t border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-indigo-50 text-accent rounded-lg">
          <Wrench size={22} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tools I Work With</h2>
      </div>
      <p className="text-muted text-base md:text-lg mb-12 max-w-2xl">
        My stack of choice for research, strategy, prototyping, and data-driven product analytics.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const IconComponent = iconMap[tool.iconName] || Palette;
          return (
            <div 
              key={tool.id}
              className="bg-card p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-card hover:-translate-y-1 hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 text-accent flex items-center justify-center font-bold">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-textMain">{tool.name}</h3>
                      <span className="text-xs text-muted font-medium block">{tool.category}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
