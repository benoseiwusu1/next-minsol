import React from "react";

interface AffiliationsEvent {
  title: string;
  description: string;
  logo: string;
}

interface AffiliationsProps {
  events: AffiliationsEvent[];
}

const Affiliations: React.FC<AffiliationsProps> = ({ events }) => {
  return (
    <div className="px-4 lg:px-44">
      {events.map((event, index) => (
        <div className="">
          <div
            key={index}
            className="flex flex-col-reverse lg:flex-row md:items-center justify-center gap-x-8 gap-y-3 md:gap-y-0"
          >
            <div className="w-full">
              <p className="text-4xl"> {event.title}</p>
              <p className="text-grey text-base mt-4 w-full md:w-5/6">
                {event.description}
              </p>
            </div>
            <div className="">
              <img src={event.logo} />
            </div>
          </div>
          <div className="h-[1px] w-full bg-grey mx-auto my-8" />
        </div>
      ))}
    </div>
  );
};

export default Affiliations;
