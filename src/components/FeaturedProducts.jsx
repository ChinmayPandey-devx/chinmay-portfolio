import { ExternalLink, Rocket, Layers } from 'lucide-react';
import { featuredProducts } from '../data/featuredProducts';

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-section px-6 lg:px-8 max-w-6xl mx-auto border-t border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-indigo-50 text-accent rounded-lg">
          <Rocket size={22} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Products</h2>
      </div>
      <p className="text-muted text-base md:text-lg mb-12 max-w-2xl">
        0→1 platforms designed, built, and shipped to solve real user and campus workflows.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {featuredProducts.map((product) => (
          <div 
            key={product.id}
            className="bg-card rounded-2xl overflow-hidden border border-gray-200 shadow-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image & Header */}
            <div>
              <div className="relative h-56 sm:h-64 w-full bg-gray-100 overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-textMain/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {product.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-accent/90 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-textMain leading-tight">
                    {product.title}
                  </h3>
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noreferrer"
                    title="View Live Project"
                    className="p-2 bg-indigo-50 text-accent rounded-lg hover:bg-accent hover:text-white transition-colors flex-shrink-0"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <ul className="space-y-3 mb-6 text-muted text-sm md:text-base leading-relaxed">
                  {product.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer / Tags & CTA */}
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={product.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-indigo-700 transition-colors w-full sm:w-auto justify-end"
              >
                <span>Launch Demo</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
