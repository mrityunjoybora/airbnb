import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/router";
import { format } from "date-fns";

function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd-MMMM-yy");
  const formattedEndDate = format(new Date(endDate), "dd-MMMM-yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex-grow pt-14 px-6">
        <section>
          <p className="text-sm">
            300+ stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="font-semibold text-3xl mt-2 mb-4">
            Stays in <span className="capitalize">{location}</span>
          </h1>
          <div className="hidden md:flex text-gray-800 whitespace-nowrap mb-4 gap-x-4 ">
            <p className=" button">Cancellation Flexibility</p>
            <p className="button ">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div>
            {searchResults.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
                long={item.long}
                lat={item.lat}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() { 
  const res = await fetch("https://links.papareact.com/isz");
  const searchResults = await res.json();

  return {
    props: {
      searchResults,
    },
  };
}
