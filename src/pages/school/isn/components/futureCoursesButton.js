import LanguageContext from "@/context/LanguageContext";
import React, { useContext } from "react";

const FutureCoursesButton = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { futureCourses } = currentContent.isnSchool;

  return (
    <div className="lg:px-20 px-5 py-5">
      <div className="bg-cPink text-cWhite py-2 px-4 my-5 rounded-md mx-auto lg:mx-0 text-center">
        {futureCourses}
      </div>
    </div>
  );
};

export default FutureCoursesButton;

