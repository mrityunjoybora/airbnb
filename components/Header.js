import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header
      className="sticky top-0 grid grid-cols-3 bg-white p-5 shadow-md items-center z-50 md:px-5 lg:px-10
    "
    >
      {/* left */}
      <div className="relative h-8 w-28 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="container"
        />
      </div>

      {/* middle */}
      <div className="flex items-center rounded-full px-4 py-2 md:border-2 md:shadow-sm">
        <input
          className="flex-grow
           outline-none bg-transparent text-sm"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="h-8 bg-red-400 rounded-full p-2 text-white cursor-pointer hidden md:inline-flex " />
      </div>

      {/* right */}
      <div className="flex items-center justify-end md:justify-evenly lg:justify-end space-x-2 lg:space-x-4 text-gray-500">
        <p
          className="cursor-pointer hidden md:inline md:pl-4
        "
        >
          Become a host
        </p>
        <GlobeAltIcon className="cursor-pointer h-6" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
