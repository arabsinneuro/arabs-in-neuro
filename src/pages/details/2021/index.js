import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import {
  courseDaysData,
  instructorsData,
  materialsData,
  courseOutlineData,
  welcomeVideoUrl,
  calendarUrl,
} from "../../../../public/data/school/2021";
import SchoolComponent from "../components/schoolComponent";

function school2021() {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage } = languageContext;

  const languageSpecificInstructors =
    instructorsData[preferredLanguage] || instructorsData.en;

  const languageSpecificCourseDays =
    courseDaysData[preferredLanguage] || courseDaysData.en;
  const langauageBasedCourseOutlineData =
    courseOutlineData[preferredLanguage] || courseOutlineData.en;

  return (
    <SchoolComponent
      year="2021"
      languageSpecificInstructors={languageSpecificInstructors}
      materialsData={materialsData}
      welcomeVideoUrl={welcomeVideoUrl}
      langauageBasedCourseOutlineData={langauageBasedCourseOutlineData}
      calendarUrl={calendarUrl}
      languageSpecificCourseDays={languageSpecificCourseDays}
    />
  );
}

export default school2021;
