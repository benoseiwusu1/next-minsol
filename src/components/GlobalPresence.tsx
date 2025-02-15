import React from "react";
import Clients from "./Clients";
import RssFeed from "./RssFeed";

const GlobalPresence: React.FC = () => {
  return (
    <section className="bg-blu text-white py-12">
      <div className="container mx-auto px-4 md:px-20">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 leading-tight">
            We are present in more than 5 countries in the sub-region
          </h2>
        </div>
      </div>
      <RssFeed />
      <Clients />
    </section>
  );
};

export default GlobalPresence;
