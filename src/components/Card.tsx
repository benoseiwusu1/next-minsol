import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Member = {
  name: string;
  position: string;
  details?: string;
};

type CardProps = {
  member: Member;
};

const Card: React.FC<CardProps> = ({ member }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="bg-gray-100 border border-gray-300 p-4 rounded-md shadow-sm text-center w-full h-[100px] flex flex-col items-center justify-center cursor-pointer"
          onClick={() => member.details && setOpen(true)}
        >
          <h3 className="text-lg font-semibold text-black">{member.name}</h3>
          <p className="text-sm font-bold text-main">{member.position}</p>
        </div>
      </DialogTrigger>

      {member.details && (
        <DialogContent className="max-w-3xl p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{member.name}</h2>
          <h3 className="text-md font-semibold text-gray-700">
            {member.position}
          </h3>
          <p className="mt-2 text-gray-600 leading-loose">{member.details}</p>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Card;
