import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import Link from "next/link";
import { studentsApplicationLink, taApplicationLink } from "@/app/constants";

const ResponsibilitiesComponent = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    teacherAssistants,
    role,
    leadGuideResearch,
    responsibilities,
    facilitateLearning,
    position,
    fullTimeTemporary,
    benefits,
    certificateLetter,
    students,
    commitment,
    fullTimeAttendance,
    groupDynamics,
    placedInGroups,
    engagement,
    participateDiscussions,
    outcome,
    receiveCertificate,
    applyNow,
  } = currentContent.school;
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-16 mx-5 md:mx-20 text-cWhite">
      <div className="w-full md:w-1/2 bg-cRed p-4 rounded-lg shadow-md mx-auto flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-4">{students}</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <b>{commitment}:</b> {fullTimeAttendance}
            </li>
            <li className="mb-2">
              <b>{groupDynamics}:</b> {placedInGroups}
            </li>
            <li className="mb-2">
              <b>{engagement}:</b> {participateDiscussions}
            </li>
            <li className="mb-2">
              <b>{outcome}:</b> {receiveCertificate}
            </li>
          </ul>
        </div>
        <div className="pt-5">
          <Link
            href={studentsApplicationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="flex items-center bg-cWhite text-cBlack px-5 py-2 rounded-md h-10 mx-auto mb-4"
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
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-cGreen p-4 rounded-lg shadow-md mx-auto flex flex-col justify-between text-cWhite">
        <div>
          <h2 className=" text-lg font-semibold mb-4">{teacherAssistants}</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <b>{role}:</b> {leadGuideResearch}
            </li>
            <li className="mb-2">
              <b>{responsibilities}:</b> {facilitateLearning}
            </li>
            <li className="mb-2">
              <b>{position}:</b> {fullTimeTemporary}
            </li>
            <li className="mb-2">
              <b>{benefits}:</b> {certificateLetter}
            </li>
          </ul>
        </div>
        <div className="pt-5">
          <Link
            href={taApplicationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="flex items-center bg-cWhite text-cBlack px-5 py-2 rounded-md h-10 mx-auto mb-4"
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResponsibilitiesComponent;
