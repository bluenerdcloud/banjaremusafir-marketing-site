import { Link } from "react-router";
import { Header } from "../components/Header";
import { Shield } from "lucide-react";

export function JourneyFeed() {
  const journeys = [
    {
      id: 1,
      title: "Through the Valleys of Hunza",
      region: "Gilgit-Baltistan",
      contributor: "Ayesha Malik",
      contributorId: 1,
      date: "January 28, 2026",
      purpose: "Documentation of village traditions and landscape formations in northern territories.",
      verified: true,
    },
    {
      id: 2,
      title: "Desert Nights in Cholistan",
      region: "Punjab",
      contributor: "Hassan Raza",
      contributorId: 2,
      date: "January 22, 2026",
      purpose: "Recording nomadic culture and seasonal patterns in the Rohi desert region.",
      verified: true,
    },
    {
      id: 3,
      title: "Karachi Port Stories",
      region: "Sindh",
      contributor: "Fatima Khan",
      contributorId: 3,
      date: "January 15, 2026",
      purpose: "Maritime heritage and working communities along the coastal corridor.",
      verified: true,
    },
    {
      id: 4,
      title: "Lahore's Walled City",
      region: "Punjab",
      contributor: "Ali Ahmed",
      contributorId: 4,
      date: "January 10, 2026",
      purpose: "Architectural documentation and artisan communities within the old city boundaries.",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <Header title="Journeys" />

      <main className="px-6 py-6 max-w-md mx-auto">
        {/* Filter Section */}
        <section className="mb-8">
          <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
            Filter By
          </h3>
          
          {/* Region Filters */}
          <div className="mb-3">
            <p className="text-xs text-neutral-500 mb-2">Region</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button className="px-3 py-1.5 text-xs bg-neutral-900 text-white whitespace-nowrap">
                All Regions
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Punjab
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Sindh
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                KPK
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Balochistan
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Gilgit-Baltistan
              </button>
            </div>
          </div>

          {/* Theme Filters */}
          <div className="mb-3">
            <p className="text-xs text-neutral-500 mb-2">Theme</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Traditional Crafts
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Architecture
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Communities
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Agriculture
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Maritime
              </button>
            </div>
          </div>

          {/* Contributor Filter */}
          <div>
            <p className="text-xs text-neutral-500 mb-2">Contributor</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                All Contributors
              </button>
            </div>
          </div>
        </section>

        {/* Journey Archive */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xs uppercase tracking-wider text-neutral-500">
              {journeys.length} Journeys
            </h3>
            <select className="text-xs text-neutral-600 border border-neutral-300 px-2 py-1">
              <option>Latest First</option>
              <option>Oldest First</option>
              <option>By Region</option>
            </select>
          </div>

          <div className="space-y-5">
            {journeys.map((journey) => (
              <article key={journey.id} className="bg-white border border-neutral-200 p-5 hover:border-neutral-400 transition-colors">
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-neutral-200 mb-4" />

                {/* Journey Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <Link to={`/journeys/${journey.id}`} className="flex-1">
                    <h3 className="text-base text-neutral-900 hover:underline leading-tight">
                      {journey.title}
                    </h3>
                  </Link>
                  {journey.verified && (
                    <Shield className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
                  )}
                </div>

                {/* Purpose */}
                <p className="text-sm text-neutral-700 mb-4 leading-relaxed">
                  {journey.purpose}
                </p>

                {/* Metadata */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-600 pt-3 border-t border-neutral-200">
                  <div className="flex items-center gap-1">
                    <span className="text-neutral-500">Region:</span>
                    <span>{journey.region}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-neutral-500">Contributor:</span>
                    <Link
                      to={`/contributors/${journey.contributorId}`}
                      className="hover:text-neutral-900 underline"
                    >
                      {journey.contributor}
                    </Link>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-neutral-500">Documented:</span>
                    <span>{journey.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}