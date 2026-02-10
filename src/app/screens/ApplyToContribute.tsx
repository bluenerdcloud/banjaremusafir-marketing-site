import { useState } from "react";
import { Header } from "../components/Header";
import { useNavigate, Link } from "react-router";

export function ApplyToContribute() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert("Thanks for your interest. We've noted your information for future stages.");
    navigate("/");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <Header title="Future Collaborators" showBack onBack={() => navigate(-1)} />

      <main className="px-6 py-6 max-w-md mx-auto">
        {/* Current Status Note */}
        <section className="mb-8 p-5 bg-white border-2 border-neutral-900">
          <h2 className="text-base text-neutral-900 mb-3">
            Right Now, Banjare Musafir Is Founder-Led
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-3">
            This form is for future collaborators. We're not actively recruiting contributors 
            at this stage of the project.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            If you're interested in creating visit content down the road, you can leave your 
            information here. We'll reach out when we're ready to expand.
          </p>
        </section>

        {/* What We're Looking For (Eventually) */}
        <section className="mb-8">
          <h2 className="text-base text-neutral-900 mb-4">
            What We're Looking For (Eventually)
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-3">
            When we do bring on contributors, we're looking for people who can visit shops, 
            markets, and locations firsthand and document what they see without promotional spin.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            This isn't influencer work or travel blogging. It's straightforward documentation 
            of places across Pakistan—showing what's actually there, not what sounds impressive.
          </p>
        </section>

        {/* Simple Interest Form */}
        <section className="mb-8">
          <h2 className="text-base text-neutral-900 mb-1">
            Leave Your Information
          </h2>
          <p className="text-xs text-neutral-600 mb-6">
            Optional. Just lets us know you're interested.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-neutral-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-neutral-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm text-neutral-700 mb-2">
                Where You're Based
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, Province"
                className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm text-neutral-700 mb-2">
                What Interests You About This (Optional)
              </label>
              <textarea
                id="interest"
                name="interest"
                rows={5}
                value={formData.interest}
                onChange={handleChange}
                placeholder="Brief note about what kind of places you'd want to visit and document..."
                className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-500 resize-none text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              Submit for Future Reference
            </button>
          </form>
        </section>

        {/* Context Footer */}
        <section className="text-xs text-neutral-600 leading-relaxed p-4 bg-neutral-100">
          <p className="mb-3">
            Submitting this form doesn't start any application process. It just lets us know 
            you might be interested when we're ready to expand beyond the founder's documentation.
          </p>
          <p>
            If you want to understand how the platform works, read{" "}
            <Link to="/standards" className="underline text-neutral-900 hover:no-underline">
              How We Visit & Share
            </Link>.
          </p>
        </section>
      </main>
    </div>
  );
}