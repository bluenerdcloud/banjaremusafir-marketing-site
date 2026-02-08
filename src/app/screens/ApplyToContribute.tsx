import { useState } from "react";
import { Header } from "../components/Header";
import { useNavigate, Link } from "react-router";

export function ApplyToContribute() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    experience: "",
    motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert("Application submitted. We'll review and contact you within 10 business days.");
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
      <Header title="Apply to Contribute" showBack onBack={() => navigate(-1)} />

      <main className="px-6 py-6 max-w-md mx-auto">
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-base text-neutral-900 mb-4">
            Who This Is For
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-3">
            We seek contributors with demonstrated commitment to cultural documentation, research, 
            or community-based work. This is not a platform for travel blogging, influencer content, 
            or tourism promotion.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Ideal contributors have backgrounds in anthropology, documentary practice, journalism, 
            cultural research, or similar fields. Experience working directly with communities is essential.
          </p>
        </section>

        {/* Expectations */}
        <section className="mb-8 p-5 bg-white border border-neutral-200">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            Expectations & Responsibilities
          </h2>
          <div className="space-y-3 text-sm text-neutral-700">
            <div>
              <p className="text-neutral-900 mb-1">Verification Process</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                You will undergo identity verification, background review, and methodology assessment 
                before approval. This process takes time.
              </p>
            </div>
            <div>
              <p className="text-neutral-900 mb-1">Editorial Review</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                All submissions are reviewed for accuracy, cultural sensitivity, and ethical standards. 
                Revisions may be required before publication.
              </p>
            </div>
            <div>
              <p className="text-neutral-900 mb-1">Community Consent</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                You must obtain informed consent from individuals and communities before, during, 
                and after documentation. This is non-negotiable.
              </p>
            </div>
            <div>
              <p className="text-neutral-900 mb-1">No Commercial Agenda</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Content exists to document culture, not to drive sales or promote tourism. 
                Commercial motivations disqualify contributions.
              </p>
            </div>
            <div>
              <p className="text-neutral-900 mb-1">Long-Term Commitment</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We value contributors who commit to ongoing documentation rather than one-time submissions. 
                Depth over volume.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-8">
          <h2 className="text-base text-neutral-900 mb-1">
            Application
          </h2>
          <p className="text-xs text-neutral-600 mb-6">
            All fields are required. Incomplete applications will not be reviewed.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-neutral-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm text-neutral-700 mb-2">
                Current Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="City, Province/Region"
                className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm text-neutral-700 mb-2">
                Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                required
                rows={6}
                value={formData.experience}
                onChange={handleChange}
                placeholder="Describe your background in cultural documentation, research, or community-based work. Include relevant education, professional experience, and previous documentation projects."
                className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-500 resize-none text-sm"
              />
            </div>

            <div>
              <label htmlFor="motivation" className="block text-sm text-neutral-700 mb-2">
                Why You Want to Contribute
              </label>
              <textarea
                id="motivation"
                name="motivation"
                required
                rows={6}
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Explain your motivation for contributing to this platform. What do you hope to document and why does it matter? How will your work benefit the communities you document?"
                className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-500 resize-none text-sm"
              />
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-neutral-100 border border-neutral-300 text-xs text-neutral-700 leading-relaxed">
              <p className="mb-2">
                <span className="text-neutral-900">Applying does not guarantee approval.</span> We review 
                applications carefully and accept only contributors who demonstrate clear commitment to 
                ethical documentation practices.
              </p>
              <p className="mb-3">
                If approved, you will enter a trial period. Full verification is granted only after 
                successful completion of your first published journey.
              </p>
              <p>
                By submitting this application, you agree to undergo identity verification and to uphold 
                our editorial and ethical standards.{" "}
                <Link to="/standards" className="text-neutral-900 underline hover:no-underline">
                  Review standards
                </Link>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </section>

        {/* Additional Information */}
        <section className="text-xs text-neutral-600 leading-relaxed">
          <p className="mb-2">
            <span className="text-neutral-900">Review timeline:</span> Initial review within 10 business days. 
            If your application advances, we will contact you to schedule an interview.
          </p>
          <p>
            <span className="text-neutral-900">Questions?</span> Read our{" "}
            <Link to="/standards" className="underline text-neutral-900 hover:no-underline">
              complete standards documentation
            </Link>{" "}
            before applying.
          </p>
        </section>
      </main>
    </div>
  );
}