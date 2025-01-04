// components/Solutions.tsx
import React from "react";
import Link from "next/link";

const solutions = [
  {
    title: "Technical and Engineering",
    description:
      "We specialize in delivering end-to-end technical and engineering services for mineral processing, including feasibility studies, process design, and optimization.",
    details:
      "We specialize in delivering end-to-end technical and engineering services for mineral processing, including feasibility studies, process design, and optimization. Our comprehensive offerings cover equipment procurement, from sourcing and supplier management to contract negotiation, as well as construction management services, ensuring effective site management, equipment installation, and budget control. We oversee commissioning and provide ongoing support to ensure efficient, safe, and compliant operations throughout the lifecycle of your project, enhancing performance and meeting all regulatory standards.",
    buttonText: "More Information",
    image: "/images/tech.jpg",
  },
  {
    title: "Manufacturing and Distribution",
    description:
      "A wide range of high-quality products, from ground support systems and mill liners to grinding media and steel products.",
    details:
      "A wide range of high-quality products, from ground support systems and mill liners to grinding media and steel products. Tailored design, fabrication, casting, and machining solutions for custom foundry needs.",
    buttonText: "More Information",
    image: "/images/manu.jpg",
  },
  {
    title: "Training for Mining Operational Personnel",
    description:
      "We offer specialized training for mining operational personnel, including hands-on instruction in equipment operation.",
    details:
      "We offer specialized training for mining operational personnel, including hands-on instruction in equipment operation, safety protocols, and process optimization to enhance skills, ensure compliance, and improve operational efficiency. We offer specialized training for mining operational personnel, partnering with Metcom, the world leader in training and knowledge transfer for mineral grinding circuits. Metcom's comprehensive programs enhance skills, improve grinding efficiency, and reduce costs, covering all aspects of optimizing plant grinding and classification circuits to boost operational performance and ensure safety and compliance.",
    buttonText: "More Information",
    image: "/images/train.jpg",
  },
  // {
  //   title: "Logistics and Transportation",
  //   description:
  //     "We offer comprehensive logistics and transportation services for the mineral processing industry, including supply chain",
  //   details:
  //     "We offer comprehensive logistics and transportation services for the mineral processing industry, including supply chain management, freight and shipping, transport planning, and fleet management. Our services also encompass the sourcing and delivery of mining and processing consumables, ensuring timely and cost-effective provision of essential materials and equipment while maintaining regulatory compliance and optimizing overall supply chain efficiency.",
  //   buttonText: "More Information",
  //   image: "/images/s3.png",
  // },
  {
    title: "Tenement Administration",
    description:
      "Our expert tenement administration services ensure efficient and legally compliant management of mineral exploration",
    details:
      "We offer comprehensive logistics and transportation services for the mineral processing industry, including supply chain management, freight and shipping, transport planning, and fleet management. Our services also encompass the sourcing and delivery of mining and processing consumables, ensuring timely and cost-effective provision of essential materials and equipment while maintaining regulatory compliance and optimizing overall supply chain efficiency.",
    buttonText: "More Information",
    image: "/images/tenet.jpg",
  },
];

interface SolutionsProps {
  onSolutionClick: (item: any) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onSolutionClick }) => {
  return (
    <section className="py-16 bg-white">
      <div className="px-4 md:px-20 container mx-auto">
        <h2 className="section-title">Solutions</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-main rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-[350px]"
            >
              <div className="h-[60%] w-full overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-4 text-white h-full">
                <div>
                  <h3 className="text-base font-bold mb-2">{solution.title}</h3>
                  <p className="mb-4 text-sm text-gray-300">
                    {solution.description}
                  </p>
                </div>
                <button
                  className="mt-auto inline-block font-semibold border border-white px-4 py-2 rounded-lg text-sm text-white hover:bg-main transition-colors duration-150 text-center"
                  onClick={() => onSolutionClick(solution)}
                >
                  {solution.buttonText} &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
