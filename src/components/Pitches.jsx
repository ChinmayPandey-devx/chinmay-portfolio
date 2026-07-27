import { ExternalLink, FileText, UserCheck, MessageSquareQuote } from 'lucide-react';
import { pitches } from '../data/pitches';

export default function Pitches({ showLogos = false }) {
  return (
    <section id="leadership-engagement" className="py-section px-6 lg:px-8 max-w-6xl mx-auto border-t border-gray-200">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-indigo-50 text-accent rounded-lg">
          <UserCheck size={22} />
        </div>
        <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
          Credibility & Direct Outreach
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Product Leaders Have Engaged With My Work
      </h2>
      <p className="text-muted text-base md:text-lg mb-12 max-w-3xl">
        Unsolicited product pitches, teardowns, and working 0→1 prototypes delivered directly to VPs, CPOs, and Product Heads.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pitches.map((pitch) => {
          const hasDeck = Boolean(pitch.pitchDeck);
          const hasPrototypes = pitch.prototypes && pitch.prototypes.length > 0;
          const hasLinks = hasDeck || hasPrototypes;

          return (
            <div 
              key={pitch.id}
              className="bg-card rounded-2xl p-6 border border-gray-200 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with Company & Leader Info */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    {showLogos && (
                      <div className="w-10 h-10 rounded-xl bg-gray-50 p-1.5 border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={`https://logo.clearbit.com/${pitch.logoDomain}`}
                          alt={`${pitch.company} logo`}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${pitch.logoDomain}&sz=128`;
                          }}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-xl text-textMain leading-tight">{pitch.company}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-accent font-semibold mt-0.5">
                        <span>{pitch.leader}</span>
                        {pitch.leaderTitle && <span className="text-gray-400 font-normal">({pitch.leaderTitle})</span>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Quote */}
                <div className="mb-6 text-sm text-gray-700 leading-relaxed relative bg-gray-50/70 p-4 rounded-xl border border-gray-100">
                  <MessageSquareQuote size={18} className="text-indigo-300 mb-1" />
                  <p>{pitch.description}</p>
                </div>
              </div>

              {/* Action Buttons / Graceful Link Hiding */}
              <div className="pt-4 border-t border-gray-100 mt-auto flex flex-col gap-2.5">
                {hasDeck && (
                  <a 
                    href={pitch.pitchDeck}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between text-xs font-bold text-accent bg-indigo-50 hover:bg-accent hover:text-white px-3.5 py-2 rounded-lg transition-colors w-full"
                  >
                    <span className="flex items-center gap-2">
                      <FileText size={15} />
                      <span>View Pitch Deck</span>
                    </span>
                    <ExternalLink size={14} />
                  </a>
                )}

                {hasPrototypes && (
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Working Prototypes:</span>
                    <div className="flex flex-wrap gap-2">
                      {pitch.prototypes.map((proto, idx) => (
                        <a 
                          key={idx}
                          href={proto.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-accent hover:text-white px-3 py-1.5 rounded-md transition-colors"
                        >
                          <span>{proto.name}</span>
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {!hasLinks && (
                  <div className="text-xs font-medium text-gray-400 italic py-1">
                    Engagement details & pitch artifacts available on request
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
