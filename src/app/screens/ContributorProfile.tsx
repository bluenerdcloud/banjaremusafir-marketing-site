import { Link, useNavigate } from "react-router";
import { Header } from "../components/Header";

export function ContributorProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <Header showBack onBack={() => navigate(-1)} title="Behind the Camera" />

      <main className="px-6 py-6 max-w-md mx-auto">
        {/* Profile Header */}
        <section className="mb-8">
          <div className="w-24 h-24 bg-neutral-300 mb-4" />
          <h1 className="text-xl mb-3 text-neutral-900">Ayesha Malik</h1>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Exploring shops, markets, and local spots across Pakistan. Based in Lahore, documenting 
            what I find worth sharing.
          </p>
        </section>

        {/* Activity Summary */}
        <section className="mb-8 flex gap-6">
          <div>
            <p className="text-2xl text-neutral-900 mb-1">23</p>
            <p className="text-xs text-neutral-600">Visits</p>
          </div>
          <div>
            <p className="text-2xl text-neutral-900 mb-1">8</p>
            <p className="text-xs text-neutral-600">Cities</p>
          </div>
        </section>

        {/* Cities Visited */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            Cities Visited
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-xs bg-white border border-neutral-300">
              Lahore
            </span>
            <span className="px-3 py-1.5 text-xs bg-white border border-neutral-300">
              Karachi
            </span>
            <span className="px-3 py-1.5 text-xs bg-white border border-neutral-300">
              Islamabad
            </span>
            <span className="px-3 py-1.5 text-xs bg-white border border-neutral-300">
              Gilgit
            </span>
            <span className="px-3 py-1.5 text-xs bg-white border border-neutral-300">
              Multan
            </span>
            <span className="px-3 py-1.5 text-xs bg-white border border-neutral-300">
              Peshawar
            </span>
            <span className="px-3 py-1.5 text-xs bg-white border border-neutral-300">
              Skardu
            </span>
            <span className="px-3 py-1.5 text-xs bg-white border border-neutral-300">
              Faisalabad
            </span>
          </div>
        </section>

        {/* Recent Visits */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Recent Visits
          </h2>
          <div className="space-y-3">
            <Link to="/journeys/1">
              <article className="bg-white border border-neutral-200 p-4 hover:border-neutral-400 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-sm text-neutral-900">
                    Karim's Carpet Workshop
                  </h4>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">Jan 28, 2026</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Shop Visit • Lahore
                </p>
              </article>
            </Link>

            <Link to="/journeys/3">
              <article className="bg-white border border-neutral-200 p-4 hover:border-neutral-400 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-sm text-neutral-900">
                    Sunday Food Market at Anarkali
                  </h4>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">Jan 22, 2026</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Market Walkthrough • Lahore
                </p>
              </article>
            </Link>

            <Link to="/journeys/7">
              <article className="bg-white border border-neutral-200 p-4 hover:border-neutral-400 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-sm text-neutral-900">
                    Fortress Stadium Food Street
                  </h4>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">Jan 15, 2026</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Food Stop • Lahore
                </p>
              </article>
            </Link>
          </div>
        </section>

        {/* Note */}
        <section className="text-xs text-neutral-600 leading-relaxed p-4 bg-white border border-neutral-200">
          <p>
            All visits are documented firsthand. We don't accept payment from businesses or 
            locations featured in our content.
          </p>
        </section>
      </main>
    </div>
  );
}