import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";

function search() {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd-MMMM-yy");
  const formattedEndDate = format(new Date(endDate), "dd-MMMM-yy");

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default search;
