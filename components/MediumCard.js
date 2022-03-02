import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
    return (
      <div className="cursor-pointer rounded-xl hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-80 w-80">
          <Image
            className="rounded-xl"
            src={img}
            alt=""
            layout="fill"
            objectFit="container"
          />
        </div>

        <h3 className="text-2xl mt-6 sm:mt-4">{title}</h3>
      </div>
    );
}

export default MediumCard;
