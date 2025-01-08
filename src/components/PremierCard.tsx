import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

interface SubtextItem {
  title: string;
  description: string;
}

interface PremierCardProps {
  icon: string;
  title: string;
  subtext?: SubtextItem[];
  description?: string;
  linkText: string;
  linkHref: string;
}

const PremierCard: React.FC<PremierCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
  subtext,
}) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 md:w-[350px] h-[450px] rounded">
      <div className="px-6 pt-4 flex flex-col items-start gap-y-3">
        <Icon icon={icon} fontSize={60} color="#79513c" />
        <h3 className="text-lg text-black uppercase text-left">{title}</h3>
        {subtext ? (
          <div className="text-gray-600 mt-2 space-y-3 w-full">
            {subtext.map((item, index) => (
              <p key={index} className="text-left">
                <span className="mr-2 font-medium">{item.title}:</span>
                {item.description}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 mt-2 text-left">{description}</p>
        )}
      </div>
    </div>
  );
};

export default PremierCard;
