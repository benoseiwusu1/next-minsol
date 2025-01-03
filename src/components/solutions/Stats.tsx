// components/Stats.tsx
import React from "react";
import { Link } from "react-router-dom";

interface StatCardProps {
  percentage: number;
  title: string;
  description: string;
  link: string;
  bgColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  percentage,
  title,
  description,
  link,
  bgColor = "bg-white",
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg flex flex-col justify-between ${bgColor} border-t-4 ${
        bgColor === "bg-white" ? "border-blue-500" : "border-red-500"
      }`}
    >
      <div>
        <div className="flex items-center mb-4">
          <h2 className="text-4xl font-bold text-blue-800 mr-2">
            {percentage}%
          </h2>
          <span className="text-green-500 text-xl font-bold">↑</span>
        </div>
        <h3 className="font-bold text-lg text-blue-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="mt-4">
        <Link
          to={link}
          className="text-orange-500 font-bold hover:underline inline-block"
        >
          How we do it →
        </Link>
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      percentage: 20,
      title: "Safety",
      description: "We reduce the time of exposure to risk.",
      link: "/safety",
      bgColor: "bg-white",
    },
    {
      percentage: 30,
      title: "Reliability",
      description:
        "We use the highest quality raw materials and high-end heat treatment technology to deliver products with a longer wear life.",
      link: "/reliability",
      bgColor: "bg-red-50",
    },
    {
      percentage: 19,
      title: "Availability",
      description: "We increase the operational time of the equipment.",
      link: "/availability",
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-20 container mx-auto bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800">
          What we have done for our customers
        </h2>
        <p className="text-gray-600 mt-4">
          As part of our extensive customer experience, we have completed large
          projects focused on the following five key areas:
        </p>
        <div className="flex  flex-wrap justify-center mt-4 space-x-4">
          {[
            "Reliability",
            "Availability",
            "Productivity",
            "Efficiency",
            "Safety",
          ].map((tab, index) => (
            <button
              key={index}
              className="font-bold text-blue-800 hover:text-blue-600"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
