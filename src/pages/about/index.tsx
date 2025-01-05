import Clients from "@/components/Clients";
import ProductHero from "@/components/ProductHero";
import RssFeed from "@/components/RssFeed";
import TabbedLayout from "@/components/TabbedLayout";
import Vision from "@/components/Vision";
import React from "react";

const stats = [
  {
    value: "14+",
    label: "Years of experience",
    linkText: "Learn about our history>",
    linkHref: "#",
  },
  {
    value: "20+",
    label: "Associates",
    linkText: "",
    linkHref: "",
  },
  {
    value: "5+",
    label: "Countries in the sub-region",
    linkText: "See plants and offices >",
    linkHref: "#",
  },
];

const About = () => {
  return (
    <section>
      <ProductHero
        title="About Us"
        subtitle="Committed to Innovation, Quality, and Customer Satisfaction"
        backgroundImage="/images/tenet.jpg"
      />
      <section className="pt-12 text-center">
        <div className="container mx-auto px-4 md:px-20">
          <p className="max-w-full mx-auto md:text-left text-lg text-gray-700 text-center">
            Founded in 2010, Minsol Limited began as a pioneering Ghanaian firm
            with a vision to revolutionize mining consultancy and services
            across the Sub-Saharan region. From our headquarters in Accra,
            Ghana, we quickly established a reputation for excellence and
            innovation within the mining industry.
          </p>
          <p className="max-w-full mx-auto md:text-left text-lg text-gray-700 my-8 text-center">
            Our commitment to growth and expansion led to the establishment of
            operational centers in Côte d'Ivoire, Burkina Faso, Mali, and
            Guinea. These strategic locations enable us to provide enhanced
            support to mining operations throughout the region and respond more
            effectively to our clients' evolving needs.
          </p>
          <p className="max-w-full mx-auto md:text-left text-lg text-gray-700 mb-20 text-center">
            At Minsol Limited, our approach is rooted in a commitment to
            delivering exceptional value and results for our clients. We combine
            industry expertise with innovative solutions to address the unique
            challenges of the mineral resources sector.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-y-4">
                  <h3 className="text-6xl font-bold text-main">{stat.value}</h3>
                  <p className="text-gray-500 text-base">{stat.label}</p>
                </div>
                {index < stats.length - 1 && (
                  <div className="border-l border-gray-300 h-20 mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <Vision />
        <TabbedLayout />
        <RssFeed />
        <Clients />
      </section>
    </section>
  );
};

export default About;
