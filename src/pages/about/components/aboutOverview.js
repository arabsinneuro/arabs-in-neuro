import React from "react";
import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";

const AboutOverview = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { empoweringNeuroscientists, aboutText } = currentContent.about;

  return (
    <div>
      <div className="p-4 lg:py-8 h-full relative">
        <div className="absolute top-0 left-0">
          <img
            src="/assets/home/green.svg"
            alt="Green Image"
            className="w-32 h-32 lg:w-96 lg:h-96"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            src="/assets/home/red.svg"
            alt="Red Image"
            className="w-32 h-32 lg:w-96 lg:h-96"
          />
        </div>
        <div className="flex flex-col full-width items-center justify-around my-10 lg:py-10 py-5">
          <div className="lg:w-1/2 px-5 lg:p-10 flex flex-col items-center justify-center shadow-xl p-4 rounded-2xl border">
          <h1 className="text-4xl font-bold text-cBlack mb-4">
            {empoweringNeuroscientists}
          </h1>
          <br />
          <p className="text-lg text-black">{aboutText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverview;
