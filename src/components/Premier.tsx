import React from "react";
import PremierCard from "./PremierCard";

const projects = [
  {
    icon: "arcticons:idle-miner",
    title: "Mill Liners",
    subtext: [
      {
        title: "SAG Mill & Ball Mill Liners",
        description:
          "Enhance the performance and longevity of your mills with our high-quality liners",
      },
      {
        title: "Protective Linings",
        description:
          "Protect your equipment with our advanced lining solutions",
      },
      {
        title: "Track Encapsulation Systems",
        description:
          "Expertly designed and manufactured by Polycorp, our encapsulation systems provide superior protection",
      },
    ],
    linkText: "LEARN MORE",
    linkHref: "/contact",
  },
  {
    icon: "ic:sharp-grain",
    title: "Grinding Media",
    subtext: [
      {
        title: "Steel Balls",
        description:
          "Available in diameters of 50mm, 60mm, 80mm, 90mm, 100mm, and 110mm, our steel balls are produced by West Africa Forgings Ltd., Ghana, ensuring durability and performance",
      },
    ],
    linkText: "COMMERCIAL HVAC SYSTEMS",
    linkHref: "/contact",
  },
  {
    icon: "arcticons:audio-video-factory",
    title: "Processing Plant Equipment",
    description:
      "A full suite of processing equipment including pythons, modular systems, inline pressure jigs, leach reactors, spinners, and IPJ-coal separators. Equipment is designed and manufactured by GEKKO and suited for extracting a range of minerals including gold, sulphide gold, silver, coal, polymetallic ores, tin, tantalum, and gemstones.",
    linkText: "COMMERCIAL HVAC SYSTEMS",
    linkHref: "/contact",
  },
];

const Premier: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-auto text-white"
      style={{
        backgroundImage: `url('/images/align1.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center py-20 h-full text-center px-4 md:px-20 container mx-auto">
        <h1 className="text-2xl md:text-3xl max-w-2xl font-bold">
          Premier Solutions for Mineral Processing Needs
        </h1>
        <p className="max-w-2xl text-gray-300">
          At Minsol, we leverage our strategic partnerships with
          industry-leading manufacturers and service providers to deliver
          top-quality products and services across the sub-region. Our extensive
          portfolio is designed to meet the diverse needs of the mining and
          processing industries.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-16">
          {projects.map((service, index) => (
            <PremierCard
              key={index}
              icon={service.icon}
              title={service.title}
              subtext={service.subtext}
              description={service.description}
              linkText={service.linkText}
              linkHref={service.linkHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Premier;
