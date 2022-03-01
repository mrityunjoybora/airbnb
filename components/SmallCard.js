import Image from 'next/image'
import React from 'react'

function SmallCard({img, location, distance}) {
  return (
    <div
      className="border-2
       space-x-4 cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out"
    >
      {/* left */}
      <div className="relative h-44 ">
        <Image
          className=" rounded-t-xl
              "
          src={img}
          layout="fill"
          objectFit="container"
        />
      </div>

      {/* right */}
      <div className="h-44 !ml-4 mt-6">
        <h2 className="font-bold text-3xl">{location}</h2>
        <h3 className="text-gray-500 mt-4 text-xl">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard