import React from "react";

const LanguageSwitcher = ({ setPreferredLanguage, preferredLanguage }) => {
  const handleLanguageChange = (newLanguage) => {
    setPreferredLanguage(newLanguage);
  };

  const commonButtonClasses =
    "py-1 px-3 border-none rounded-full cursor-pointer";

  const getButtonClasses = (language) => {
    return `${commonButtonClasses} ${
      preferredLanguage === language ? "bg-cRed" : "bg-cN200"
    } ${
        preferredLanguage === language ? "text-white" : "text-black"
      }`;
  };

  return (
    <div className="flex border border-cN200 bg-cN200 rounded-full overflow-hidden px-1 py-1 w-auto m-2"> 
      <button
        onClick={() => handleLanguageChange("en")}
        className={getButtonClasses("en")}
      >
        en
      </button>
      <button
        onClick={() => handleLanguageChange("ar")}
        className={getButtonClasses("ar")}
      >
        ar
      </button>
    </div>
  );
};

export default LanguageSwitcher;
