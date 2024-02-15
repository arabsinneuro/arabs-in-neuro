import React from "react";
import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";

const AboutOverview = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { empoweringNeuroscientists, aboutText } = currentContent.about;

  return (
    <div className="lg:h-screen">
      <div className="lg:py-10 bg-cover bg-blend-soft-light lg:bg-[url('/backgrounds/home-intro.svg')] h-3/4 flex items-center justify-center">
        <div className="p-5 lg:w-1/2 shadow-xl rounded-xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold text-cBlack mb-4">
            {empoweringNeuroscientists}
          </h1>
          <br />
          <p className="text-lg text-black">{aboutText}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutOverview;
