import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="text-right">
      <button
        onClick={() => changeLanguage("en")}
        className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Français
      </button>
    </div>
  );
};

export default LanguageSwitcher;
