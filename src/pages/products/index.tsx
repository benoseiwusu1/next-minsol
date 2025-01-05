import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import ParallaxHero from "@/components/ParallaxHero";
import ProductCard from "@/components/ProductCard";
import ProductHero from "@/components/ProductHero";
import RssFeed from "@/components/RssFeed";
import React from "react";

const products = [
  {
    image: "/images/gr.jpg",
    title: "Ground Support Systems",

    description:
      "We provide robust mining and ground support solutions, including  high-quality welded mesh and split set products. Our welded mesh offers superior stability and reinforcement for underground mine structures, while our split sets ensure effective ground support and stability. Both solutions are designed to enhance safety andperformance in mining operations, ensuring reliable and durable ground support in challenging environments.",
  },
  {
    image: "/images/split.jpg",
    title: "Split Sets",

    description:
      "Our Split Sets are crafted from high-tensile steel, roll-formed into a tubular section with a continuous longitudinal opening. An 8mm steel ring is fixed 5mm from the collar end of the tube. When installed into the recommended drilled hole size with the appropriate bearing plate, the Split Set creates a compressive force against the rock.",
  },
  {
    image: "/images/mesh.jpg",
    title: "Wielded Mesh",

    description:
      "Minsol manufactures and supplies Mining Mesh (Welded Mesh) for permanent surface coverage in underground excavations. This mesh can be installed with roof bolts, split sets, or other supports, and used in conjunction with combi washers and straps to enhance protection against Falls of Ground (loose rocks) and improve safety for mining crews and underground machinery.",
  },
];

const Products = () => {
  return (
    <section className="gr-gray-100">
      <ProductHero
        title="Our Products"
        subtitle="Discover comfort and efficiency with our top-quality products"
        backgroundImage="/images/ground.jpg"
      />

      <main className="py-16 text-center container mx-auto px-6 md:px-20">
        <div>
          <div className="mb-10">
            <h2 className="capitalize text-2xl mb-4 text-main">
              Installed ground support consumables
            </h2>
            <p className="text-base max-w-3xl mx-auto text-grey">
              We provide robust mining and ground support solutions, including
              high-quality welded mesh and split set products. Our welded mesh
              offers superior stability and reinforcement for underground mine
              structures, while our split sets ensure effective ground support
              and stability.
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 gr-gray-200">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>

        {/* <SplitTable /> */}
      </main>
      <ParallaxHero />
      <Experience />
      <RssFeed />
      <Clients />
    </section>
  );
};

export default Products;
