import React, { useState } from "react";
import Card from "./Card";

type Member = {
  name: string;
  position: string;
  details?: string;
};

type Committees = {
  [key: string]: Member[];
};

const committees: Committees = {
  "Senior Management": [
    {
      name: "Yaw Boadi",
      position: "Managing Director",
      details:
        "Yaw is the founder and managing director of Minsol Limited, a mining services firm specializing in the West African region. He has a degree in metallurgical engineering from the Kwame Nkrumah University of Science and Technology. With a wealth of experience exceeding 30 years, Mr. Boadi has navigated various facets of the mining business ranging from managing operations, projects regulatory, to business development. His journey has led to the establishment of important connections with government and corporate stakeholders.",
    },
    {
      name: "Theo Abuah",
      position: "Head of Operations",
      details:
        "Mr Abuah is a Mining and Mineral Engineer by profession with over 30yrs experience in the mineral industry.  Theo holds a MSc (mining), Dip (Mineral Technology) and Certificate in Project Management. He has worked with Goldfields Gh Ltd, AngloGold Ashanti Bibiani mine; currently Mensin Gold (a subsidiary of Asante gold). A member of the Minsol team since 2015, Theo has assisted and led multinational companies as their representative in Ghana and West Africa. Some notable examples include: Polycorp (Canada), Gekko System (Australia) and West African Forging Ltd. He is currently assisting with business development post-establishment of West Africa Conveyor Ltd (WACO); the only indigenous conveyor and Underground Support System manufacturer.",
    },
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
