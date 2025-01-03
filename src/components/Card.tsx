import React from "react";

type Member = {
  name: string;
  position: string;
};

type CardProps = {
  member: Member;
};

const Card: React.FC<CardProps> = ({ member }) => {
  return (
    <div className="bg-gray-100 border border-gray-300 p-4 rounded-md shadow-sm text-center w-full h-[100px] flex flex-col items-center justify-center">
      <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
      <p className="text-sm font-bold text-blue-600">{member.position}</p>
    </div>
  );
};

export default Card;
