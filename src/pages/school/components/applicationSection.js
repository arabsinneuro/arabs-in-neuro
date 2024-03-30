import React, { useContext } from 'react';
import LanguageContext from "@/context/LanguageContext";

const ApplicationSection = () => {
  const languageContext = useContext(LanguageContext);
  const {
    applicationDetails,
    applyThroughLink,
    applicationDeadline,
    dontMissOut,
    applyNow,
  } = languageContext.currentContent.description;

  return (
    <div className='text-cN800 mx-auto px-5 lg:px-20 lg:py-10 py-5'>
    <section className="lg:py-20 py-10 px-4 py-6 bg-cWhite rounded-md shadow-xl transform transition duration-500 hover:scale-105">
      <h3 className="text-3xl font-bold mb-6 text-cRed text-center">
        {applicationDetails}
      </h3>
      <p className="mb-4 text-lg text-center text-gray-700">
        {applyThroughLink}
      </p>
      <p className="mb-8 text-lg font-semibold text-center text-gray-700">
        {applicationDeadline}
      </p>
      <div className="text-center">
        <p className="text-xl font-medium mb-10 text-gray-700">
          {dontMissOut}
        </p>
        <a
          href=""
          className="inline-block bg-cRed hover:bg-cRedLight text-cWhite font-bold py-3 px-8 rounded-lg text-lg shadow transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          {applyNow}
        </a>
      </div>
    </section>
    </div>
  );
};

export default ApplicationSection;
