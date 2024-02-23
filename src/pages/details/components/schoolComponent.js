import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import LanguageContext from "@/context/LanguageContext";
import CourseOutline from "../components/courseOutline";
import CourseDays from "../components/courseComponents";
import InstructorsList from "../components/instructorsList";
import DailySchedule from "../components/dailySchedule";
import CourseMaterials from "../components/courseMaterial";
import CollabsList from "./collabsList";
import ParticipantsNote from "./participantsNote";
import Link from "next/link";

function SchoolComponent({
  year,
  participantsNoteData,
  languageSpecificInstructors,
  materialsData,
  welcomeVideoUrl,
  langauageBasedCourseOutlineData,
  calendarUrl,
  languageSpecificCourseDays,
  collabsData,
  applyLink,
}) {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    summerSchoolConcluded,
    stayTuned,
    courseDetails,
    instructors,
    courseMaterials,
    participants,
    applyHere,
  } = currentContent.details;

  const router = useRouter();
  const [selectedYear, setSelectedYear] = useState(year);

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    router.push(`/details/${year}`);
  };

  const currentYear = new Date().getFullYear();

  const applicationStatus = {
    en: "Applications are open until June 2024!",
    ar: "التقديم مفتوح حتى يونيو 2024!",
  };

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/faq.svg')]">
      <div className="py-20">
        <div className="flex items-center  lg:px-20 px-5">
          <h1 className="text-3xl text-cBlack font-extrabold">
            {courseDetails}
          </h1>
          <div className="px-5">
            <select
              className="flex items-center text-cRed bg-transparent border-none font-bold text-lg"
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>
        {selectedYear !== `${currentYear}` && (
          <div className="lg:px-20 px-5 mt-10 mb-5  text-cBlack font-bold">
            <h1 className="text-lg">{summerSchoolConcluded}</h1>
            <h2 className="text-md text-cGreen">{stayTuned}</h2>
          </div>
        )}

        {selectedYear == `${currentYear}` && (
          <div className="lg:px-20 px-5 mt-10 mb-5  text-cBlack font-bold">
            <h2 className="text-xl font-extrabold text-cGreen mb-5">
              {applicationStatus[preferredLanguage]}
            </h2>
            <Link href={applyLink}>
              <button
                className="flex items-center bg-cRed text-cWhite px-5 py-5 rounded-md h-10"
                type="submit"
                role="button"
              >
                {applyHere}
                <img
                  className="ml-2"
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                />
              </button>
            </Link>
          </div>
        )}

        <ParticipantsNote
          title={participants}
          participantsNoteData={participantsNoteData}
          language={preferredLanguage}
        />

        <InstructorsList
          instructors={languageSpecificInstructors}
          instructorsTitle={instructors}
        />

        <CourseMaterials
          courseMaterialsTitle={courseMaterials}
          materialsData={materialsData}
          welcomeVideoUrl={welcomeVideoUrl}
        />

        <CourseOutline courseOutlineData={langauageBasedCourseOutlineData} />

        <DailySchedule calendarUrl={calendarUrl} />
        <CourseDays courseDaysData={languageSpecificCourseDays} />

        <CollabsList collabsData={collabsData} language={preferredLanguage} />
      </div>
    </div>
  );
}

export default SchoolComponent;
