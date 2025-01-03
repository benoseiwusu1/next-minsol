import React from "react";

interface TimelineEvent {
  year: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="px-4 md:px-28">
      {events.map((event, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-12 md:gap-x-20 gap-4 text-base items-start mb-8 py-5 border-b border-blu"
        >
          <div className="md:col-span-2 text-blu text-2xl font-bold text-left md:text-right">
            {event.year}
          </div>

          {/* Description */}
          <div className="md:col-span-9 text-grey">{event.description}</div>

          {index !== events.length - 1 && (
            <div className="block md:hidden border-t border-gray-300 mt-4"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
