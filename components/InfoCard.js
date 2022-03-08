import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) {
  return (
    <div className="flex gap-x-6 cursor-pointer hover:shadow-md px-2 rounded-lg transition duration-200 ease-out hover:opacity-80 py-6 border-b first:border-t">
      <div className="relative h-28 w-40 md:h-52 md:w-80 flex-none ">
        <Image
          className="rounded-xl"
          src={img}
          alt=""
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between pb-2 sm:pb-1">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <div className="flex-grow">
          <p className="text-sm pt-2  text-gray-500">{description}</p>
        </div>
        {/* <p></p> */}
        <div className="flex justify-between items-end pt-5">
          <div className="flex gap-x-2 items-center">
            <StarIcon className="h-5 text-red-400" />
            <p>{star}</p>
          </div>
          <div>
            <p className="text-base lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>

        {/* <div><p>{price}</p></div> */}
        {/* <p className="">{total}</p> */}
      </div>
    </div>
  );
}

export default InfoCard;
