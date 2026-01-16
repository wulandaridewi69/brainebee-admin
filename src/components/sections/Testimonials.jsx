import Image from "next/image";

const testimonials = [
  {
    name: "Lina Putri",
    feedback: "Worksheets-nya lucu dan mudah dipahami.",
    avatar: "/images/users/user1.jpg",
  },
  {
    name: "Rafi Nugraha",
    feedback: "Ilustrasinya rapi dan sesuai brand.",
    avatar: "/images/users/user2.jpg",
  },
  {
    name: "Maya Sari",
    feedback: "Sangat membantu anak-anak di kelas.",
    avatar: "/images/users/user3.jpg",
  },
  {
    name: "Andi Pratama",
    feedback: "Landing page terlihat profesional.",
    avatar: "/images/users/user4.jpg",
  },
  {
    name: "Nur Aisyah",
    feedback: "Anakku jadi lebih semangat belajar.",
    avatar: "/images/users/user5.jpg",
  },
];

const TestimonialsMarquee = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What People Say
        </h2>
      </div>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-6">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[280px] shrink-0 border rounded-xl p-4 bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-semibold text-sm">
                  {item.name}
                </span>
              </div>

              <p className="text-sm text-zinc-600">
                “{item.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
