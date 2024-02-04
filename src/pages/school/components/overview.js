
import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";

const Overview = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const {
    introCompNeuroscience,
    introCompNeuroText,
    applications2022,
    closedApplications2023
  } = currentContent.school;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-20" style={{ gridTemplateColumns: "3fr 1fr" }}>
        <div className="lg:px-40 px-20 flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-cBlack">{introCompNeuroscience}</h1>
          <br />
          <p className="mx-2 my-2 text-s text-cBlack">{introCompNeuroText}</p>
          <br />
          <p className="mx-2 my-2 text-s text-cBlack">{applications2022}</p>
        </div>

        <div className="w-80 h-[fit-content] bg-cRed shadow-md px-4 rounded-md space-y-1 mt-10 ml-auto">
          <h2 className="font-extrabold text-xl py-2 text-cWhite font-bold">
            {closedApplications2023}
          </h2>
        </div>
      </div>

      <div className="lg:px-40 px-20 py-5">
        <img src="/assets/school/map.png" alt="map Image" className="w-full h-full object-cover rounded-md mb-4" />
      </div>

    </div>
  );
};

export default Overview;
