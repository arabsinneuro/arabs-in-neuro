import React from "react";

const JobCard = ({ title, description, responsibilities, competencies }) => {
  return (
    <div className="bg-cWhite rounded-2xl shadow-xl text-cBlack mx-auto p-10 my-8">
      <div className="font-extrabold text-2xl mb-2">{title}</div>
      <div className="mt-2">{description}</div>
      <br />
      {responsibilities.length > 0 && (
        <div className="mt-4">
          <div className="font-extrabold text-md mb-2">Responsibilities</div>
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
          <div className="font-extrabold text-md mb-2">Core Competencies</div>
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
      {jobData.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default JobList;
