import React from "react";
import { useContext } from "react";
import LanguageContext from "../../.././context/LanguageContext";


const Partners = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const { partners, abrirDescription } = currentContent.about;

  const image = preferredLanguage == 'en' ? "/assets/about/journey.svg" : "/assets/about/journey_ar.svg"
  return (
    <div className="md:p-20 p-10">
    <h2 className="text-3xl font-extrabold text-cRed text-center md:mb-20 mb-10">{partners}</h2>
      <div className="md:flex items-center mx-auto">
      <div className="md:w-1/4 mx-auto">
          <img
            src= "/assets/about/abrir_logo.png"
            alt="ABRIR Logo"
            className="w-3/4 h-auto"
          />
        </div>
        <div className="md:w-3/4 flex items-center justify-center">
          <div className="text-start">
            <p className="text-md font-bold text-cBlack mb-4 whitespace-pre-line">
              {abrirDescription}
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Partners;
