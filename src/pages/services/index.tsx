import Pillars from "@/components/Pillars";
import Premier from "@/components/Premier";
import ProductHero from "@/components/ProductHero";
import RssFeed from "@/components/RssFeed";
import SustainabilityCard from "@/components/SustainabilityCard";
import React from "react";

const sections = [
  {
    imageSrc: "/images/tech.jpg",
    title: "Technical and Engineering/EPCM",
    description:
      "We specialize in delivering end-to-end technical and engineering services for mineral processing, including feasibility studies, process design, and optimization. Our comprehensive offerings cover equipment procurement, from sourcing and supplier management to contract negotiation, as well as construction management services, ensuring effective site management, equipment installation, and budget control. We oversee commissioning and provide ongoing support to ensure efficient, safe, and compliant operations throughout the lifecycle of your project, enhancing performance and meeting all regulatory standards",
    linkUrl: "#",
    bgColor: "bg-gray-100",
    reverse: false,
  },
  {
    imageSrc: "/images/train.jpg",
    title: "Training for Mining Operational Personnel",
    description:
      "We offer specialized training for mining operational personnel, including hands-on instruction in equipment operation, safety protocols, and process optimization to enhance skills, ensure compliance, and improve operational efficiency.We offer specialized training for mining operational personnel, partnering with Metcom, the world leader in training and knowledge transfer for mineral grinding circuits. Metcom's comprehensive programs enhance skills, improve grinding efficiency, and reduce costs, covering all aspects of optimizing plant grinding and classification circuits to boost operational performance and ensure safety and compliance",
    linkUrl: "#",
    bgColor: "bg-white",
    reverse: true,
  },
  {
    imageSrc: "/images/manu.jpg",
    title: "Manufacturing and Distribution",
    description:
      "A wide range of high-quality products, from ground support systems and mill liners to grinding media and steel products. Tailored design, fabrication, casting, and machining solutions for custom foundry needs.",
    linkUrl: "#",
    bgColor: "bg-gray-100",
    reverse: false,
  },
  {
    imageSrc: "/images/tenet.jpg",
    title: "Tenement Administration",
    description:
      "Our expert tenement administration services ensure efficient and legally compliant management of mineral exploration. We provide meticulous oversight and administration of tenements, ensuring full compliance with legislative requirements and maintaining operational efficiency. We handle the preparation and lodgement of applications, renewals, and reductions for all exploration tenures. Our team consults closely with clients to tailor processes to specific needs",
    linkUrl: "#",
    bgColor: "bg-white",
    reverse: true,
  },
  {
    imageSrc: "/images/f1.jpg",
    title: "Logistics and Transportation",
    description:
      "We offer comprehensive logistics and transportation services for the mineral processing industry, including supply chain management, freight and shipping, transport planning, and fleet management. Our services also encompass the sourcing and delivery of mining and processing consumables, ensuring timely and cost-effective provision of essential materials and equipment while maintaining regulatory compliance and optimizing overall supply chain efficiency.",
    linkUrl: "#",
    bgColor: "bg-gray-100",
    reverse: false,
  },
];

const Services = () => {
  return (
    <section>
      <ProductHero
        title="Our services"
        subtitle="Expert solutions tailored to meet your needs."
        backgroundImage="/images/align1.jpg"
      />
      {sections.map((section, index) => (
        <SustainabilityCard
          key={index}
          imageSrc={section.imageSrc}
          title={section.title}
          description={section.description}
          linkUrl={section.linkUrl}
          bgColor={section.bgColor}
          reverse={section.reverse}
        />
      ))}
      <Premier />
    </section>
  );
};

export default Services;
