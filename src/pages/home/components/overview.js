import React from "react";
import { useContext } from "react";
import LanguageContext from "../../.././context/LanguageContext";

const Overview = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { arabsInNeuroscience, joinUsExploring, dedicatedToFostering } =
    currentContent.home;

  return (
    <div className="p-4 lg:p-8">
      <div className="lg:flex full-width items-center justify-around mb-8">
        {/* desktop */}
        <img
          src="logo/banner.png"
          alt="Intro Image"
          className="w-1/2 h-full mx-auto py-5"
        />
        <div className="lg:w-1/4 px-5 flex flex-col justify-center shadow-lg p-4 rounded-lg">
          {/* <h1 className="lg:w-1/2 text-4xl font-extrabold text-cBlack mb-4 lg:text-left text-center">
            {arabsInNeuroscience}
          </h1>
          <br/> */}
          <p className="text-md text-black text-left">{joinUsExploring}</p>
          <br/>
          <p className="text-md text-black text-left">{dedicatedToFostering}</p>
        </div>
      </div>

    </div>
  );
};

export default Overview;

