
const plantInterests = [
  { id: "indoor", value: "1", label: "Indoor & Houseplants" },
  { id: "outdoor", value: "2", label: "Outdoor & Garden Plants" },
  { id: "cacti", value: "4", label: "Cacti & Succulents" },
  { id: "flowering", value: "8", label: "Flowering Plants" },
  { id: "care", value: "16", label: "Plant Care & Gardening Tips" },
  { id: "office", value: "32", label: "Office & Corporate Plants" },
]

const mailchimpAction =
  "https://mrdflowers.us22.list-manage.com/subscribe/post?u=b4174de3cc0161075b58dbff2&id=a51dfbf13c&f_id=000adfe1f0"

export default function MailchimpSignup() {
  return (
    <section className="w-full bg-[#f8faf5] py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm md:p-10">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold text-green-700">
              MRD FLOWERS COMMUNITY
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Grow With Us 🌿
            </h2>
            <p className="mt-3 text-gray-600">
              Get practical plant-care tips, new arrivals,
              gardening inspiration and occasional offers
              delivered to your inbox.
            </p>
          </div>

          <form
            action={mailchimpAction}
            method="post"
            target="_blank"
            className="space-y-5"
          >
            <div>
              <label htmlFor="mc-first-name" className="mb-2 block text-sm font-medium">
                First name
              </label>
              <input
                id="mc-first-name"
                type="text"
                name="FNAME"
                placeholder="Your first name"
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>

            <div>
              <label htmlFor="mc-email" className="mb-2 block text-sm font-medium">
                Email address *
              </label>
              <input
                id="mc-email"
                type="email"
                name="EMAIL"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold">
                What plants interest you?
              </legend>

              <div className="grid gap-3 sm:grid-cols-2">
                {plantInterests.map((interest) => (
                  <label
                    key={interest.id}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      name={`group[393][${interest.value}]`}
                      value={interest.value}
                      className="accent-green-600"
                    />
                    {interest.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                required
                className="mt-1 accent-green-600"
              />
              <span>
                I agree to receive plant-care tips, new arrivals
                and promotional emails from MRD FLOWERS.
                I can unsubscribe at any time.
              </span>
            </label>

            {/* Mailchimp anti-bot field. Keep this hidden. */}
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              <input
                type="text"
                name="b_b4174de3cc0161075b58dbff2_a51dfbf13c"
                tabIndex={-1}
                defaultValue=""
              />
            </div>

            <button
              type="submit"
              name="subscribe"
              value="Subscribe"
              className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Join Our Growing Community 🌱
            </button>

            <p className="text-center text-xs text-gray-500">
              No spam. Just plant inspiration and useful updates.
              Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
