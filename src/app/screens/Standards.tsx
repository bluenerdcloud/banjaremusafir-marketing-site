import { Link } from "react-router";
import { Header } from "../components/Header";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function Standards() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <Header title="How We Visit & Share" />

      <main className="px-6 py-6 max-w-md mx-auto">
        {/* Introduction */}
        <section className="mb-10">
          <p className="text-base text-neutral-700 leading-relaxed mb-4">
            Banjare Musafir is a simple approach to sharing firsthand visits across Pakistan. 
            We go places, film what we see, and share our observations.
          </p>
          <p className="text-base text-neutral-700 leading-relaxed">
            This page explains how we work and what you can expect from the content we create.
          </p>
        </section>

        {/* We Visit Places Ourselves */}
        <section className="mb-6">
          <button
            onClick={() => toggleSection('visit')}
            className="w-full flex items-center justify-between text-left py-4 border-t border-neutral-300 group"
          >
            <h2 className="text-base text-neutral-900">
              We Visit Places Ourselves
            </h2>
            {expandedSection === 'visit' ? (
              <ChevronUp className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            )}
          </button>

          {expandedSection === 'visit' && (
            <div className="pb-6 space-y-4">
              <p className="text-sm text-neutral-600 leading-relaxed">
                Every shop, market, food spot, or location you see documented here has been visited 
                in person by our contributors. We don't share secondhand information or rely on 
                business descriptions.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Most visits are unannounced during regular business hours. We observe what's actually 
                happening, talk to people who work there, and document what we find. If we return to 
                a place, we note it as a revisit.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We ask permission before filming and let people know their business or location will 
                be shared publicly. Anyone who prefers not to be featured can decline.
              </p>
            </div>
          )}
        </section>

        {/* We Show What We See, Not Scripts */}
        <section className="mb-6">
          <button
            onClick={() => toggleSection('show')}
            className="w-full flex items-center justify-between text-left py-4 border-t border-neutral-300 group"
          >
            <h2 className="text-base text-neutral-900">
              We Show What We See, Not Scripts
            </h2>
            {expandedSection === 'show' ? (
              <ChevronUp className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            )}
          </button>

          {expandedSection === 'show' && (
            <div className="pb-6 space-y-4">
              <p className="text-sm text-neutral-600 leading-relaxed">
                Our content reflects what we observe during visits. We document working conditions, 
                interactions with shop owners, visible quality indicators, pricing transparency, and 
                practical details like location and access.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We don't create promotional content or follow scripts provided by businesses. If 
                something stands out as particularly good or problematic, we mention it. If a visit 
                is unremarkable, we say that too.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                You'll see notes about things like workshop cleanliness, how staff interact with 
                visitors, whether pricing is clearly explained, and how realistic timelines are for 
                custom work. These are observations, not endorsements.
              </p>
            </div>
          )}
        </section>

        {/* We Don't Take Responsibility for Transactions */}
        <section className="mb-6">
          <button
            onClick={() => toggleSection('transactions')}
            className="w-full flex items-center justify-between text-left py-4 border-t border-neutral-300 group"
          >
            <h2 className="text-base text-neutral-900">
              We Don't Take Responsibility for Transactions
            </h2>
            {expandedSection === 'transactions' ? (
              <ChevronUp className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            )}
          </button>

          {expandedSection === 'transactions' && (
            <div className="pb-6 space-y-4">
              <p className="text-sm text-neutral-600 leading-relaxed">
                This platform documents visits and shares observations. We are not mediators, 
                guarantors, or customer service representatives for any business or location featured.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                If you visit a shop, market, or location based on our content, your experience is 
                between you and that business. We don't handle complaints, refunds, or disputes. 
                Prices, availability, and business practices can change after we visit.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Think of this content as documentation of what we saw when we were there—not as a 
                promise about what you'll find when you go. Conditions change, and your experience 
                may differ from ours.
              </p>
            </div>
          )}
        </section>

        {/* We Don't Promote What We Haven't Visited */}
        <section className="mb-6">
          <button
            onClick={() => toggleSection('promote')}
            className="w-full flex items-center justify-between text-left py-4 border-t border-b border-neutral-300 group"
          >
            <h2 className="text-base text-neutral-900">
              We Don't Promote What We Haven't Visited
            </h2>
            {expandedSection === 'promote' ? (
              <ChevronUp className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            )}
          </button>

          {expandedSection === 'promote' && (
            <div className="pb-6 space-y-4">
              <p className="text-sm text-neutral-600 leading-relaxed">
                We don't accept payment from businesses to feature them. If a shop or location appears 
                on this platform, it's because one of our contributors visited and chose to document it.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We don't create content based on recommendations, advertising requests, or business 
                partnerships. Contributors decide where to go based on their own interests and what 
                they think is worth sharing.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Sometimes we revisit places to see if things have changed. Sometimes we document spots 
                that turn out to be disappointing. Either way, what you see is based on actual visits, 
                not promotional agreements.
              </p>
            </div>
          )}
        </section>

        {/* Who's Creating This Content */}
        <section className="my-10 p-5 bg-white border border-neutral-200">
          <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            Who's Creating This Content
          </h3>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            Our contributors are individuals documenting their explorations across Pakistan. They're 
            not professional reviewers or influencers—just people visiting places and sharing what 
            they find.
          </p>
          <Link
            to="/contribute"
            className="inline-block w-full py-3 px-6 border border-neutral-300 text-neutral-900 text-center hover:bg-neutral-100 transition-colors"
          >
            Learn About Contributing
          </Link>
        </section>

        {/* Questions or Concerns */}
        <section className="p-5 bg-neutral-900 text-white">
          <h3 className="text-base mb-2">
            Questions or Concerns?
          </h3>
          <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
            If you have questions about how we work or concerns about specific content, we review 
            all feedback.
          </p>
          <button className="w-full py-3 px-6 bg-white text-neutral-900 text-center hover:bg-neutral-100 transition-colors">
            Contact Us
          </button>
        </section>
      </main>
    </div>
  );
}