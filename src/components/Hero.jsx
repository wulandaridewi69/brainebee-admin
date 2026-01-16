// import Image from "next/image";
// import Link from "next/link";

// import Poster from "@/../public/assets/hero.png";
// import Button from '@/components/ui/Button';

// const Hero = () => {
//   return (
//     <section className="w-full bg-gradient-to-b from-sky-100 to-white py-24">
//       <Link href="/products">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

//         <div className="w-full flex justify-center">
//           <Image
//             src={Poster}
//             alt="Brainebee"
//             width={900}
//             height={400}
//             className="object-contain drop-shadow-lg"
//             priority
//           />
//         </div>

//         <h1 className="text-3xl md:text-4xl font-bold mt-6 text-gray-800">
//           Create, Manage & Inspire Kids Learning
//         </h1>

//         <p className="text-gray-500 mt-3 max-w-2xl text-lg">
//           Manage your worksheets, poster, coloring, Loadings, and icons easily in one dashboard.
//           Keep your Brainebee content fresh and engaging!
//         </p>

//         {/* <Button label="Create" type="create" className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full shadow">
//          Create New Product      
//         </Button> */}
//       </div>
//       </Link>
      
//     </section>
//   )
// }

// export default Hero;

"use client";

import { motion } from "framer-motion"; // Impor Framer Motion
import Image from "next/image";
import Link from "next/link";

import Poster from "@/../public/assets/hero.png";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-sky-100 to-white py-24 overflow-hidden">
      <Link href="/products">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          
          {/* Efek Lebah Terbang/Melayang pada Poster */}
          <motion.div 
            className="w-full flex justify-center"
            animate={{ 
              y: [0, -15, 0], // Naik turun
              rotate: [0, 1, -1, 0] // Sedikit miring tipis
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Image
              src={Poster}
              alt="Brainebee"
              width={900}
              height={400}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Animasi Teks Muncul dari Bawah */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mt-10 text-gray-800 tracking-tight">
              Create, Manage & Inspire <br className="hidden md:block" /> 
              <span className="text-sky-500">Kids Learning</span>
            </h1>

            <p className="text-gray-500 mt-4 max-w-2xl text-lg leading-relaxed">
              Manage your worksheets, poster, coloring, and icons easily in one dashboard.
              Keep your <span className="font-semibold text-yellow-500">Brainebee</span> content fresh and engaging!
            </p>
          </motion.div>

          {/* Tambahan Dekorasi Elemen Kecil (Opsional: Motif Lebah Kecil) */}
          <motion.div 
            className="absolute top-40 left-[15%] opacity-20 hidden lg:block"
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            🐝
          </motion.div>
          <motion.div 
            className="absolute top-60 right-[15%] opacity-20 hidden lg:block"
            animate={{ x: [0, -30, 0], y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            🐝
          </motion.div>

        </div>
      </Link>
    </section>
  );
};

export default Hero;