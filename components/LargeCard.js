import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section
      className="relative 
        pt-10 sm:pt-16 cursor-pointer"
    >
      <div
        className="relative h-96 min-w-[300px] 
        "
      >
        <Image
          className="rounded-2xl "
          src={img}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl w-64 mb-4">{title}</h3>
        <p>{description}</p>

        <button className="mt-4 px-4 py-2 rounded-lg border-2 bg-gray-900 hover:bg-gray-800 text-sm text-white transition duration-200">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
