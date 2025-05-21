import React from "react";
import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";

const AboutOverview = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const { empoweringNeuroscientists, aboutText, organizationDescription } =
    currentContent.about;
  const isRTL = preferredLanguage == "ar" ? true : false;
  return (
    <div>
      <div className="p-4 lg:py-8 h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 lg:-top-10 lg:-left-20 animate-spin-to-top-left">
          <img
            src="/assets/home/red_neuron.svg"
            alt="Green Image"
            className="w-32 h-32 lg:w-96 lg:h-96"
          />
        </div>

        <div className="absolute bottom-0 right-0 lg:-bottom-20 lg:-right-32 animate-spin-to-bottom-right">
          <img
            src="/assets/home/green_neuron.svg"
            alt="Red Image"
            className="w-32 h-32 lg:w-96 lg:h-96 transform -rotate-45"
          />
        </div>
        <div className="flex flex-col full-width items-center justify-around my-10 lg:py-10 py-5 animate-slide-in-top">
          <div className="lg:w-3/5 px-5 lg:p-10 flex flex-col justify-center shadow-xl p-4 rounded-2xl border">
            <h1 className="text-4xl font-bold text-cBlack mb-4">
              {empoweringNeuroscientists}
            </h1>
            <br />
            <p
              className={`text-lg text-black ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {aboutText}
            </p>
            <br />
            <p
              className={`text-lg text-black ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {organizationDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverview;
