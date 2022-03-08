import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header( { placeholder}) {
  const [searchInput, setSearchInput] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header
      className="sticky top-0 grid grid-cols-3 bg-white p-5 shadow-md items-center z-50 md:px-5 lg:px-10
    "
    >
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative h-8 w-28 cursor-pointer"
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          layout="fill"
          objectFit="container"
        />
      </div>

      {/* middle */}
      <div className="flex items-center rounded-full px-3 py-2 md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow
           outline-none bg-transparent text-sm"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon
          className="h-8 bg-red-400 rounded-full p-2 text-white cursor-pointer hidden md:inline-flex "
          onClick={search}
        />
      </div>

      {/* right */}
      <div className="flex items-center justify-end md:justify-evenly lg:justify-end space-x-2 lg:space-x-4 text-gray-500 ">
        <p
          className="cursor-pointer hidden md:inline md:pl-4 font-semibold
        "
        >
          Become a host
        </p>
        <GlobeAltIcon className="cursor-pointer h-6 hidden sm:inline" />
        <div className="flex items-center space-x-2 sm:border-2 rounded-full p-2 ">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserIcon className="h-6 cursor-pointer hidden sm:block" />
        </div>
      </div>

      {/* react date picker */}
      {searchInput && (
        <div className=" col-span-3 mx-auto flex flex-col mt-6">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={(e) => {
              handleSelect(e);
            }}
          />
          <div className="flex justify-around mx-4 border-b-2 pb-2 mb-2">
            <h2 className="font-semibold text-lg flex-grow">No. of Guests</h2>
            <div className="flex justify-end items-center">
              <UsersIcon className="h-5" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                min="1"
                className="w-12 h-5 pl-2 text-red-400 outline-none"
                type="number"
              />
            </div>
          </div>
          <div className="flex justify-around gap-x-2">
            <button
              onClick={resetInput}
              className=" flex-grow py-1 text-gray-500 border-2 rounded-2xl hover:shadow-sm hover:bg-gray-100 active:scale-95 transition duration-100 ease-outout
            "
            >
              Cancel
            </button>
            <button
              className="flex-grow py-1 text-red-500 border-2 rounded-2xl hover:shadow-sm hover:bg-gray-100 active:scale-95 transition duration-100 ease-outout"
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
