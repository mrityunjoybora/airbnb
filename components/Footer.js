import React from "react";

function Footer() {
  return (
    <footer
      className="
      bg-gray-100"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-10 px-8 sm:px-16 max-w-7xl mx-auto py-10 text-gray-600">
        <div
          className="text-sm text-gray-800 space-y-4
          "
        >
          <h5 className="font-bold">Support</h5>
          <p>Help Centre</p>
          <p>Safety information</p>
          <p>Cancellation options</p>
          <p>Our COVID-19 Response</p>
          <p>Supporting people with disabilities</p>
          <p>Report a neighbourhood concern</p>
        </div>

        <div
          className="text-sm text-gray-800 space-y-4
          "
        >
          <h5 className="font-bold">Community</h5>
          <p>Airbnb.org: disaster relief housing</p>
          <p>Support Afghan refugees</p>
          <p>Combating discrimination</p>
        </div>

        <div
          className="text-sm text-gray-800 space-y-4
          "
        >
          <h5 className="font-bold">Hosting</h5>
          <p>Try hosting</p>
          <p>AirCover: protection for Hosts</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
        </div>

        <div
          className="text-sm text-gray-800 space-y-4
          "
        >
          <h5 className="font-bold">About</h5>
          <p>Newsroom</p>
          <p>Learn about new features</p>
          <p>Letter from our founders</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Airbnb Luxe</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
