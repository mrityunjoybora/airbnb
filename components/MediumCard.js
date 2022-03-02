import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
    return (
      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out hover:bg-gray-100">
        <div className="relative h-80 w-80">
          <Image
            className="rounded-xl"
            src={img}
            alt=""
            layout="fill"
            objectFit="container"
          />
        </div>

        <h3 className="text-2xl mt-3">{title}</h3>
      </div>
    );
}

export default MediumCard;
