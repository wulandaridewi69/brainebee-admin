"use client";

import Image from "next/image";

const Card = (props) => {

  return (
     <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-sky-200 to-slate-50 shadow-sm hover:shadow-md transition cursor-pointer w-[150px] h-[180px]">
      <div className="w-28 h-28 flex items-center justify-center">
      <Image 
        src={props.image}
        alt={props.title}
        className="max-w-full max-h-full object-contain"
      />
      </div>
      <p className="mt-3 font-semibold tracking-wide text-[#2c3e50]">{props.title}</p>
    </div>

  );
};

export default Card;
