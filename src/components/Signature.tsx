// components/Signature.tsx
import React from "react";

const Signature: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-blue-800 text-3xl font-bold mb-4">
            ME ELECMETAL SIGNATURE
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our Values are our hallmark, they guide our decision-making and the
            way we relate to each of our stakeholders. <strong>Respect</strong>{" "}
            for people’s dignity, the proactive search for{" "}
            <strong>excellence</strong>, <strong>responsibility</strong>, and{" "}
            <strong>integrity</strong> are part of our essence and are
            translated into a work style with high levels of loyalty and
            commitment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We promote long-term relationships that create value and give
            meaning to our transparent, reliable work, always adhering to norms,
            regulations, and standards that allow us to operate at the best
            level while we advance in reporting our performance consistently and
            periodically.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition">
            More information
          </button>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2">
          <img
            src="/images/sello.jpg"
            alt="ME Elecmetal Signature"
            className="w-full h-[65vh] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Signature;
