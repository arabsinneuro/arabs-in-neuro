import React from "react";
import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";

const HomeOverview = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { arabsInNeuroscience, joinUsExploring, dedicatedToFostering } =
    currentContent.home;

  return (
    <div className="p-4 lg:p-8">
      <div className="flex flex-col full-width items-center justify-around mb-8">
        <img
          src="logo/banner.png"
          alt="Intro Image"
          className="w-1/3 h-full mx-auto py-5"
        />
        <div className="lg:w-1/2 px-5 lg:p-10 flex flex-col items-center justify-center shadow-xl p-4 rounded-2xl border">
          <p className="text-md text-black text-left">{joinUsExploring}</p>
          <br />
          <p className="text-md text-black text-left">{dedicatedToFostering}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeOverview;
