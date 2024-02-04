import React, { useContext } from "react";
import Link from "next/link";
import LanguageContext from "@/context/LanguageContext";

const SchoolDetails = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { summerSchoolDetails, viewDetails } = currentContent.school;
  return (
    <div className="flex justify-between lg:px-40 px-20 py-5">
      <div className="text-2xl font-extrabold text-cBlack">
        {summerSchoolDetails} <span className="text-cRed"> 2023</span>
      </div>
      <Link href="">
        <button className="bg-cRed text-cWhite py-2 px-4 my-5 rounded-md hover:bg-opacity-80 flex items-center space-x-2">
          <span>{viewDetails}</span>
          <img className="ml-2" src="icons/arrow-right.svg" alt="arrow" />
        </button>
      </Link>
    </div>
  );
};

export default SchoolDetails;
