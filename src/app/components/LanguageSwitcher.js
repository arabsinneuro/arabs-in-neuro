import React from "react";

const LanguageSwitcher = ({ setPreferredLanguage, preferredLanguage }) => {
  const handleLanguageChange = (newLanguage) => {
    setPreferredLanguage(newLanguage);
  };

  const commonButtonClasses =
    "py-1 px-3 border-none rounded-full cursor-pointer bg-cN200";

  const getButtonClasses = (language) => {
    return `${commonButtonClasses} ${
      preferredLanguage === language ? "bg-cRed" : "bg-cWhite"
    } ${
        preferredLanguage === language ? "text-cWhite" : "text-cBlack"
      }`;
  };

  return (
    <div className="flex border border-cN200 bg-cWhite rounded-full overflow-hidden px-1 py-1 w-auto m-2 shadow-md"> 
      <button
        onClick={() => handleLanguageChange("en")}
        className={getButtonClasses("en")}
      >
        En
      </button>
      <button
        onClick={() => handleLanguageChange("ar")}
        className={getButtonClasses("ar")}
      >
        Ar
      </button>
    </div>
  );
};

export default LanguageSwitcher;
