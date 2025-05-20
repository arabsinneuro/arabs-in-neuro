import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import Link from "next/link";
import { eegSchoolApplicationLink } from "@/app/constants";

const Overview = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    ibnSinaNeurotech,
<<<<<<< HEAD
=======
    fMRIandEEG,
>>>>>>> 3e50aa8 (fMRI and EEG update)
    introNeuro,
    programOverview,
    experimentalProtocols,
    dataAnalysisModeling,
    applyNow,
    studentsApplication,
    requiredTimeCommitment,
  } = currentContent.isnSchool;

<<<<<<< HEAD
  const applicationStatus = {
    en: "Stay tuned for the application opening!",
    ar: "ترقبوا فتح التقديم!",
  };
=======
  // const applicationStatus = {
  //   en: "Stay tuned for the application opening!",
  //   ar: "ترقبوا فتح التقديم!",
  // };
>>>>>>> 3e50aa8 (fMRI and EEG update)
  // const applicationStatus = {
  //   en: "We are no longer accepting applications.",
  //   ar: "لم نعد نقبل طلبات الالتحاق .",
  // };
<<<<<<< HEAD
  // const applicationsDuration = {
  //   en: "Applications are open until August 18.",
  //   ar: "التقديمات مفتوحة حتى 18 أغسطس.",
  // };
  const schoolDuration = {
    en: "This school will be held in person at the New York University Abu Dhabi",
    ar: "ستُقام هذه المدرسة حضوريًا في جامعة نيويورك أبوظبي",
=======
  const applicationsDuration = {
    en: "Applications are open until June 15.",
    ar: "التقديمات مفتوحة حتى 15 يونيو.",
  };
  const schoolDuration = {
    en: "This school will be held in person at Saadiyat Island - Abu Dhabi - United Arab Emirates",
    ar: "ستُقام هذه المدرسة حضوريًا في جزيرة السعديات - أبوظبي - الإمارات العربية المتحدة",
>>>>>>> 3e50aa8 (fMRI and EEG update)
  };

  return (
    <div>
      <div className="md:py-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 md:px-10 px-5 grid grid-cols-1 gap-4">
          <h1 className="lg:px-10 text-4xl font-extrabold text-cBlack">
            {ibnSinaNeurotech}
          </h1>
<<<<<<< HEAD
=======
          <h1 className="lg:px-10 text-2xl font-extrabold text-cBlack">
            {fMRIandEEG}
          </h1>
>>>>>>> 3e50aa8 (fMRI and EEG update)
          <p className="lg:px-10 text-lg font-extrabold italic text-cRed">
            {introNeuro}
          </p>

          <p className="lg:px-10 px-2 py-2 text-md text-cBlack">
            {programOverview}
<<<<<<< HEAD
            <br/>
            <br/>
            {experimentalProtocols}
            <br/>
            <br/>
=======
            <br />
            <br />
            {experimentalProtocols}
            <br />
            <br />
>>>>>>> 3e50aa8 (fMRI and EEG update)
            {dataAnalysisModeling}
          </p>
          <h3 className="lg:px-10 px-2 text-md font-extrabold text-cGreen">
            {schoolDuration[preferredLanguage]}
          </h3>
          <p className="lg:px-10 px-2 text-md font-extrabold text-cGreen">
            {requiredTimeCommitment}
          </p>
        </div>

        <div className="md:col-span-1 flex flex-col justify-start items-start">
          <Link
            href={eegSchoolApplicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-72 h-[fit-content] bg-cRed shadow-md px-5 rounded-md space-y-1 mt-10 ltr:ml-auto rtl:mr-auto"
          >
            <div>
              <h2 className="font-extrabold text-xl py-3 text-cWhite">
                {studentsApplication}
              </h2>
              <p className="text-md font-bold text-cWhite pb-3">
<<<<<<< HEAD
                {applicationStatus[preferredLanguage]}
              </p>

              {/* <button
=======
                {applicationsDuration[preferredLanguage]}
              </p>

              <button
>>>>>>> 3e50aa8 (fMRI and EEG update)
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
<<<<<<< HEAD
              </button> */}
=======
              </button>
>>>>>>> 3e50aa8 (fMRI and EEG update)
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
