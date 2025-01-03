// components/FlexCard.tsx
import React from "react";

interface FlexCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  bgColor?: string; // Optional background color
  reverse?: boolean; // Optional reverse layout
}

const FlexCard: React.FC<FlexCardProps> = ({
  imageSrc,
  title,
  description,
  linkText,
  linkUrl,
  bgColor = "bg-gray-100",
  reverse = false,
}) => {
  return (
    <section
      className={`py-16 px-4 md:px-28 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } ${bgColor}`}
    >
      <div className="flex-1">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center md:pl-12">
        <h2 className="text-4xl capitalize font-bold mb-4 text-gray-800">
          {title}
        </h2>
        <p className="text-grey mb-6">{description}</p>
        <a
          href={linkUrl}
          className="text-orange-500 font-semibold inline-flex items-center hover:underline"
        >
          {linkText} &rarr;
        </a>
      </div>
    </section>
  );
};

export default FlexCard;
