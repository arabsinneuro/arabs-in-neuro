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
      <div className="hidden lg:flex full-width items-center justify-center mb-8">
        {/* desktop */}
        <img
          src="/assets/home/overview.svg"
          alt="Intro Image"
          className="lg:block lg:w-1/4 w-1/4 h-auto mx-auto lg:ml-auto"
        />
        <div className="lg:w-1/2 bg-cWhite shadow-md p-8 rounded-md mx-auto flex-col items-center">
          <h1 className="text-4xl font-bold text-cBlack mb-4 items-center">
            {arabsInNeuroscience}
          </h1>
          <p className="text-lg text-black">{joinUsExploring}</p>
          <p className="text-lg text-bold text-black">{dedicatedToFostering}</p>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden text-center">
        <img
          src="/assets/home/overview.svg"
          alt="Intro Image"
          className="w-full h-full object-cover rounded-md mb-4"
        />
        <div className="bg-cWhite opacity-75 shadow-md p-4 rounded-md">
          <h1 className="text-xl font-bold text-cBlack">
            {arabsInNeuroscience}
          </h1>
          <br />
          <p className="text-lg text-cBlack ">{joinUsExploring}</p>
          <p className="text-lg text-bold text-cBlack ">
            {dedicatedToFostering}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
