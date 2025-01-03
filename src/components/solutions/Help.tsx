// components/Help.tsx
import React from "react";

interface HelpCardProps {
  title: string;
  description: string;
}

const HelpCard: React.FC<HelpCardProps> = ({ title, description }) => {
  return (
    <div className="p-6 bg-accent shadow-md hover:shadow-lg transition-shadow duration-300 rounded-tl-lg rounded-br-lg">
      <h3 className="text-blue-800 font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Help: React.FC = () => {
  const helpItems = [
    {
      title: "Professional consulting for the entire cycle",
      description:
        "In addition to products, we offer customers comprehensive engineering and consulting services guaranteed to be safe and superior in quality.",
    },
    {
      title: "Market studies",
      description:
        "We work with benchmarks to generate comparative information on mining operations around the world. This brings perspective to what we do for customers.",
    },
    {
      title: "Engineering and design",
      description:
        "Our proprietary products are known for their superior quality and how well they can be adapted to fit all types of customer equipment.",
    },
    {
      title: "Digital technology",
      description:
        "In our ME Digital Lab, we run predictive models, performance evaluations and data analysis aimed at offering customers the best possible solutions.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="px-4 md:px-20 container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800">How can we help?</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            ME FIT Grinding provides customized solutions according to unique
            requirements, customer production strategies, and productivity
            goals. We integrate analysis of available operational data with data
            generated through in-house simulations and more than 100 years of
            experience in parts design and manufacturing. We validate our
            performance through controls and measures to monitor our solution’s
            impact on our client’s key performance indicators: productivity,
            reliability, availability, safety, efficiency, and energy
            consumption. Our ME FIT processes ensure that we constantly add
            value to our customers’ mill operations through liner design,
            quality, and material improvements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {helpItems.map((item, index) => (
            <HelpCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Help;
