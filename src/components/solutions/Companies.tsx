// components/Companies.tsx
import React from "react";

interface Company {
  name: string;
  logo: string; // URL of the logo
}

const Companies: React.FC = () => {
  const companies: Company[] = [
    { name: "KAZ Minerals", logo: "/images/b1.png" },
    { name: "ZiJin", logo: "/images/b2.png" },
    { name: "Grupo México", logo: "/images/b3.png" },
    { name: "AngloAmerican", logo: "/images/b4.png" },
    { name: "AngloAmerican", logo: "/images/b5.png" },
    { name: "AngloAmerican", logo: "/images/b6.png" },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-6">
        <h2 className="md:text-3xl font-bold text-blu">
          Companies who trust us
        </h2>
        <p className="text-orange-500 mt-2">
          We have over <span className="font-bold">120 customers</span> in more
          than <span className="font-bold">40 countries</span>
        </p>
      </div>
      <div className="flex items-center justify-between px-4 md:px-20">
        {/* Company Logos */}
        <div className="flex space-x-8 justify-center items-center mx-auto my-8">
          {companies.map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="h-16 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
