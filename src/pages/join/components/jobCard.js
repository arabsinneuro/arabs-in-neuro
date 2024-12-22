import React from "react";
import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";

const JobCard = ({ title, description, responsibilities, competencies }) => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;

  const { responsibilitiesLabel, coreCompetencies } =
    currentContent.opportunities;
  return (
    <div className="bg-cWhite rounded-2xl shadow-xl text-cBlack mx-auto p-10 my-8">
      <div className="font-extrabold text-2xl mb-2">{title}</div>
      <div className="mt-2">{description}</div>
      <br />
      {responsibilities.length > 0 && (
        <div className="mt-4">
          <div className="font-extrabold text-md mb-2">{responsibilitiesLabel}</div>
          <ul className="list-disc pl-4">
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
          <br />
        </div>
      )}

      {competencies.length > 0 && (
        <div className="mt-4">
          <div className="font-extrabold text-md mb-2">{coreCompetencies}</div>
          <ul className="list-disc pl-4">
            {competencies.map((comp, index) => (
              <li key={index}>{comp}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const JobList = ({ jobData }) => {
  return (
    <div>
      {jobData && jobData.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default JobList;
