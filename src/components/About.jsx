const skills = [
  "Product Strategy",
  "User Research",
  "PRD Writing",
  "A/B Testing",
  "SQL",
  "Figma",
  "Data Analytics",
  "Stakeholder Management",
  "AI/ML Fundamentals",
  "0→1 Development"
];

export default function About() {
  return (
    <section id="about" className="py-section px-6 lg:px-8 max-w-6xl mx-auto border-t border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Bio Text */}
        <div className="text-muted text-lg leading-relaxed space-y-6">
          <p>
            My transition from engineering to product was driven by an intense curiosity about why we build certain features over others, and how those decisions impact users. Engineering taught me how to build; product management taught me what to build.
          </p>
          <p>
            I thrive in the intersection of business, technology, and user experience. My strength lies in finding clarity amidst ambiguity, aligning cross-functional teams, and shipping products that genuinely solve user problems.
          </p>
        </div>

        {/* Skills */}
        <div>
          <div>
            <h3 className="text-xl font-bold text-textMain mb-6 flex items-center gap-2">
              Toolkit
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span 
                  key={skill}
                  className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
