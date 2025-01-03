// components/Commitment.tsx
import React from "react";

const Commitment: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-28 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            ME Elecmetal's Commitment to Sustainability
          </h1>
          <p className="text-grey mb-4">
            It is part of our history, and from the beginning, it has been part
            of the essence of our work. Thus, we strive to highlight this
            approach and to be recognized as a strategic partner that adds value
            to mining processes and other target markets.
          </p>
          <p className="text-grey mb-4">
            In order to achieve this, we listen to our key stakeholders:
            collaborators, suppliers, partners, clients, community, and
            shareholders—looking to co-create, and deliver comprehensive
            solutions that respond to the needs of the sectors we serve,
            minimizing the negative impacts that our business generates,
            increasing the positive ones, and always creating value.
          </p>
          <p className="text-grey mb-4">
            Based on this premise, our Sustainability Strategy is built on four
            pillars that aim to anticipate the environmental challenge in all
            the areas where we are present. These are:
          </p>
          <ul className="list-disc list-inside text-grey">
            <li>ME ELECMETAL SIGNATURE</li>
            <li>OUR PEOPLE</li>
            <li>THE ENVIRONMENT</li>
            <li>VALUE CREATION CONNECTIONS</li>
          </ul>
        </div>

        {/* Right Graphic */}
        <div className="md:w-1/2 relative">
          <img
            src="/images/commit.png" // Replace with the puzzle graphic image URL
            alt="Sustainability Graphic"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Commitment;
