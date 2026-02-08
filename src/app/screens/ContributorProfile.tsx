import { Link, useNavigate } from "react-router";
import { Header } from "../components/Header";

export function ContributorProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <Header showBack onBack={() => navigate(-1)} />

      <main className="px-6 py-6 max-w-md mx-auto">
        {/* Profile Header */}
        <section className="mb-8">
          <div className="w-24 h-24 bg-neutral-300 mb-4" />
          <h1 className="text-xl mb-2">Ayesha Malik</h1>
          <p className="text-sm text-neutral-600">Verified Contributor since 2024</p>
        </section>

        {/* Bio */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            Bio
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            Documentary photographer and cultural researcher focusing on northern regions. Background in anthropology and community-based documentation practices. Works primarily in mountain communities documenting traditional knowledge systems.
          </p>
        </section>

        {/* Verification Badge */}
        <section className="mb-8 p-4 bg-white border border-neutral-200">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-neutral-300 mt-1" />
            <div className="flex-1 text-sm text-neutral-700">
              <p className="text-neutral-900 mb-2">Verified Contributor</p>
              <p className="mb-2">
                This contributor meets our editorial and ethical standards for cultural documentation.
              </p>
              <ul className="space-y-1 text-xs text-neutral-600">
                <li>✓ Identity verified</li>
                <li>✓ Documentation methods reviewed</li>
                <li>✓ Community permissions confirmed</li>
                <li>✓ Editorial review completed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            Focus Areas
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs bg-white border border-neutral-300">
              Mountain Communities
            </span>
            <span className="px-3 py-1 text-xs bg-white border border-neutral-300">
              Traditional Crafts
            </span>
            <span className="px-3 py-1 text-xs bg-white border border-neutral-300">
              Agricultural Practices
            </span>
            <span className="px-3 py-1 text-xs bg-white border border-neutral-300">
              Gilgit-Baltistan
            </span>
          </div>
        </section>

        {/* Published Journeys */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Published Journeys
          </h2>
          <div className="space-y-4">
            <Link to="/journeys/1">
              <article className="bg-white border border-neutral-200 p-4 hover:border-neutral-400 transition-colors">
                <div className="w-full h-32 bg-neutral-200 mb-3" />
                <h4 className="text-neutral-900 mb-2">
                  Through the Valleys of Hunza
                </h4>
                <p className="text-xs text-neutral-600 mb-2">
                  Gilgit-Baltistan • January 28, 2026
                </p>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  A documentation of village traditions and landscape formations in northern territories.
                </p>
              </article>
            </Link>
          </div>
        </section>

        {/* Standards Note */}
        <section className="text-xs text-neutral-600 leading-relaxed p-4 bg-neutral-100">
          <p>
            All contributors undergo a verification process before publishing.
            <Link to="/standards" className="underline ml-1 text-neutral-900">
              Learn about our standards
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
