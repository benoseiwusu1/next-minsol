import React, { useState } from "react";
import Card from "./Card";

type Member = {
  name: string;
  position: string;
};

type Committees = {
  [key: string]: Member[];
};

const committees: Committees = {
  "Board of Directors": [
    { name: "Baltazar Sánchez Guzmán", position: "President" },
    { name: "Cristóbal Eyzaguirre Baeza", position: "Vicepresident" },
    { name: "Carlos F. Cáceres Contreras", position: "Director" },
    { name: "Alfonso A. Swett Opazo", position: "Director" },
    { name: "José Ignacio Figueroa Elgueta", position: "Director" },
    { name: "Alfonso Swett Saavedra", position: "Director" },
    { name: "Fernando Franke García", position: "Director" },
    { name: "Rolando Medeiros Soux", position: "Board Advisor" },
  ],
  "Executive Committee": [
    { name: "Carlos F. Cáceres Contreras", position: "President" },
    { name: "Cristóbal Eyzaguirre Baeza", position: "Vicepresident" },
    { name: "Alfonso Swett Saavedra", position: "Director" },
  ],
  Administration: [
    { name: "Carlos F. Cáceres Contreras", position: "President" },
    { name: "Cristóbal Eyzaguirre Baeza", position: "Vicepresident" },
    { name: "Alfonso Swett Saavedra", position: "Director" },
    { name: "Alfonso Swett Saavedra", position: "Director" },
    { name: "Fernando Franke García", position: "Director" },
    { name: "Rolando Medeiros Soux", position: "Board Advisor" },
  ],
  // Add more committees as needed
};

const TabbedLayout: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Board of Directors");

  return (
    <section className="py-8 h-[70vh] mb-40 md:mb-0">
      <div className="container mx-auto px-4  md:px-20">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-gray-300 pb-2">
          {Object.keys(committees).map((tab) => (
            <button
              key={tab}
              className={`text-lg font-medium ${
                selectedTab === tab
                  ? "text-main border-b-2 border-main"
                  : "text-gray-600"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {committees[selectedTab]?.map((member) => (
            <Card key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabbedLayout;
