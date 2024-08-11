import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import Link from "next/link";
import { eegSchoolApplicationLink } from "@/app/constants";

const Overview = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    introEEGSchool,
    summerSchoolOverview,
    applyNow,
    studentsApplication,
    requiredTimeCommitment,
  } = currentContent.eegschool;

  const applicationStatus = {
    en: "Applications for the summer school 2024 will open by April 15.",
    ar: "سيتم فتح طلبات الالتحاق بالمدرسة الصيفية لعام 2024 بحلول 15 أبريل.",
  };
  const applicationsDuration = {
    en: "Applications are open until Augest 18.",
    ar: "التقديمات مفتوحة حتى 18 أغسطس.",
  };
  const schoolDuration = {
    en: "This summer school will be held in person at The American University in Cairo (AUC), Egypt, from September 8 to 12, 2024.",
    ar: "ستقام هذه المدرسة الصيفية بشكل شخصي في الجامعة الأمريكية بالقاهرة (AUC)، مصر، في الفترة من 8 إلى 12 سبتمبر 2024.",
  };

  return (
    <div>
      <div className="md:py-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 md:px-10 px-5 grid grid-cols-1 gap-4">
          <h1 className="lg:px-10 text-3xl font-extrabold text-cBlack">
            {introEEGSchool}
          </h1>
          <p className="lg:px-10 px-2 py-2 text-md text-cBlack">
            {summerSchoolOverview}
          </p>
          <h3 className="lg:px-10 px-2 text-md font-extrabold text-cGreen">
            {schoolDuration[preferredLanguage]}
          </h3>
          <p className="lg:px-10 px-2 text-md font-extrabold text-cGreen">{requiredTimeCommitment}</p>
        </div>

        <div className="md:col-span-1 flex flex-col justify-start items-start">
          <Link
            href={eegSchoolApplicationLink}
            target="_blank"  rel="noopener noreferrer"
            className="w-72 h-[fit-content] bg-cGreenLight shadow-md px-5 rounded-md space-y-1 mt-10 ltr:ml-auto rtl:mr-auto"
          >
            <div>
              <h2 className="font-extrabold text-xl py-3 text-cWhite">
                {studentsApplication}
              </h2>
              <p className="text-md font-bold text-cWhite pb-3">{applicationsDuration[preferredLanguage]}</p>

              <button
                className="flex items-center bg-cWhite text-cBlack px-5 py-2 rounded-md h-10 mx-auto"
                type="submit"
                role="button"
              >
                {applyNow}
                <img
                  className="ml-2"
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
