import LanguageContext from "@/context/LanguageContext";
import React, { useContext } from "react";

const DailySchedule = ({ calendarUrl }) => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const {
    dailySchedule,
    timeExplanation,
    timeZonesList,
    calendarImportInfo,
    calendarImportInfoCompletion,
  } = currentContent.details;

  return (
    <>
      <div className="lg:px-20 px-5">
        <h1 className="mt-20 mb-5 text-2xl text-cN600 font-extrabold">
          {dailySchedule}
        </h1>
        
        
        <div className="overflow-x-auto">
          <div className="lg:px-10 w-screen flex justify-center lg:w-full">
            <iframe
              src={calendarUrl}
              width="800"
              height="600"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="flex grid grid-cols-1 md:grid-cols-2 py-20">
        <div className="lg:px-20 px-5">
          <p className="px-2 py-2 text-sm font-extrabold text-cBlack">
            {timeExplanation}
          </p>
          <ul className="list-disc py-5 px-10 text-sm">
            {timeZonesList &&
              timeZonesList.map((zone, index) => <li key={index}>{zone}</li>)}
          </ul>
        </div>

        <div className="md:w-96 w-64 bg-cPink shadow-md px-4 py-2 rounded-md space-y-2 ltr:ml-auto rtl:mr-auto font-extrabold md:text-lg text-md  text-cWhite">
          <h2>{calendarImportInfo}</h2>
          <h2>{calendarImportInfoCompletion}</h2>
        </div>
      </div>
    </>
  );
};

export default DailySchedule;
