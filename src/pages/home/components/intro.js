import React from "react";
import { useContext } from "react";
import LanguageContext from "../../.././context/LanguageContext";

const Intro = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const isRTL = preferredLanguage == "ar" ? true : false;
  const {
    we,
    democratizingEducation,
    democratizingEducationDescription,
    innovateCollaborateAdvance,
    innovateCollaborateAdvanceDescription,
    empowerThroughKnowledge,
    empowermentStatement,
  } = currentContent.home;

  const timelineItems = [
    {
      title: `${empowerThroughKnowledge}`,
      description: `${empowermentStatement}`,
    },
    {
      title: `${democratizingEducation}`,
      description: `${democratizingEducationDescription}`,
    },
    {
      title: `${innovateCollaborateAdvance}`,
      description: `${innovateCollaborateAdvanceDescription}`,
    },
  ];

  const imageStyle = {
    transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)',
  };

  return (
    <div className="py-10">
      <div className="flex justify-center items-center pb-10 font-extrabold text-4xl">
        <span className="text-black mx-2">{we} </span>
        <span className="text-cRed">AiN</span>
      </div>
      <div className="lg:grid grid-cols-4 w-full h-full">
  <div className="hidden lg:flex flex-col space-y-4">
    <img
      src="/assets/home/multipleLines1.svg"
      alt="Top"
      className="h-full"
      style={imageStyle}
    />
    <img
      src="/assets/home/multipleLines2.svg"
      alt="Bottom"
      className="h-full"
      style={imageStyle}
    />
  </div>

  <div className="lg:col-span-3 flex flex-col justify-between">
    {timelineItems.map((item, index) => (
      <div
        key={index}
        className="grid grid-cols-4 gap-4 items-center p-4"
      >
        <div className="col-span-1 flex flex-col justify-center items-center">
          <h3 className="text-cGreen text-xl font-semibold">
            {item.title}
          </h3>
        </div>

        <div className="col-span-1 flex flex-col justify-between items-center">
          <img
            src="/assets/home/arrowup.svg"
            alt="up arrow"
            className="lg:w-3/4 "
            style={imageStyle}
          />
          <br />
          <img
            src="/assets/home/arrowdown.svg"
            alt="down arrow"
            className="lg:w-3/4 "
            style={imageStyle}
          />
        </div>

        <div className="col-span-2 flex flex-col justify-center items-center">
          <div className="rounded-xl shadow-lg p-4">
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Intro;
