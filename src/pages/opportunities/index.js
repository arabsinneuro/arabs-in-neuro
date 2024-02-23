import { useState, useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import JobList from "./components/jobCard";
import JobData from "../../../public/data/opportunities/jobsData";
import Link from "next/link";

function OpportunitiesPage() {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;

  const { volunteerToday, thriveTomorrow, makeNeuronDifference, applyHere } =
    currentContent.opportunities;

  const volunteerStatus = {
    en: "New Volunteering Positions Available!",
    ar: "وظائف تطوع جديدة متاحة!",
  };

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/faq.svg')]">
      <div className="grid grid-cols-1 md:grid-cols-2 py-20">
        <div className="lg:px-20 px-10">
          <h1 className="text-3xl font-extrabold text-cBlack">
            {volunteerToday}
          </h1>
          <h1 className="text-3xl font-extrabold text-cBlack  py-2">
            {thriveTomorrow}
          </h1>
          <p className="mx-2 my-2 text-xs font-bold text-cRed">
            {makeNeuronDifference}
          </p>
        </div>

        <div className="w-60 bg-cGreenLight shadow-md px-4 rounded-md space-y-1 ltr:ml-auto rtl:mr-auto mt-10">
          <h2 className="font-extrabold text-xl py-2 text-cWhite font-bold">
            {volunteerStatus[preferredLanguage]}
          </h2>
          <Link href="https://forms.gle/cdxfppJhx8vT6YVP7">
            <button
              className="flex items-center bg-cWhite text-cBlack px-5 py-2 rounded-md h-10 mx-auto"
              type="submit"
              role="button"
            >
              {applyHere}
              <img
                className="ml-2"
                src="icons/arrow-up-right.svg"
                alt="arrow"
              />
            </button>
          </Link>
        </div>
      </div>
      <div dir="ltr" className=" mx-auto pb-20 lg:px-20 px-10 lg:w-4/5">
        <JobList jobData={JobData} />
      </div>
    </div>
  );
}

export default OpportunitiesPage;
