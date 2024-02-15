import React from "react";
import { useContext } from "react";
import LanguageContext from "../../.././context/LanguageContext";
import Link from "next/link";

const WhyJoin = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;

  const {
    whyJoin,
    handsOnLearning,
    handsOnDescription,
    engagingCommunity,
    communityDescription,
    innovativeCurriculum,
    curriculumDescription,
    recognizedCertifications,
    certificationsDescription,
  } = currentContent.home;

  const data = [
    {
      illustration: "/assets/home/illustration1.svg",
      title: `${handsOnLearning}`,
      description: `${handsOnDescription}`,
    },
    {
      illustration: "/assets/home/illustration2.svg",
      title: `${engagingCommunity}`,
      description: `${communityDescription}`,
    },
    {
      illustration: "/assets/home/illustration3.svg",
      title: `${innovativeCurriculum}`,
      description: `${curriculumDescription}`,
    },
    {
      illustration: "/assets/home/illustration4.svg",
      title: `${recognizedCertifications}`,
      description: `${certificationsDescription}`,
    },
  ];

  return (
    <div className="py-10 lg:px-20 px-5 ">
      <h1 className="text-cBlack font-extrabold text-4xl text-center">
        {whyJoin} <span className="text-cRed"> AIN</span>?{" "}
      </h1>
      <div className="mt-10 grid grid-cols-1 lg:px-20">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className={`shadow-lg rounded-3xl lg:max-w-[60%] ${
                index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
              } grid grid-cols-4 gap-4 py-5`}
            >
              {index % 2 === 0 && (
                <div className="col-span-1">
                  <img
                    src={item.illustration}
                    alt="illustration"
                    className="overflow-visible bottom-0 w-40 h-40 object-cover"
                  />
                </div>
              )}

              <div className="col-span-3 flex flex-col justify-center py-5 lg:px-5 px-1">
                <h2 className="text-cBlack font-extrabold text-2xl mb-4">
                  {item.title}
                </h2>
                <p className="text-cBlack">{item.description}</p>
              </div>

              {index % 2 !== 0 && (
                <div className="col-span-1">
                  <img
                    src={item.illustration}
                    alt="illustration"
                    className="overflow-visible bottom-0 w-40 h-40 object-cover"
                  />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default WhyJoin;
