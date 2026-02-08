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
      <Header title="Standards & Trust" />

      <main className="px-6 py-6 max-w-md mx-auto">
        {/* Introduction */}
        <section className="mb-10">
          <p className="text-base text-neutral-700 leading-relaxed mb-4">
            Banjare Musafir operates on a foundation of verified information, ethical documentation, 
            and community trust.
          </p>
          <p className="text-base text-neutral-700 leading-relaxed">
            Every piece of content meets specific standards before publication. This page explains 
            how we maintain credibility and what we refuse to compromise.
          </p>
        </section>

        {/* What We Verify */}
        <section className="mb-6">
          <button
            onClick={() => toggleSection('verify')}
            className="w-full flex items-center justify-between text-left py-4 border-t border-neutral-300 group"
          >
            <h2 className="text-base text-neutral-900">
              What We Verify
            </h2>
            {expandedSection === 'verify' ? (
              <ChevronUp className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            )}
          </button>

          {expandedSection === 'verify' && (
            <div className="pb-6 space-y-6">
              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Contributor Identity</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Government-issued identification, background review, portfolio assessment, and 
                  reference verification. We confirm each contributor is who they claim to be and 
                  has demonstrated experience in cultural documentation or research.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Location & Access</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  All locations mentioned in journeys must be confirmed through documentation, 
                  photographs, or witness accounts. Contributors must demonstrate they actually 
                  visited the places they describe.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Community Permissions</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Documentation requires informed consent from individuals and communities featured. 
                  We verify that proper permissions were obtained before, during, and after documentation.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Factual Accuracy</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Claims about history, craft methods, cultural practices, and geographic details 
                  are cross-referenced with multiple sources. Regional specialists review content 
                  for accuracy and context.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">People & Vendor Profiles</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Every individual mentioned is verified through in-person documentation. Business 
                  locations, craft methods, and community standing confirmed through multiple references 
                  and direct observation.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* What We Refuse to Promote */}
        <section className="mb-6">
          <button
            onClick={() => toggleSection('refuse')}
            className="w-full flex items-center justify-between text-left py-4 border-t border-neutral-300 group"
          >
            <h2 className="text-base text-neutral-900">
              What We Refuse to Promote
            </h2>
            {expandedSection === 'refuse' ? (
              <ChevronUp className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            )}
          </button>

          {expandedSection === 'refuse' && (
            <div className="pb-6 space-y-6">
              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Commercial Exploitation</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Content exists to document culture, not to drive sales. We do not accept payment 
                  for featuring vendors or crafts. Journeys that prioritize commerce over documentation 
                  are rejected.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Cultural Appropriation</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Documentation that extracts cultural knowledge without proper context, compensation, 
                  or community benefit is not published. Contributors must demonstrate respect for 
                  cultural ownership and intellectual property.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Exploitative Tourism</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We do not promote tourism that harms communities, treats people as spectacles, 
                  or encourages unsustainable visitor patterns. Documentation must serve the 
                  community first.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Unverified Claims</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Romantic or exaggerated descriptions, unsubstantiated historical claims, and 
                  speculation presented as fact are edited or rejected. We maintain documentary 
                  standards, not storytelling for entertainment.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Privacy Violations</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Any content that violates individual privacy, reveals sensitive information without 
                  consent, or exposes vulnerable communities to unwanted attention is immediately removed.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* How Contributors Are Approved */}
        <section className="mb-6">
          <button
            onClick={() => toggleSection('approval')}
            className="w-full flex items-center justify-between text-left py-4 border-t border-neutral-300 group"
          >
            <h2 className="text-base text-neutral-900">
              How Contributors Are Approved
            </h2>
            {expandedSection === 'approval' ? (
              <ChevronUp className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            )}
          </button>

          {expandedSection === 'approval' && (
            <div className="pb-6 space-y-6">
              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Step 1: Application Review</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-2">
                  Applications are reviewed for background, documentation approach, and ethical framework. 
                  We look for demonstrated experience and clear understanding of cultural sensitivity.
                </p>
                <p className="text-xs text-neutral-500">
                  Timeline: Initial review within 10 business days
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Step 2: Interview & Methodology Discussion</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-2">
                  Shortlisted applicants are interviewed to discuss documentation methods, ethical 
                  principles, and approach to community engagement. We assess judgment, respect, 
                  and commitment to accuracy.
                </p>
                <p className="text-xs text-neutral-500">
                  Timeline: Scheduled within 2 weeks of application approval
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Step 3: Trial Status</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-2">
                  Approved applicants receive trial status. First submission undergoes detailed editorial 
                  review with feedback. This confirms ability to meet standards before full verification.
                </p>
                <p className="text-xs text-neutral-500">
                  Timeline: Trial period lasts through first published journey
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Step 4: Full Verification</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-2">
                  Contributors who successfully complete trial status receive full verification. 
                  This grants ongoing publishing rights subject to continued adherence to standards.
                </p>
                <p className="text-xs text-neutral-500">
                  Note: Verification is not permanent and can be paused or revoked
                </p>
              </div>
            </div>
          )}
        </section>

        {/* How Vendors or Contributors Are Paused or Removed */}
        <section className="mb-6">
          <button
            onClick={() => toggleSection('removal')}
            className="w-full flex items-center justify-between text-left py-4 border-t border-b border-neutral-300 group"
          >
            <h2 className="text-base text-neutral-900">
              How Vendors or Contributors Are Paused or Removed
            </h2>
            {expandedSection === 'removal' ? (
              <ChevronUp className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0" />
            )}
          </button>

          {expandedSection === 'removal' && (
            <div className="pb-6 space-y-6">
              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Paused Status</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                  Profiles are paused when information becomes outdated, businesses close temporarily, 
                  or individuals request a pause. Paused profiles remain visible but clearly marked 
                  as inactive.
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  <span className="text-neutral-900">Reasons for pausing:</span><br />
                  • Temporary business closure<br />
                  • Personal request from individual<br />
                  • Outdated information pending update<br />
                  • Minor standards violations under review
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Removed Status</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                  Profiles and content are removed when serious violations occur, consent is withdrawn, 
                  or information is found to be false. Removal is permanent and affects all associated content.
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  <span className="text-neutral-900">Reasons for removal:</span><br />
                  • Fabricated or falsified information<br />
                  • Violation of community consent<br />
                  • Exploitative or harmful practices<br />
                  • Repeated standards violations<br />
                  • Legal or safety concerns
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Review Process</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  All reports and concerns are reviewed by editorial team. Contributors or vendors 
                  have opportunity to respond before decisions are made. Appeals can be submitted 
                  for reconsideration.
                </p>
              </div>

              <div>
                <h3 className="text-sm text-neutral-900 mb-2">Community Reports</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We take community feedback seriously. Reports from local residents, cultural 
                  practitioners, or other contributors receive priority review and inform our 
                  ongoing verification processes.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Report Concerns */}
        <section className="my-10 p-5 bg-white border border-neutral-200">
          <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            Report Concerns
          </h3>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            If you encounter content that doesn't meet our standards or have concerns about 
            documentation practices, we review all reports within 5 business days.
          </p>
          <button className="w-full py-3 px-6 border border-neutral-300 text-neutral-900 hover:bg-neutral-100 transition-colors">
            Submit a Report
          </button>
        </section>

        {/* Become a Contributor */}
        <section className="p-5 bg-neutral-900 text-white">
          <h3 className="text-base mb-2">
            Interested in Contributing?
          </h3>
          <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
            We welcome applications from documentarians, researchers, and cultural practitioners 
            committed to ethical storytelling.
          </p>
          <Link
            to="/contribute"
            className="inline-block w-full py-3 px-6 bg-white text-neutral-900 text-center hover:bg-neutral-100 transition-colors"
          >
            Apply to Contribute
          </Link>
        </section>
      </main>
    </div>
  );
}