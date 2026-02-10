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
        <div className="px-6 py-6">
          {/* Visit Header */}
          <section className="mb-6">
            <div className="text-xs text-neutral-500 mb-2 uppercase tracking-wider">
              Shop Visit
            </div>
            <h1 className="text-2xl mb-3 leading-tight text-neutral-900">
              Karim's Carpet Workshop
            </h1>
            
            <div className="flex flex-col gap-1 text-sm text-neutral-600 pb-4 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="text-neutral-900">Lahore</span>
                <span className="text-neutral-400">•</span>
                <span>Anarkali Bazaar area</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-neutral-500">Visited by:</span>
                <Link to="/contributors/1" className="text-neutral-900 underline hover:no-underline">
                  Ayesha Malik
                </Link>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-500">January 28, 2026</span>
              </div>
            </div>
          </section>

          {/* Why We Visited */}
          <section className="mb-6">
            <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
              Why We Visited This Place
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed">
              This workshop has operated in the same location for three generations, maintaining 
              traditional hand-knotting techniques while adapting to modern market demands. We wanted 
              to document the actual working conditions, pricing transparency, and quality standards 
              before recommending it to visitors.
            </p>
          </section>

          {/* Video Placeholder */}
          <section className="mb-6">
            <div className="w-full aspect-video bg-neutral-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 border-2 border-white/30 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-sm text-white/70">Video: Full Workshop Walkthrough</p>
                <p className="text-xs text-white/50 mt-1">12:34</p>
              </div>
            </div>
          </section>

          {/* What We Observed */}
          <section className="mb-6">
            <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
              What We Observed
            </h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Workshop Setup</h3>
                <p className="text-sm">
                  Four active looms in the main workshop area. Natural lighting from skylights 
                  supplemented by overhead fluorescents. Ventilation adequate but not climate controlled. 
                  Clean workspace with organized materials storage.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Craftspeople & Process</h3>
                <p className="text-sm">
                  Two master weavers working on custom orders, one apprentice learning foundation 
                  techniques. Hand-knotting demonstrated in detail. Wool quality clearly visible 
                  and sourced from verified suppliers. Traditional natural dyes used alongside 
                  modern colorfast alternatives depending on client preference.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Pricing & Custom Work</h3>
                <p className="text-sm">
                  Standard sizes displayed with clear pricing based on knot density and materials. 
                  Custom orders accepted with 40% deposit. Timeline estimates provided upfront—
                  realistic based on complexity. No pressure sales tactics observed.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Quality Indicators</h3>
                <p className="text-sm">
                  Finished pieces showed consistent knot density. Edges properly secured. Dye 
                  fastness tested on samples. Owner explained quality grades openly and showed 
                  examples of different price points with clear justification for variations.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Location & Access</h3>
                <p className="text-sm">
                  Located on second floor of building in Anarkali Bazaar. Stairs only, no elevator. 
                  Open 10 AM to 7 PM, closed Fridays. Parking challenging—recommend arriving by 
                  rickshaw or on foot. Nearby landmarks: Anarkali Food Street entrance, Dayal Singh 
                  Library.
                </p>
              </div>
            </div>
          </section>

          {/* Things to Keep in Mind */}
          <section className="mb-6 p-4 bg-neutral-50 border border-neutral-200">
            <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
              Things to Keep in Mind
            </h2>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2">
                <span className="text-neutral-400 flex-shrink-0">•</span>
                <span>Custom orders require 6–12 weeks depending on size and complexity</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neutral-400 flex-shrink-0">•</span>
                <span>Prices are negotiable but expect realistic haggling margins (10–15%)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neutral-400 flex-shrink-0">•</span>
                <span>Workshop gets warm in summer months, visit mornings if heat-sensitive</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neutral-400 flex-shrink-0">•</span>
                <span>Photography allowed with permission—ask before filming</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neutral-400 flex-shrink-0">•</span>
                <span>Owner speaks English and Urdu; Punjabi also spoken by craftspeople</span>
              </li>
            </ul>
          </section>

          {/* People Featured */}
          <section className="mb-6 py-6 border-t border-neutral-200">
            <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
              People Featured in This Visit
            </h3>
            <div className="space-y-3">
              <Link to="/people/1">
                <div className="flex items-center gap-3 p-3 border border-neutral-200 hover:border-neutral-400 transition-colors">
                  <div className="w-12 h-12 bg-neutral-200 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-900 mb-0.5">Karim Hussain</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Third-generation workshop owner and master carpet weaver
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/people/2">
                <div className="flex items-center gap-3 p-3 border border-neutral-200 hover:border-neutral-400 transition-colors">
                  <div className="w-12 h-12 bg-neutral-200 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-900 mb-0.5">Naseem Bibi</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Master weaver specializing in floral pattern knotting
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* How This Visit Was Done - Expandable */}
          <section className="py-6 border-t border-neutral-200">
            <button
              onClick={() => setVerificationExpanded(!verificationExpanded)}
              className="w-full flex items-center justify-between text-left group"
            >
              <h3 className="text-sm uppercase tracking-wider text-neutral-500">
                How This Visit Was Done
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
                  <h4 className="text-neutral-900 mb-1">Visit Approach</h4>
                  <p className="text-neutral-600">
                    Unannounced visit during regular business hours. Identified as documentarian, 
                    requested permission to observe and film. No compensation provided to business 
                    or individuals featured.
                  </p>
                </div>

                <div>
                  <h4 className="text-neutral-900 mb-1">Permissions & Consent</h4>
                  <p className="text-neutral-600">
                    Verbal consent obtained from owner and craftspeople before filming. Individuals 
                    were informed about platform purpose and given option to decline participation. 
                    All featured individuals agreed to be identified.
                  </p>
                </div>

                <div>
                  <h4 className="text-neutral-900 mb-1">Verification Process</h4>
                  <p className="text-neutral-600">
                    Business location confirmed through Google Maps and local references. Quality 
                    claims cross-referenced with textile specialists. Pricing verified as consistent 
                    with market standards for hand-knotted carpets of stated quality.
                  </p>
                </div>

                <div>
                  <h4 className="text-neutral-900 mb-1">Editorial Review</h4>
                  <p className="text-neutral-600">
                    Content reviewed by editorial team for accuracy and ethical documentation 
                    standards. No financial relationship exists between platform and this business.
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200">
                  <Link to="/standards" className="text-neutral-900 underline hover:no-underline">
                    Read our complete documentation standards
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