import React from "react";

const ParallaxHero: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-[400px] text-white"
      style={{
        backgroundImage: `url('/images/gr.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-2xl md:text-4xl font-bold uppercase">
          Reagents and Processing Inputs
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl text-gray-200">
          At Minsol Limited, we specialize in supplying a wide range of
          high-quality chemicals and mining reagents to the mining, oil, and gas
          industries. Our products are designed to meet the rigorous demands of
          various industrial applications.
        </p>
      </div>
    </section>
  );
};

export default ParallaxHero;
