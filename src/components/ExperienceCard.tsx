import React from "react";

interface ExperienceCardProps {
  image: string;
  title: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-80 flex flex-col">
      <div className="relative w-full h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-main mb-5">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
