import React from "react";
import { useContext } from "react";
import LanguageContext from "../../.././context/LanguageContext";


const Journey = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { aiNStart } = currentContent.about;

  return (
    <div className="p-4 lg:p-8">
      {/* desktop */}
      <div className="hidden lg:flex items-center mx-auto mt-20 mb-20">
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-cRed mb-4 whitespace-pre-line">
              {aiNStart}
            </h1>
          </div>
        </div>

        <div className="lg:w-3/4 mx-auto">
          <img
            src="/assets/about/journey.svg"
            alt="Journey Image"
            className="w-3/4 h-auto"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden text-center items-center justify-center mb-8">
        <h1 className="text-4xl font-bold text-cRed mt-8 mb-8">{aiNStart}</h1>
        <img
          src="/assets/about/journey.svg"
          alt="Journey Image"
          className="w-full h-auto mb-4"
        />
      </div>
    </div>
  );
};

export default Journey;
