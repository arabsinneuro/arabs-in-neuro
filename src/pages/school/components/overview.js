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
  } = currentContent.school;

  const applicationStatus = {
    en: "Applications for the 2023 summer school have closed.",
    ar: "تم إغلاق التقديم لمدرسة الصيف لعام 2023.",
  };

  return (
    <div>
      <div className="md:py-20 py-10 grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2 md:px-10 px-5">
          <h1 className="lg:px-10 text-3xl font-extrabold text-cBlack">
            {introCompNeuroscience}
          </h1>
          <br />
          <p className="lg:px-10 px-2 py-2 text-s font-bold text-cBlack">
            {introCourseTitle}
          </p>
          <p className="lg:px-10 px-2 py-2 text-sm text-cBlack">
            {summerSchoolContent}
          </p>
          <p className="lg:px-10 px-2 py-2 text-sm text-cBlack">
            <span className="text-md font-bold text-cRed">
              {introCourseDescription}:{" "}
            </span>{" "}
            {journeyDescription}
          </p>
        </div>

        <div className="md:col-span-1 w-64 h-[fit-content] bg-cRed shadow-md px-4 rounded-md space-y-1 mt-10 ltr:ml-auto rtl:mr-auto">
          <h2 className="font-extrabold text-xl py-2 text-cWhite font-bold">
            {applicationStatus[preferredLanguage]}
          </h2>
          {/* <Link href="">
            <button
              className="flex items-center bg-cWhite text-cBlack px-5 py-2 rounded-md h-10 mx-auto"
              type="submit"
              role="button"
            >
              applyHere
              <img
                className="ml-2"
                src="icons/arrow-up-right.svg"
                alt="arrow"
              />
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
