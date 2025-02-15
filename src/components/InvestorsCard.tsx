import Link from "next/link";
import React from "react";

interface InvestorsCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkUrl: string;
  bgColor?: string;
  reverse?: boolean;
}

const InvestorsCard: React.FC<InvestorsCardProps> = ({
  imageSrc,
  title,
  description,

  linkUrl,
  bgColor = "bg-gray-100",
  reverse = false,
}) => {
  return (
    <section
      className={`py-8 px-4 md:px-28 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } ${bgColor}`}
    >
      <div className="flex-1">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center md:pl-12">
        <h2 className="text-4xl capitalize font-bold mb-4 text-gray-800">
          {title}
        </h2>
        <p className="text-grey mb-6">{description}</p>
        <Link
          href={linkUrl}
          className="text-orange-500 font-semibold inline-flex items-center hover:underline capitalize"
        >
          More information &rarr;
        </Link>
      </div>
    </section>
  );
};

export default InvestorsCard;
