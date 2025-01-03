// components/Experience.tsx
import React from "react";
import ExperienceCard from "./ExperienceCard";

// const experiences = [
//   {
//     image: "/images/e1.jpg",
//     title:
//       "ME Elecmetal’s ME PolyLight Design Reduces Wear Rate in SAG Mill Discharge Lifters by 17%",
//     linkText: "More",
//     linkUrl: "#",
//   },
//   {
//     image: "/images/e2.jpg",
//     title:
//       "Valley Forge Ridgeback® bolts improve discharge end tension in SAG mills by 11%",
//     linkText: "More",
//     linkUrl: "#",
//   },
//   {
//     image: "/images/e3.jpg",
//     title:
//       "ME Elecmetal’s Heavy Duty Liner Application Increases 1250 Tower Mill’s Availability by 50%",
//     linkText: "More",
//     linkUrl: "#",
//   },
// ];

const chemicals = [
  {
    image: "/images/ch1.jpg",
    title: "Mining Reagents",

    description: "Activated Carbon, Sodium Cyanide & Hydrogen Peroxide",
  },
  {
    image: "/images/ch2.png",
    title: "Industrial Chemicals",

    description:
      "Barium Sulphate, Calcium Chloride, Caustic Soda, Hydrated Lime, Sodium Metabisulphite & Sodium Silicate",
  },
  {
    image: "/images/ch3.png",
    title: "Processing Aids",

    description: "Magnesium Oxide, Nitric Acid & Soda Ash",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="px-4 md:px-20 container mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chemicals.map((experience, index) => (
            <ExperienceCard
              key={index}
              image={experience.image}
              title={experience.title}
              description={experience.description}
            />
          ))}
        </div>
        {/* <SplitTable /> */}
      </div>
    </section>
  );
};

export default Experience;
