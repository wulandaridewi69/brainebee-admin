const StatsSection = () => {
  return (
    <section>
    <div className="w-full bg-white border-b border-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 flex justify-around items-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-sky-500">500+</p>
          <p className="text-gray-400 text-sm tracking-tight">Resources</p>
        </div>
        <div className="h-10 w-[1px] bg-gray-200"></div>
        <div className="text-center">
          <p className="text-2xl font-bold text-sky-500">2k+</p>
          <p className="text-gray-400 text-sm tracking-tight">Parents Joined</p>
        </div>
        <div className="h-10 w-[1px] bg-gray-200"></div>
        <div className="text-center">
          <p className="text-2xl font-bold text-sky-500">100%</p>
          <p className="text-gray-400 text-sm tracking-tight">Kid Safe</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default StatsSection;