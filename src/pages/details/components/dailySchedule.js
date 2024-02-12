import LanguageContext from '@/context/LanguageContext';
import React, { useContext } from 'react';

const DailySchedule = ({  calendarUrl  }) => {
    const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    dailySchedule, timeExplanation, timeZonesList, calendarImportInfo
  } = currentContent.details;

  return (
    <>
    <div className='px-5'> 
      <h1 className="lg:px-10 px-5 mt-20 mb-10 text-2xl text-cN600 font-extrabold">
        {dailySchedule}
      </h1>
      <div className="lg:px-10 flex w-full overflow-x-auto">
        <iframe
          src={calendarUrl}
          width="800"
          height="600"
          frameBorder="0" 
        ></iframe>
      </div></div>
      <div className="flex grid grid-cols-1 md:grid-cols-2 py-20">
        <div className="lg:px-20 px-10">
          <p className="px-2 py-2 text-sm font-extrabold text-cBlack">
            {timeExplanation}
          </p>
          <ul className="list-disc py-5 px-10 text-sm">
            {timeZonesList.map((zone, index) => (
              <li key={index}>{zone}</li>
            ))}
          </ul>
        </div>

        <div className="lg:w-80 w-64 bg-cPink shadow-md px-4 rounded-md space-y-1 ltr:ml-auto rtl:mr-auto">
          <h2 className="font-extrabold text-lg py-2 text-cWhite font-bold">
            {calendarImportInfo}
          </h2>
        </div>
      </div>
    </>
  );
};

export default DailySchedule;
