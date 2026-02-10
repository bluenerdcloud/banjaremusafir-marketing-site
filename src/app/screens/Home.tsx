import { Link } from "react-router";
import { Header } from "../components/Header";

export function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <Header />

      <main className="px-6 py-8 max-w-md mx-auto">
        {/* Hero Section */}
        <section className="mb-8">
          <h2 className="text-2xl mb-4 leading-tight text-neutral-900">
            Explore Pakistan through shopping, food, travel, and hidden gems.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            We visit shops, markets, and locations firsthand so you can make better choices before 
            you spend your time or money.
          </p>
        </section>

        {/* CTA Buttons */}
        <section className="mb-12 space-y-3">
          <Link
            to="/journeys"
            className="block w-full py-4 px-6 bg-neutral-900 text-white text-center hover:bg-neutral-800 transition-colors"
          >
            Watch Latest Visits
          </Link>
          <Link
            to="/journeys"
            className="block w-full py-4 px-6 border border-neutral-300 text-neutral-900 text-center hover:bg-neutral-100 transition-colors"
          >
            Explore by City
          </Link>
        </section>

        {/* Recent Journeys Preview */}
        <section className="mb-12">
          <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-5">
            Recent Visits
          </h3>

          <div className="space-y-5">
            <article className="border-l-2 border-neutral-300 pl-4 py-1">
              <Link to="/journeys/1">
                <h4 className="mb-2 text-base text-neutral-900 hover:underline">
                  Through the Valleys of Hunza
                </h4>
              </Link>
              <div className="space-y-0.5 text-sm text-neutral-600">
                <p>Gilgit-Baltistan</p>
                <Link to="/contributors/1" className="hover:text-neutral-900">
                  By Ayesha Malik
                </Link>
                <p className="text-xs text-neutral-500">January 28, 2026</p>
              </div>
            </article>

            <article className="border-l-2 border-neutral-300 pl-4 py-1">
              <Link to="/journeys/2">
                <h4 className="mb-2 text-base text-neutral-900 hover:underline">
                  Desert Nights in Cholistan
                </h4>
              </Link>
              <div className="space-y-0.5 text-sm text-neutral-600">
                <p>Punjab</p>
                <Link to="/contributors/2" className="hover:text-neutral-900">
                  By Hassan Raza
                </Link>
                <p className="text-xs text-neutral-500">January 22, 2026</p>
              </div>
            </article>
          </div>
        </section>

        {/* Footer Links */}
        <footer className="pt-8 border-t border-neutral-200">
          <nav>
            <ul className="flex justify-center gap-8 text-sm text-neutral-600">
              <li>
                <Link to="/about" className="hover:text-neutral-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/standards" className="hover:text-neutral-900 transition-colors">
                  Standards
                </Link>
              </li>
              <li>
                <Link to="/contributors" className="hover:text-neutral-900 transition-colors">
                  Contributors
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  );
}