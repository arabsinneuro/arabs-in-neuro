import React from "react";
import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";

const HomeOverview = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const { joinUsExploring, dedicatedToFostering } = currentContent.home;
  const isRTL = preferredLanguage == "ar" ? true : false;

  return (
    <div className="p-10 h-full w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 lg:-top-10 lg:-left-20 animate-spin-to-top-left">
        <img
          src="/assets/home/green_neuron.svg"
          alt="Green Image"
          className="w-32 h-32 lg:w-96 lg:h-96"
        />
      </div>

      <div className="absolute bottom-0 right-0 lg:-bottom-20 lg:-right-32 animate-spin-to-bottom-right">
        <img
          src="/assets/home/red_neuron.svg"
          alt="Red Image"
          className="w-32 h-32 lg:w-96 lg:h-96 transform -rotate-45"
        />
      </div>

      <div className="flex flex-col full-width items-center justify-around mb-20">
        <div className=" animate-slide-in-top">
          <img
            src="logo/banner.png"
            alt="Intro Image"
            className="w-1/3 h-full mx-auto py-5 animate-banner"
          />
        </div>

        <div className="lg:w-1/2 px-5 lg:p-10 flex flex-col shadow-xl p-4 rounded-2xl border opacity-0 animate-slide-in-bottom">
          <p
            className={`text-md text-black ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {joinUsExploring}
          </p>
          <br />
          <p
            className={`text-md text-black ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {dedicatedToFostering}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeOverview;
