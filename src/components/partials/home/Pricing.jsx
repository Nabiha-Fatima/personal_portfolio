import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      tag: "Perfect for small fixes",
      price: "$29",
      period: "per small task",
      features: [
        "Single page update or bug fix",
        "Responsive layout tweaks",
        "Delivery within 2–3 days",
        "Basic support via email",
      ],
      highlight: false,
    },
    {
      name: "Standard",
      tag: "Best for portfolio sections",
      price: "$79",
      period: "per small project",
      features: [
        "1–3 pages (e.g. Home, About, Contact)",
        "Modern responsive UI with animations",
        "Code with React / Tailwind",
        "Delivery within 5–7 days",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      tag: "For full website builds",
      price: "Custom",
      period: "per full project",
      features: [
        "Complete multi‑page website",
        "Advanced UI, forms & integrations",
        "Clean, responsive frontend implementation",
        "Ongoing support & minor updates",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="bg-secondary/95 py-16 sm:py-20 md:py-24">
      <div className="custom_container px-5 sm:px-6 md:px-0">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Pricing
          </h2>
          <p className="font-roboto text-muted max-w-2xl mx-auto text-sm sm:text-base">
            Flexible packages for different project sizes. Prices are
            indicative – final quote depends on exact requirements.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col w-full max-w-sm mx-auto rounded-2xl border bg-secondary/80 backdrop-blur-sm px-4 py-6 sm:px-6 sm:py-8 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/25 ${
                plan.highlight
                  ? "border-primary/50 ring-2 ring-primary/40"
                  : "border-white/5"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-primary text-secondary text-xs font-roboto font-medium shadow-lg">
                  Most Popular
                </span>
              )}

              <div className="mb-5">
                <h3 className="font-poppins text-xl sm:text-2xl font-semibold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="font-roboto text-muted text-sm">{plan.tag}</p>
              </div>

              <div className="mb-6">
                <span className="font-poppins text-3xl sm:text-4xl font-bold text-primary">
                  {plan.price}
                </span>
                <span className="font-roboto text-muted text-xs sm:text-sm ml-2">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6 text-sm sm:text-base font-roboto text-muted">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contacts"
                className={`mt-auto inline-flex items-center justify-center w-full rounded-lg px-4 py-2.5 text-sm sm:text-base font-poppins font-medium transition-colors ${
                  plan.highlight
                    ? "bg-primary text-secondary hover:bg-primary/90"
                    : "border border-primary/40 text-primary hover:bg-primary/10"
                }`}
              >
                Contact for this package
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

