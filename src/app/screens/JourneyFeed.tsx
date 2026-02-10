import { Link } from "react-router";
import { Header } from "../components/Header";

export function JourneyFeed() {
  const visits = [
    {
      id: 1,
      title: "Karim's Carpet Workshop",
      city: "Lahore",
      category: "Shopping",
      type: "Shop",
      visitType: "First visit",
      contributor: "Ayesha Malik",
      contributorId: 1,
      date: "January 28, 2026",
    },
    {
      id: 2,
      title: "Sunday Food Market at Anarkali",
      city: "Lahore",
      category: "Food",
      type: "Market",
      visitType: "Revisit",
      contributor: "Hassan Raza",
      contributorId: 2,
      date: "January 22, 2026",
    },
    {
      id: 3,
      title: "Monal Restaurant Viewpoint",
      city: "Islamabad",
      category: "Food",
      type: "Food",
      visitType: "First visit",
      contributor: "Fatima Khan",
      contributorId: 3,
      date: "January 15, 2026",
    },
    {
      id: 4,
      title: "Fairy Meadows Trek",
      city: "Gilgit",
      category: "Travel",
      type: "Travel",
      visitType: "First visit",
      contributor: "Ali Ahmed",
      contributorId: 4,
      date: "January 10, 2026",
    },
    {
      id: 5,
      title: "Empress Market Textile Section",
      city: "Karachi",
      category: "Shopping",
      type: "Market",
      visitType: "Revisit",
      contributor: "Hassan Raza",
      contributorId: 2,
      date: "January 5, 2026",
    },
    {
      id: 6,
      title: "Basant Kite Festival",
      city: "Lahore",
      category: "Event",
      type: "Event",
      visitType: "First visit",
      contributor: "Ayesha Malik",
      contributorId: 1,
      date: "December 28, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <Header title="Visits & Vlogs" />

      <main className="px-6 py-6 max-w-md mx-auto">
        {/* Filter Section */}
        <section className="mb-8">
          <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
            Filter By
          </h3>
          
          {/* City Filters */}
          <div className="mb-3">
            <p className="text-xs text-neutral-500 mb-2">City</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button className="px-3 py-1.5 text-xs bg-neutral-900 text-white whitespace-nowrap">
                All Cities
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Lahore
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Karachi
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Islamabad
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Gilgit
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Peshawar
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-3">
            <p className="text-xs text-neutral-500 mb-2">Category</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Shopping
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Food
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Travel
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Event
              </button>
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <p className="text-xs text-neutral-500 mb-2">Type</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Shop
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Market
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Food
              </button>
              <button className="px-3 py-1.5 text-xs border border-neutral-300 text-neutral-600 whitespace-nowrap hover:bg-neutral-100">
                Travel
              </button>
            </div>
          </div>
        </section>

        {/* Visits Log */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xs uppercase tracking-wider text-neutral-500">
              {visits.length} Visits
            </h3>
            <select className="text-xs text-neutral-600 border border-neutral-300 px-2 py-1">
              <option>Latest First</option>
              <option>Oldest First</option>
              <option>By City</option>
            </select>
          </div>

          <div className="space-y-5">
            {visits.map((visit) => (
              <article key={visit.id} className="bg-white border border-neutral-200 p-5 hover:border-neutral-400 transition-colors">
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-neutral-200 mb-4" />

                {/* Visit Header */}
                <Link to={`/journeys/${visit.id}`}>
                  <h3 className="text-base text-neutral-900 hover:underline leading-tight mb-2">
                    {visit.title}
                  </h3>
                </Link>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-600 mb-3">
                  <span className="text-neutral-900">{visit.city}</span>
                  <span className="text-neutral-400">•</span>
                  <span>{visit.category}</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-neutral-500 italic">{visit.visitType}</span>
                </div>

                {/* Contributor */}
                <div className="flex items-center justify-between text-xs text-neutral-600 pt-3 border-t border-neutral-200">
                  <Link
                    to={`/contributors/${visit.contributorId}`}
                    className="hover:text-neutral-900 underline"
                  >
                    {visit.contributor}
                  </Link>
                  <span className="text-neutral-500">{visit.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}