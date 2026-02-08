import { Link, useNavigate } from "react-router";
import { Header } from "../components/Header";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function JourneyDetail() {
  const navigate = useNavigate();
  const [verificationExpanded, setVerificationExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header showBack onBack={() => navigate(-1)} />

      <main className="max-w-md mx-auto">
        {/* Hero Image Placeholder */}
        <div className="w-full h-64 bg-neutral-200" />

        <div className="px-6 py-6">
          {/* Journey Header */}
          <section className="mb-8">
            <div className="text-xs text-neutral-500 mb-3 uppercase tracking-wider">
              Gilgit-Baltistan
            </div>
            <h1 className="text-2xl mb-4 leading-tight text-neutral-900">
              Through the Valleys of Hunza
            </h1>
            
            <div className="flex flex-col gap-2 text-sm text-neutral-600 pb-4 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="text-neutral-500">Documented by:</span>
                <Link to="/contributors/1" className="text-neutral-900 underline hover:no-underline">
                  Ayesha Malik
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neutral-500">Journey dates:</span>
                <span>January 15–28, 2026</span>
              </div>
            </div>
          </section>

          {/* Why This Journey Matters */}
          <section className="mb-8">
            <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
              Why This Journey Matters
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed">
              This documentation captures traditional knowledge systems at a critical moment of transition. 
              Villages in these valleys maintain agricultural and architectural practices developed over 
              centuries, adapted to extreme terrain and climate. Recording these methods and the communities 
              that sustain them creates an archive for future reference and study.
            </p>
          </section>

          {/* Journey Content Sections */}
          <section className="mb-8 space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
                Introduction
              </h3>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  A documentation of village traditions and landscape formations in northern territories. 
                  This journey captures the daily rhythms of communities living between mountain ranges, 
                  where elevation and isolation have shaped distinct cultural practices.
                </p>
                <p>
                  The terrain dictates much of life here—water systems follow ancient patterns, 
                  architecture responds to seismic activity and temperature extremes, and agricultural 
                  calendars align with short growing seasons.
                </p>
              </div>
            </div>

            {/* Content Image Placeholder */}
            <div className="w-full h-56 bg-neutral-200" />

            <div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
                Agricultural Systems
              </h3>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Recording seasonal agricultural practices, water systems, and architectural responses 
                  to terrain and climate. Terraced fields cascade down slopes, engineered to maximize 
                  sunlight exposure and water retention.
                </p>
                <p>
                  Irrigation channels, some centuries old, follow contours precisely calculated for 
                  gravity-fed distribution. Maintenance of these systems is a communal responsibility, 
                  with traditional knowledge passed through demonstration and seasonal participation.
                </p>
              </div>
            </div>

            {/* Content Image Placeholder */}
            <div className="w-full h-56 bg-neutral-200" />

            <div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
                Community Knowledge
              </h3>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Conversations with local residents about migration patterns, resource management, 
                  and intergenerational knowledge transfer. Elders hold detailed understanding of 
                  weather patterns, soil conditions, and historical flood cycles.
                </p>
                <p>
                  Younger generations navigate between traditional methods and modern inputs, 
                  adapting practices while maintaining core principles. This negotiation shapes 
                  the current landscape and future possibilities.
                </p>
              </div>
            </div>
          </section>

          {/* People Met */}
          <section className="mb-8 py-6 border-t border-neutral-200">
            <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
              People Met
            </h3>
            <div className="space-y-3">
              <Link to="/people/1">
                <div className="flex items-center gap-3 p-3 border border-neutral-200 hover:border-neutral-400 transition-colors">
                  <div className="w-12 h-12 bg-neutral-200 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-900 mb-0.5">Ibrahim Shah</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Traditional woodworker specializing in structural timber and decorative carving, Karimabad
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/people/2">
                <div className="flex items-center gap-3 p-3 border border-neutral-200 hover:border-neutral-400 transition-colors">
                  <div className="w-12 h-12 bg-neutral-200 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-900 mb-0.5">Noor Textile Cooperative</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Women's textile group maintaining traditional weaving and natural dye techniques, Altit
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/people/3">
                <div className="flex items-center gap-3 p-3 border border-neutral-200 hover:border-neutral-400 transition-colors">
                  <div className="w-12 h-12 bg-neutral-200 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-900 mb-0.5">Karim Beg</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Elder and water management coordinator, Ganish village
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Crafts Encountered */}
          <section className="mb-8 py-6 border-t border-neutral-200">
            <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
              Crafts Encountered
            </h3>
            <div className="space-y-3">
              <div className="p-4 border border-neutral-200">
                <h4 className="text-sm text-neutral-900 mb-2">Traditional Woodwork</h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-2">
                  Structural timber joinery and decorative carving techniques specific to mountain architecture. 
                  Methods developed for seismic resilience and extreme weather conditions.
                </p>
                <Link to="/people/1" className="text-xs text-neutral-900 underline hover:no-underline">
                  Documented with Ibrahim Shah
                </Link>
              </div>

              <div className="p-4 border border-neutral-200">
                <h4 className="text-sm text-neutral-900 mb-2">Natural Dye Textiles</h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-2">
                  Wool and cotton textiles using plant-based dyes sourced from local and high-altitude flora. 
                  Color formulas and weaving patterns passed through generations of women artisans.
                </p>
                <Link to="/people/2" className="text-xs text-neutral-900 underline hover:no-underline">
                  Documented with Noor Textile Cooperative
                </Link>
              </div>
            </div>
          </section>

          {/* How This Journey Was Verified - Expandable */}
          <section className="py-6 border-t border-neutral-200">
            <button
              onClick={() => setVerificationExpanded(!verificationExpanded)}
              className="w-full flex items-center justify-between text-left group"
            >
              <h3 className="text-sm uppercase tracking-wider text-neutral-500">
                How This Journey Was Verified
              </h3>
              {verificationExpanded ? (
                <ChevronUp className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" />
              )}
            </button>

            {verificationExpanded && (
              <div className="mt-4 space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h4 className="text-neutral-900 mb-1">Contributor Verification</h4>
                  <p className="text-neutral-600">
                    Ayesha Malik is a verified contributor with documented background in anthropology 
                    and cultural documentation. Identity confirmed, methodology reviewed, portfolio assessed.
                  </p>
                </div>

                <div>
                  <h4 className="text-neutral-900 mb-1">Location & Access Confirmation</h4>
                  <p className="text-neutral-600">
                    All locations visited and documented during stated timeframe. Community permissions 
                    obtained prior to documentation. Local guides and translators credited.
                  </p>
                </div>

                <div>
                  <h4 className="text-neutral-900 mb-1">Content Review</h4>
                  <p className="text-neutral-600">
                    Editorial team reviewed for factual accuracy, cultural sensitivity, and ethical 
                    documentation practices. Consulted with regional specialists for context verification.
                  </p>
                </div>

                <div>
                  <h4 className="text-neutral-900 mb-1">Person & Vendor Profiles</h4>
                  <p className="text-neutral-600">
                    All individuals mentioned provided informed consent. Business and craft information 
                    verified through in-person documentation and community references.
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200">
                  <Link to="/standards" className="text-neutral-900 underline hover:no-underline">
                    Read our complete verification standards
                  </Link>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}