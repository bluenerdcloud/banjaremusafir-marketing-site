import { Link, useNavigate } from "react-router";
import { Header } from "../components/Header";

export function PersonProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <Header showBack onBack={() => navigate(-1)} />

      <main className="px-6 py-6 max-w-md mx-auto">
        {/* Profile Header */}
        <section className="mb-8">
          <div className="w-full h-48 bg-neutral-300 mb-4" />
          
          <div className="mb-3">
            <h1 className="text-xl mb-1 text-neutral-900">Karim's Carpet Workshop</h1>
            <p className="text-sm text-neutral-600">Anarkali Bazaar, Lahore</p>
          </div>

          {/* Category and Visit Status */}
          <div className="flex gap-2 mb-3">
            <div className="inline-block px-3 py-1 text-xs border border-neutral-400 text-neutral-700 bg-white">
              Retail • Craft
            </div>
            <div className="inline-block px-3 py-1 text-xs border border-neutral-400 text-neutral-700 bg-white">
              Revisited
            </div>
          </div>
        </section>

        {/* What They Sell */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            What They Sell
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            Hand-knotted carpets and rugs made on-site using traditional methods. Works range from 
            standard sizes to custom orders in various patterns including geometric, floral, and 
            regional designs. Natural and colorfast dyes available depending on client preference. 
            Wool sourced from verified suppliers with quality standards clearly explained.
          </p>
        </section>

        {/* Why This Shop Stood Out */}
        <section className="mb-8 p-5 bg-white border border-neutral-200">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            Why This Shop Stood Out
          </h2>
          <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>
              Three generations of continuous operation in the same location. Active workshop where 
              visitors can observe the entire hand-knotting process from material preparation to 
              finished product.
            </p>
            <p>
              Transparent pricing based on knot density and materials. Owner takes time to explain 
              quality differences and shows examples at various price points without pressure tactics. 
              Realistic timelines provided for custom work.
            </p>
            <p>
              Master weavers working alongside apprentices, demonstrating clear knowledge transfer. 
              Workshop maintained clean and organized. Natural lighting supplemented appropriately. 
              Quality standards visible in finished pieces.
            </p>
          </div>
        </section>

        {/* Seen in These Visits */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Seen in These Visits
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
                <div className="text-xs text-neutral-600 space-y-1">
                  <p>Shop Visit • Lahore</p>
                  <p>Visited by Ayesha Malik</p>
                </div>
              </article>
            </Link>

            <Link to="/journeys/5">
              <article className="bg-white border border-neutral-200 p-4 hover:border-neutral-400 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-sm text-neutral-900">
                    Anarkali Craft District Walkthrough
                  </h4>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">Dec 10, 2025</span>
                </div>
                <div className="text-xs text-neutral-600 space-y-1">
                  <p>Market Walkthrough • Lahore</p>
                  <p>Visited by Hassan Raza</p>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* People Featured */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            People Featured
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white border border-neutral-200">
              <div className="w-12 h-12 bg-neutral-300 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-neutral-900 mb-0.5">Karim Hussain</p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Workshop owner and master weaver
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white border border-neutral-200">
              <div className="w-12 h-12 bg-neutral-300 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-neutral-900 mb-0.5">Naseem Bibi</p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Master weaver specializing in floral patterns
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            Practical Information
          </h2>
          <div className="text-sm text-neutral-700 leading-relaxed space-y-3">
            <div>
              <p className="text-neutral-900 mb-1">Location Access</p>
              <p className="text-xs text-neutral-600">
                Second floor, Anarkali Bazaar. Stairs only, no elevator. Near Anarkali Food Street entrance.
              </p>
            </div>
            <div>
              <p className="text-neutral-900 mb-1">Hours</p>
              <p className="text-xs text-neutral-600">
                10 AM to 7 PM, closed Fridays
              </p>
            </div>
            <div>
              <p className="text-neutral-900 mb-1">Languages</p>
              <p className="text-xs text-neutral-600">
                English, Urdu, Punjabi
              </p>
            </div>
          </div>
        </section>

        {/* How We Documented This Shop */}
        <section className="mb-8 p-5 bg-white border border-neutral-200">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            How We Documented This Shop
          </h2>
          <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>
              First documented during unannounced visit in December 2025 as part of Anarkali craft 
              district walkthrough. Returned in January 2026 for dedicated workshop documentation.
            </p>
            <p>
              Permission obtained from owner and craftspeople before filming. No compensation provided. 
              All individuals featured gave consent to be identified. Quality claims verified through 
              textile specialist consultation.
            </p>
            <p className="text-xs text-neutral-600 pt-2 border-t border-neutral-200">
              Profile created: December 10, 2025<br />
              Last visited: January 28, 2026
            </p>
          </div>
        </section>

        {/* Standards Note */}
        <section className="text-xs text-neutral-600 leading-relaxed p-4 bg-neutral-100">
          <p>
            All shop profiles are documented with consent and follow our verification standards. 
            We do not accept payment for featuring businesses.
            <Link to="/standards" className="underline ml-1 text-neutral-900 hover:no-underline">
              Read our documentation standards
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}