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
          <div className="w-20 h-20 bg-neutral-300 mb-4" />
          
          <div className="mb-3">
            <h1 className="text-xl mb-1 text-neutral-900">Ibrahim Shah</h1>
            <p className="text-sm text-neutral-600">Karimabad, Gilgit-Baltistan</p>
          </div>

          {/* Status Label */}
          <div className="inline-block px-3 py-1 text-xs border border-neutral-400 text-neutral-700 bg-white">
            Verified
          </div>
        </section>

        {/* Biography */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            Biography
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            Three generations of woodworking tradition. Specializes in structural timber work and 
            decorative carving techniques specific to mountain architecture. Workshop located in the 
            historic quarter of Karimabad, where timber construction methods have adapted to seismic 
            activity and extreme weather conditions over centuries.
          </p>
        </section>

        {/* Crafts or Work Associated */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Crafts or Work Associated
          </h2>
          <div className="space-y-3">
            <div className="p-4 bg-white border border-neutral-200">
              <h3 className="text-sm text-neutral-900 mb-2">
                Structural Timber Joinery
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Traditional joinery methods for earthquake-resistant construction. Techniques passed 
                through apprenticeship and direct observation over multiple years.
              </p>
            </div>

            <div className="p-4 bg-white border border-neutral-200">
              <h3 className="text-sm text-neutral-900 mb-2">
                Decorative Wood Carving
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Geometric and floral patterns specific to regional architectural tradition. Carved 
                elements serve both structural and aesthetic functions in building design.
              </p>
            </div>
          </div>
        </section>

        {/* Where They Appear */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Where They Appear
          </h2>
          <div className="space-y-3">
            <Link to="/journeys/1">
              <article className="bg-white border border-neutral-200 p-4 hover:border-neutral-400 transition-colors">
                <h4 className="text-sm text-neutral-900 mb-2">
                  Through the Valleys of Hunza
                </h4>
                <div className="text-xs text-neutral-600 space-y-1">
                  <p>Gilgit-Baltistan</p>
                  <p>Documented by Ayesha Malik</p>
                  <p className="text-neutral-500">January 15–28, 2026</p>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* How We Know Them */}
        <section className="mb-8 p-5 bg-white border border-neutral-200">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            How We Know Them
          </h2>
          <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>
              This profile was created through in-person documentation during a verified journey to 
              Karimabad in January 2026. Workshop location confirmed, craft methods observed and documented.
            </p>
            <p>
              Community references obtained from local residents and fellow craftspeople. Work history 
              and family lineage verified through multiple sources.
            </p>
            <p className="text-xs text-neutral-600 pt-2 border-t border-neutral-200">
              Profile created: January 28, 2026<br />
              Last updated: January 28, 2026
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
            Contact Information
          </h2>
          <div className="text-sm text-neutral-700 leading-relaxed space-y-2">
            <p>Workshop visits by appointment</p>
            <p className="text-xs text-neutral-600">
              Direct contact information available only through verified journey contributors 
              who have documented relationships with this individual.
            </p>
          </div>
        </section>

        {/* Standards Note */}
        <section className="text-xs text-neutral-600 leading-relaxed p-4 bg-neutral-100">
          <p>
            All vendor and artisan profiles follow our verification standards. Information is 
            maintained with consent and updated as needed.
            <Link to="/standards" className="underline ml-1 text-neutral-900 hover:no-underline">
              Read our guidelines
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}