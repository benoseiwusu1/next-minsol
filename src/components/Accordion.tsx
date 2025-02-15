import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string[];
}

const accordionData: AccordionItem[] = [
  {
    title: "South America",
    content: ["Argentina", "Brazil", "Chile", "Peru"],
  },
  {
    title: "North America",
    content: ["United States"],
  },
  {
    title: "APAC (Asia-Pacific)",
    content: ["Australia and Asia-Pacific"],
  },
  {
    title: "EMEA (Africa/ Middle East/ Europe)",
    content: [
      "Middle East/ Europe",
      "Africa",
      "Mongolia",
      "Africa, CIS, Middle East, Europe",
    ],
  },
  {
    title: "China",
    content: [],
  },
];

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="py-8 bg-gray-100 text-grey">
      <div className="md:px-28 px-4 container mx-auto">
        <h2 className="text-xl font-bold mb-6">Search by country or city</h2>
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className={`w-full text-left py-4 px-2 flex justify-between items-center ${
                activeIndex === index
                  ? "font-bold text-blue-800"
                  : "text-gray-800"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span className="text-xl">
                {activeIndex === index ? (
                  <Icon icon="lsicon:up-filled" />
                ) : (
                  <Icon icon="lsicon:down-filled" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="px-4 py-2 bg-white text-orange-600">
                {item.content.length > 0 ? (
                  item.content.map((city, cityIndex) => (
                    <p key={cityIndex} className="mb-2">
                      {city}
                    </p>
                  ))
                ) : (
                  <p>No content available</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
