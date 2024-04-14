import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import Link from "next/link";

const Overview = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    introCompNeuroscience,
    introCourseTitle,
    introCourseDescription,
    summerSchoolContent,
    journeyDescription,
    applyNow
  } = currentContent.school;

  const applicationStatus = {
    en: "Applications for the summer school 2024 will open by April 15.",
    ar: "سيتم فتح طلبات الالتحاق بالمدرسة الصيفية لعام 2024 بحلول 15 أبريل.",
  };
  const applicationsDuration = {
    en: "Applications will open from April 15 until May 7. ",
    ar: "سيتم فتح باب التقديم من 15 أبريل حتى 7 مايو.",
  };
  const schoolDuration = {
    en: "The summer school 2024 will be 3 weeks, from August 11 until August 30.",
    ar: "سيكون مدرسة الصيف لعام 2024 مدتها 3 أسابيع، من 11 أغسطس حتى 30 أغسطس.",
  };

  return (
    <div>
      <div className="md:py-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Text Content */}
        <div className="md:col-span-2 md:px-10 px-5 grid grid-cols-1 gap-4">
          <h1 className="lg:px-10 text-3xl font-extrabold text-cBlack">
            {introCompNeuroscience}
          </h1>
          <p className="lg:px-10 px-2 py-2 text-md text-cBlack">
            {summerSchoolContent}
          </p>
          <p className="lg:px-10 px-2 py-2 text-md text-cBlack">
            <span className="text-md font-bold text-cRed">
              {introCourseDescription}:{" "}
            </span>{" "}
            {journeyDescription}
          </p>
          <h3 className="lg:px-10 px-2 text-lg font-bold text-cGreen" >{schoolDuration[preferredLanguage]}</h3>
          <h3 className="lg:px-10 px-2 text-lg font-bold text-cGreen" >{applicationsDuration[preferredLanguage]}</h3>
        </div>

        {/* Banners Container */}
        <div className="md:col-span-1 flex flex-col justify-start items-start">
         
          <div className="w-72 h-[fit-content] bg-cRed shadow-md px-4 rounded-md space-y-1 mt-10 ltr:ml-auto rtl:mr-auto">
            <h2 className="font-extrabold text-xl py-3 text-cWhite font-bold">
              {applicationStatus[preferredLanguage]}
            </h2>
            {/* <Link href="">
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
            </Link> */}
          </div>

          {/* <div className="w-64 h-[fit-content] bg-cRed shadow-md px-4 rounded-md space-y-1 mt-10 ltr:ml-auto rtl:mr-auto">
            <h2 className="font-extrabold text-xl py-2 text-cWhite font-bold">
              {applicationStatus[preferredLanguage]}
            </h2>
            <Link href="">
              <button
                className="flex items-center bg-cWhite text-cBlack px-5 py-2 rounded-md h-10 mx-auto"
                type="submit"
                role="button"
              >
                {applyNow}
                <img
                  className="ml-2"
                  /icons/arrow-up-right.svg"
                  alt="arrow"
                />
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
