import React from "react";

interface ProductsHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const ProductHero: React.FC<ProductsHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <section className="relative bg-gray-100">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 lg:py-24">
        <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-wide">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl mt-4 max-w-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default ProductHero;
