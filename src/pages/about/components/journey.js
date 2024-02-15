import React from "react";
import { useContext } from "react";
import LanguageContext from "../../.././context/LanguageContext";


const Journey = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { aiNStart } = currentContent.about;

  return (
    <div className="p-4">
      <div className="lg:flex items-center mx-auto">
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
            className="lg:w-3/4 w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Journey;
