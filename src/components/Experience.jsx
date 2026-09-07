import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-section px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Experience</h2>
      
      <div className="max-w-4xl">
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Dot marker */}
              <div className="absolute -left-[41px] md:-left-[49px] top-1 h-5 w-5 rounded-full border-4 border-background bg-accent" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-bold text-textMain">{exp.role}</h3>
                <span className="text-sm font-medium text-accent mt-1 md:mt-0 bg-indigo-50 px-3 py-1 rounded-full w-max">
                  {exp.duration}
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-base font-semibold text-gray-700 mb-4">
                {exp.logo && (
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="w-7 h-7 object-contain rounded bg-white p-0.5 border border-gray-200"
                  />
                )}
                <span>{exp.company}</span>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-muted">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="pl-1 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
