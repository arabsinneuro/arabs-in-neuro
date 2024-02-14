import React from "react";
import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import Link from "next/link";

const Card = ({ number, text, icon }) => (
  <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/green_red.svg')]">
  <div
    className="rounded-2xl border border-cN300 shadow-md p-4 relative"
    style={{ width: "240px", height: "130px" }}
  >
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <p className="pb-3 text-cRed font-extrabold text-2xl">{number}</p>
      <p className="text-sm text-cN800">{text}</p>
    </div>

    <div className="absolute top-2 right-2 bg-cWhite rounded-full shadow-md w-8 h-8 flex items-center justify-center">
      <img src={icon} alt="Icon" className="w-5 h-5" />
    </div>
  </div></div>
);

const WhatsAcheived = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;

  const {
    countries,
    applicants,
    teacherAssistants,
    instructorsAndGuestSpeakers,
    what,
    achieved,
  } = currentContent.home;

  return (
    <div className="py-10 lg:px-20 px-5">
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="relative mb-5 lg:mb-0">
          <img
            src="/assets/home/subtract.png"
            alt="Brain"
            className="lg:w-96 w-64"
          />
          <div className="absolute lg:bottom-20 bottom-5 right-0 text-center lg:text-center font-extrabold text-2xl">
            <p>{what}</p>
            <p className="text-cRed">AIN</p>
            <p>{achieved}?</p>
          </div>
        </div>
        <div className="lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              number="13+"
              text={countries}
              icon="/assets/home/map-pin.svg"
            />
            <Card
              number="400+"
              text={applicants}
              icon="/assets/home/users.svg"
            />
            <Card
              number="10+"
              text={teacherAssistants}
              icon="/assets/home/user-check.svg"
            />
            <Card
              number="10+"
              text={instructorsAndGuestSpeakers}
              icon="/assets/home/award.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAcheived;
