import React from "react";

interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ image, title }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col w-full lg:w-[350px]">
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-base font-semibold text-blu mb-2 capitalize">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CaseStudyCard;
