import Image from "next/image";
import Link from "next/link";

import Poster from "@/../public/assets/hero.png";
import Button from '@/components/ui/Button';

const Hero = () => {
    return (
         <section className="w-full bg-gradient-to-b from-sky-100 to-white py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        <div className="w-full flex justify-center">
          <Image
            src={Poster}
            alt="Brainebee"
            width={900}
            height={400}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mt-6 text-gray-800">
          Create, Manage & Inspire Kids Learning
        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl text-lg">
          Manage your worksheets, poster, coloring, Loadings, and icons easily in one dashboard.
          Keep your Brainebee content fresh and engaging!
        </p>

        {/* <Button label="Create" type="create" className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full shadow">
         Create New Product      
        </Button> */}
      </div>
    </section>
    )
}

export default Hero;