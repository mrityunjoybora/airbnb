import Image from 'next/image'
import React from 'react'

function SmallCard({img, location, distance}) {
  return (
    <div className="flex items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out space-x-4">
      {/* left */}
      <div className="relative w-16 h-16">
        <Image
          className="rounded-lg"
          src={img}
          alt=""
          layout="fill"
          objectFit="container"
        />
      </div>

      {/* right */}
      <div className="">
        <h2 className="">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard