import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import LanguageContext from "@/context/LanguageContext";
import CourseOutline from "../components/courseOutline";
import InstructorsList from "../components/instructorsList";
import DailySchedule from "../components/dailySchedule";
import CourseMaterials from "../components/courseMaterial";
import CollabsList from "./collabsList";
import ParticipantsNote from "./participantsNote";
import Link from "next/link";
import { studentsApplicationLink, taApplicationLink } from "@/app/constants";

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
    qualifications,
    applyHere,
    previousYear,
    latestYear,
    applyNow,
    studentsApplication,
    teacherAssistantsApplication,
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
    en: "Applications close on May 15. Results will be announced via email on May 16. Stay tuned!",
    ar: "سيتم إغلاق باب التقديم في 15 مايو، وستُعلن النتائج عبر البريد الإلكتروني في 16 مايو. ترقبوا!",
  };

  const schoolDuration = {
    en: "The school's duration is 3 weeks, starting from September 1 until September 19.",
    ar: "مدة المدرسة 3 أسابيع، تبدأ من 1 سبتمبر حتى 19 سبتمبر.",
  };

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/faq.svg')]">
      <div className="py-20">
        <div className="fixed top-20 left-0 right-0 bg-cWhite z-10">
          <div className="flex items-center lg:px-20 px-5 mt-10 mb-5">
            <h1 className="text-3xl text-cBlack font-extrabold">
              {courseDetails}
            </h1>
            <div className="px-5">
              <select
                className="flex items-center text-cRed bg-transparent border-none font-bold text-lg"
                value={selectedYear}
                onChange={handleYearChange}
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>
        </div>

        {selectedYear !== `${currentYear}` && (
          <div className="lg:px-20 px-5 mt-20  text-cBlack font-bold">
            <h1 className="text-lg">{summerSchoolConcluded}</h1>
            <h2 className="text-md text-cGreen">{stayTuned}</h2>
          </div>
        )}

        {selectedYear == `${currentYear}` && (
          <div className="lg:px-20 px-5 mt-10 mb-5 text-cBlack font-bold">
            <h3 className="text-lg font-bold text-cN800 mb-5">
              {schoolDuration[preferredLanguage]}
            </h3>
            <h3 className="text-lg font-bold text-cN800 mb-5">
              {applicationStatus[preferredLanguage]}
            </h3>
            <br />
            <div className="flex flex-wrap gap-10 justify-around w-full">
              {/* <Link
                href={studentsApplicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:w-1/3 w-full bg-cRed shadow-md px-4 rounded-md space-y-1 flex item-center justify-center"
              >
                <div>
                  <h2 className="font-extrabold text-xl py-3 text-cWhite font-bold">
                    {studentsApplication}
                  </h2>
                  <button
                    className="flex items-center bg-cWhite text-cBlack px-5 py-2 rounded-md h-10 mx-auto mt-auto"
                    type="submit"
                    role="button"
                  >
                    {applyNow}
                    <img
                      className="ml-2"
                      src="/icons/arrow-up-right.svg"
                      alt="arrow"
                    />
                  </button>
                </div>
              </Link> */}
              {/* <Link
                href={taApplicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:w-1/3 w-full bg-cGreen shadow-md px-4 rounded-md space-y-1 flex item-center justify-center"
              >
                <div>
                  <h2 className="font-extrabold text-xl py-3 text-cWhite font-bold">
                    {teacherAssistantsApplication}
                  </h2>
                  <button
                    className="flex items-center bg-cWhite text-cBlack px-5 py-2 rounded-md h-10 mx-auto mt-auto"
                    type="submit"
                    role="button"
                  >
                    {applyNow}
                    <img
                      className="ml-2"
                      src="/icons/arrow-up-right.svg"
                      alt="arrow"
                    />
                  </button>
                </div>
              </Link> */}
            </div>
          </div>
        )}

        {participantsNoteData && (
          <ParticipantsNote
            title={
              selectedYear == `${currentYear}` ? qualifications : participants
            }
            participantsNoteData={participantsNoteData}
            language={preferredLanguage}
          />
        )}

        {languageSpecificInstructors && (
          <InstructorsList
            instructors={languageSpecificInstructors}
            instructorsTitle={instructors}
          />
        )}

        {materialsData && (
          <CourseMaterials
            courseMaterialsTitle={courseMaterials}
            materialsData={materialsData}
            welcomeVideoUrl={welcomeVideoUrl}
          />
        )}

        {langauageBasedCourseOutlineData && (
          <CourseOutline courseOutlineData={langauageBasedCourseOutlineData} />
        )}

        {languageSpecificCourseDays && (
          <DailySchedule
            calendarUrl={calendarUrl}
            courseDaysData={languageSpecificCourseDays}
          />
        )}

        {collabsData && (
          <CollabsList collabsData={collabsData} language={preferredLanguage} />
        )}

        <div className="lg:px-20 px-5">
          <Link
            href={`/details/${selectedYear > 2022 ? selectedYear - 1 : 2025}`}
          >
            <button className="bg-cPink text-cWhite py-2 px-4 my-5 rounded-md mx-auto lg:mx-0">
              {selectedYear > 2022 ? previousYear : latestYear}{" "}
              {selectedYear > 2022 ? selectedYear - 1 : 2025}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SchoolComponent;
