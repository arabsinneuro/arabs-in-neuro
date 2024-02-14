import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";

const Overview = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const {
    introCompNeuroscience,
    introCompNeuroText,
    applications2022,
    closedApplications2023,
  } = currentContent.school;

  return (
    <div>
      <div className="py-20 grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2 px-10">
          <h1 className="lg:px-10 text-3xl font-extrabold text-cBlack">
            {introCompNeuroscience}
          </h1>
          <br />
          <p className="lg:px-10 px-2 py-2 text-s text-cBlack">{introCompNeuroText}</p>
          <br />
          <p className="lg:px-10 px-2 py-2 text-sm text-cBlack">{applications2022}</p>
        </div>

        <div className="md:col-span-1 w-64 h-[fit-content] bg-cRed shadow-md px-4 rounded-md space-y-1 mt-10 ltr:ml-auto rtl:mr-auto">
          <h2 className="font-extrabold text-xl py-2 text-cWhite font-bold">
            {closedApplications2023}
          </h2>
        </div>
      </div>

      <div className="lg:px-20 px-10 py-5">
        <img
          src="/assets/school/map.png"
          alt="map Image"
          className="w-full h-full object-fit rounded-md py-4"
        />
      </div>
    </div>
  );
};

export default Overview;
