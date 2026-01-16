const items = [
    {
        icon: "🧒",
        title: "Kids Learning",
        desc: "Worksheets, posters, and printable materials designed to help children learn with joy.",
        cta: "Browse Worksheets",
    },
    {
        icon: "🎨",
        title: "Digital Assets",
        desc: "Icons and illustrations for creative projects, branding, and education.",
        cta: "View Assets",
    },
    {
        icon: "🧵",
        title: "Handcrafted Art",
        desc: "Handmade creations including weaving, embroidery, and traditional crafts.",
        cta: "See Crafts",
    },
    {
        icon: "💻",
        title: "Web & Design Services",
        desc: "Website, landing page, and portfolio design for individuals and small businesses.",
        cta: "View Services",
    },
];

const WhatWeCreate = () => {
    return (
<section className="py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold">
  What We Create
</h2>

                    <p className="text-gray-500 mt-3">
                        Creative products & services made with love and purpose
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="
    group
    rounded-2xl border border-gray-100 p-8
    bg-white
    hover:shadow-xl hover:-translate-y-1
    transition-all duration-300
  "
                        >

                            <div className="text-3xl mb-4 group-hover:scale-110 transition">
  {item.icon}
</div>


                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 mb-6">
                                {item.desc}
                            </p>

                            <button className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
  {item.cta}
  <span>→</span>
</button>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhatWeCreate;
