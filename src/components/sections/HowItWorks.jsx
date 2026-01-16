const HowItWorks = () => {
  const steps = [
    {
      title: "Choose",
      desc: "Browse our products or select a service that fits your needs.",
    },
    {
      title: "Customize",
      desc: "Request customization or tell us your idea.",
    },
    {
      title: "Create",
      desc: "We craft your product with care and creativity.",
    },
    {
      title: "Deliver",
      desc: "Your order is delivered digitally or physically.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-zinc-200 hover:shadow-md transition"
            >
              <div className="text-3xl font-bold text-zinc-300 mb-4">
                {index + 1}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
