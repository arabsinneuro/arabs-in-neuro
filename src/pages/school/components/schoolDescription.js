import LanguageContext from '@/context/LanguageContext';
import React from 'react';
import { useContext } from 'react';

const SchoolDescription = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { title, description, connectTitle, connectDescription, immerseTitle, immerseDescription, rubTitle, rubDescription, forefrontTitle, forefrontDescription, equipDescription, applyNow } = currentContent.description;

  return (
    <div className="min-h-screen text-cN800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-cRed">{title}</h2>
        <p className="text-xl mb-10 text-center text-cN800">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-cWhite p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-cRed">{connectTitle}</h3>
            <p className="text-md text-cN800">{connectDescription}</p>
          </div>
          <div className="bg-cWhite p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-cRed">{immerseTitle}</h3>
            <p className="text-md text-cN800">{immerseDescription}</p>
          </div>
          <div className="bg-cWhite p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-cRed">{rubTitle}</h3>
            <p className="text-md text-cN800">{rubDescription}</p>
          </div>
          <div className="bg-cWhite p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-cRed">{forefrontTitle}</h3>
            <p className="text-md text-cN800">{forefrontDescription}</p>
          </div>
        </div>
        <div className="mt-12 mb-8">
          <div className="bg-cWhite py-8 px-6 md:px-12 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-center text-cGreen">{equipDescription}</p>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-cRed hover:bg-cRedLight text-cWhite font-bold py-3 px-6 rounded-lg text-lg">{applyNow}</button>
        </div>
      </div>
    </div>
  );
};

export default SchoolDescription;
