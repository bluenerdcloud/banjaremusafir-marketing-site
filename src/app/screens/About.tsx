import { Link } from "react-router";
import { Header } from "../components/Header";

export function About() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <Header title="About Banjare Musafir" />

      <main className="px-6 py-6 max-w-md mx-auto">
        {/* Introduction */}
        <section className="mb-10">
          <p className="text-base text-neutral-700 leading-relaxed mb-4">
            Banjare Musafir is a discovery-led travel and shopping project focused on exploring 
            Pakistan through its markets, shops, food, events, and everyday places.
          </p>
          <p className="text-base text-neutral-700 leading-relaxed mb-4">
            The goal is simple: to be your eyes and ears on the ground.
          </p>
          <p className="text-base text-neutral-700 leading-relaxed">
            We visit locations ourselves, walk through markets, talk to shopkeepers, eat the food, 
            and experience the atmosphere so you can get a clearer sense of what's worth your time 
            and attention before you travel or shop.
          </p>
        </section>

        {/* What We Explore */}
        <section className="mb-10">
          <h2 className="text-base text-neutral-900 mb-4">
            What We Explore
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            Banjare Musafir covers:
          </p>
          <ul className="space-y-2 text-sm text-neutral-700 mb-4">
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Local shops and wholesale markets</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Food spots and street food</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Travel destinations and hidden gems</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Cultural events and everyday city life</span>
            </li>
          </ul>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Some places are well-known. Others are easy to miss unless someone takes the time to look.
          </p>
        </section>

        {/* How We Do It */}
        <section className="mb-10">
          <h2 className="text-base text-neutral-900 mb-4">
            How We Do It
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            Every place featured on Banjare Musafir is visited in person.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed mb-3">
            We show what we see as honestly as possible.
            <br />
            No scripts. No stock footage. No secondhand recommendations.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Sometimes that means highlighting what stands out.
            <br />
            Sometimes it means pointing out things to keep in mind.
          </p>
        </section>

        {/* What We're Not */}
        <section className="mb-10 p-5 bg-white border border-neutral-300">
          <h2 className="text-base text-neutral-900 mb-4">
            What Banjare Musafir Is Not
          </h2>
          <ul className="space-y-2.5 text-sm text-neutral-700 mb-4">
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>We are not an online store</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>We are not a booking or payment platform</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>We do not guarantee transactions or purchases</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>We do not promote places we haven't visited</span>
            </li>
          </ul>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Our role is discovery and visibility, not sales.
          </p>
        </section>

        {/* Why This Matters */}
        <section className="mb-10">
          <h2 className="text-base text-neutral-900 mb-4">
            Why This Matters
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            Pakistan has incredible vendors, markets, and places that are hard to evaluate from afar.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            By documenting visits over time, Banjare Musafir aims to:
          </p>
          <ul className="space-y-2 text-sm text-neutral-700 mb-4">
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Build familiarity between customers and vendors</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Help vendors gain recognition beyond foot traffic</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Create a growing record of places that have been explored firsthand</span>
            </li>
          </ul>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Over time, this becomes more than individual videos.
            <br />
            It becomes a reference people can return to.
          </p>
        </section>

        {/* Looking Ahead */}
        <section className="mb-8 p-5 bg-neutral-900 text-white">
          <h2 className="text-base mb-4">
            Looking Ahead
          </h2>
          <p className="text-sm text-neutral-200 leading-relaxed mb-4">
            Banjare Musafir is currently founder-led.
          </p>
          <p className="text-sm text-neutral-200 leading-relaxed mb-3">
            As the project grows, it may include:
          </p>
          <ul className="space-y-2 text-sm text-neutral-200 mb-4">
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Repeat visits to the same places</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Deeper relationships with vendors</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Collaboration with other travelers and creators</span>
            </li>
          </ul>
          <p className="text-sm text-neutral-200 leading-relaxed">
            Any growth will stay grounded in the same principle:
            <br />
            show what's real, firsthand, and without pressure.
          </p>
        </section>

        {/* Footer Link */}
        <section className="text-center">
          <Link
            to="/standards"
            className="inline-block text-sm text-neutral-900 underline hover:no-underline"
          >
            Read How We Visit & Share
          </Link>
        </section>
      </main>
    </div>
  );
}
