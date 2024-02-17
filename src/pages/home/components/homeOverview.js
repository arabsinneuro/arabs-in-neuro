import React from "react";
import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";

const HomeOverview = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { arabsInNeuroscience, joinUsExploring, dedicatedToFostering } =
    currentContent.home;

  return (
    <div className="bg-cover h-full bg-blend-soft-light bg-[url('/backgrounds/opportunities.svg')] ">
      <div className="p-4 lg:p-8 h-3/4 relative">
        <div className="absolute top-0 left-0 animate-spin-to-top-left">
          <img
            src="/assets/home/green.svg"
            alt="Green Image"
            className="w-32 h-32 lg:w-96 lg:h-96"
          />
        </div>
        <div className="absolute bottom-0 right-0 animate-spin-to-bottom-right">
          <img
            src="/assets/home/red.svg"
            alt="Red Image"
            className="w-32 h-32 lg:w-96 lg:h-96"
          />
        </div>
        <div className="flex flex-col full-width items-center justify-around mb-8">
          <div className=" animate-slide-in-top">
            <img
              src="logo/banner.png"
              alt="Intro Image"
              className="w-1/3 h-full mx-auto py-5 animate-banner"
            />
          </div>

          <div className="lg:w-1/2 px-5 lg:p-10 flex flex-col items-center justify-center shadow-xl p-4 rounded-2xl border opacity-0 animate-slide-in-bottom">
            <p className="text-md text-black text-left">{joinUsExploring}</p>
            <br />
            <p className="text-md text-black text-left">
              {dedicatedToFostering}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOverview;
