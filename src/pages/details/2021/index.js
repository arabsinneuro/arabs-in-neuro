import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import LanguageContext from "@/context/LanguageContext";
import CourseMaterials from "../components/courseMaterial";
import CourseOutline from "../components/courseOutline";
import CourseDays from "../components/courseComponents";
import {
  courseDaysData,
  instructorsData,
  materialsData,
  courseOutlineData,
  welcomeVideoUrl,
  calendarUrl,
} from "../../../../public/data/school/2021";
import InstructorsList from "../components/instructorsList";
import DailySchedule from "../components/dailySchedule";

function school2021() {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    courseDetails,
    instructors,
    courseMaterials,
    participants,
    supportedByTitle,
    acceptanceNotice,
  } = currentContent.details;

  const router = useRouter();
  const [selectedYear, setSelectedYear] = useState("2021");

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    router.push(`/details/${year}`);
  };

  const languageSpecificInstructors =
    instructorsData[preferredLanguage] || instructorsData.en;

  const languageSpecificCourseDays =
    courseDaysData[preferredLanguage] || courseDaysData.en;
  const langauageBasedCourseOutlineData =
    courseOutlineData[preferredLanguage] || courseOutlineData.en;

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/opportunities.svg')]">
      <div className="py-20">
        {/* <div className="flex justify-center items-center">
        <Link href="/school">
        
          <button className="rounded-full bg-cGreen p-2 shadow-md mr-4">
            <img
              className="w-6 h-6 text-cWhite"
              src={isRTL ? "/icons/arrow-right.svg" : "/icons/arrow-left.svg"}
              alt="back"
            />
          </button>
        </Link>
        <h1 className="mx-10 text-3xl text-cBlack font-extrabold">{courseDetails}</h1>
        <div className="rtl:mr-auto ltr:ml-auto">
          <select
            className="flex items-center text-cRed bg-transparent border-none font-bold text-lg"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>

      </div> */}

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
              <option value="2021">2021</option>
            </select>
          </div>
        </div>

        <InstructorsList
          instructors={languageSpecificInstructors}
          instructorsTitle={instructors}
        />

        <CourseMaterials
          courseMaterialsTitle={courseMaterials}
          materialsData={materialsData}
          welcomeVideoUrl={welcomeVideoUrl}
        />
        <div className="lg:px-20 px-5">
          <h1 className="mt-20 mb-10 text-2xl text-cN600 font-extrabold">
            {participants}
          </h1>
          <p>{acceptanceNotice}</p>
        </div>
        <CourseOutline courseOutlineData={langauageBasedCourseOutlineData} />

        <DailySchedule calendarUrl={calendarUrl} />
        <CourseDays courseDaysData={languageSpecificCourseDays} />

        <div className="lg:px-20 px-5">
          <h1 className="mt-20 mb-10 text-2xl text-cN600 font-extrabold">
            {supportedByTitle}
          </h1>
          <div className="lg:px-40 px-20 py-5">
            <img
              src="/assets/school/simons.png"
              alt="map Image"
              className="w-full h-full rounded-md mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default school2021;
