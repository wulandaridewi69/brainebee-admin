const CallToAction = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Create Something Meaningful Together
        </h2>

        <p className="text-zinc-600 mb-8">
          From illustrations to educational worksheets and digital solutions,
          we’re ready to help bring your ideas to life.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 rounded-xl bg-black text-white">
            Start a Project
          </button>

          <button className="px-6 py-3 rounded-xl border border-black">
            Browse Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
