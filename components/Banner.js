import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[700px] sm:h-[600px] md:h-[500px] lg:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div
        className="absolute top-1/2
      w-full text-center"
      >
        <p className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl px-20">
          Not sure where to go? Perfect.
        </p>
        <button className="mt-4 md:mt-6 border-2 rounded-full px-8  py-4 text-purple-500 font-bold bg-white hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;